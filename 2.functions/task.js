"use strict";

// Задача 1

function getArrayParams(...arr) {
  let min = Infinity;                      // назначение переменнх
  let max = -Infinity;
  let sum = 0;
  // let avg = 0;
  
  for (let i = 0; i < arr.length; i++) {  // операции фуекции

    // sum += arr[i];

    if (arr[i] < min) {                    // определения мин. значения
      min = arr[i];
    }

    if (arr[i] > max) {                    // определение макс. значения
      max = arr[i];
    }
    
    sum += arr[i];                         // определение суммы значений
  }

  let avg = +(sum / arr.length).toFixed(2);                  // определение среднего значения
 
  
  return { min: min, max: max, avg: avg };
}

//  Задача 2

function summElementsWorker(...arr) {         // Функция суммы элементов
  if (arr.length === 0) {
    return 0;
  }
  
  let sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

function differenceMaxMinWorker(...arr) {     // Функция разницы макс. и мин. значений
  if (arr.length === 0) {
    return 0;
  }
  
  let min = 0;
  let max = null;
  let diff = null;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }    
    if (arr[i] > max) {
      max = arr[i];
    }    
    diff = max - min;
    
    return diff;
  }
}

function differenceEvenOddWorker(...arr) {    // функция разницы четных и нечетных значений
  if (arr.length === 0) {
    return 0;
  }
  
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
    return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {     // функция сред. арифмет. четных значений
  if (arr.length === 0) {
    return 0;
  }
  
  let sumEvenElement = 0;
  let countEvenElement = 0;
  let avgEvenElement = null;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    } 
  }

  avgEvenElement = sumEvenElement / countEvenElement;
  return avgEvenElement;
}


  //  Задача 3

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  
  for (let i = 0; i < arrOfArr.length; i++) {
    let arr = arrOfArr[i];
    let result = func(...arr);
    
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;

  let arrOfArr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
  let func = summElementsWorker;
  let result = makeWork(arrOfArr, summElementsWorker);
  console.log(result);
}