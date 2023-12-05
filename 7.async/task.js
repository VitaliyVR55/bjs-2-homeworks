"user strict";

class AlarmClock {
  constructor(alarmCollection, intervalId) {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error("Отсутствуют обязательные аргументы");
      return;
    }
    if (this.alarmCollection.some(alarm => alarm.time === time)) {
      console.warn("Уже присутствует звонок на это же время");
    }
    this.alarmCollection.push({ time, callback, canCall: true });
  } 

  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
  } 

  getCurrentFormattedTime() {
    /* const date = new Date();                                                                 // Вариант 1
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`; */ 
    const date = new Date();                                                                     // Вариат 2
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
    /* return new Date().toLocaleTimeString("ru-Ru", {                                           // Вариант 3
      hour: "2-digit",
      minute: "2-digit",
    }); */
  } 

  start() {
    if (this.intervalId) {
      return;
    }
    
    this.intervalId = setInterval(() => {
      const curentTime = this.getCurrentFormattedTime();
      this.alarmCollection.forEach(alarm => {
       // if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall) {    // вариант без переменной curentTime
        if (alarm.time === curentTime && alarm.canCall) {
          alarm.canCall = false;
          alarm.callback();
        }
      })
    }, 1000);
  } 

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  } 

  resetAllCalls() {
    this.alarmCollection.forEach(alarm => alarm.canCall = true);
  } 

  clearAlarms() {
    this.stop();
    // this.alarmCollection.length = 0;
    this.alarmCollection = [];
  }
}