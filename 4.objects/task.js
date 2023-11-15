function Student(name, gender, age) {   // Создание объекта с параметрами
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {   // Добавление предмета
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if (!this.marks) {                                   // Проврка возможности добаления оценок
        return 0;
    }
      
    if (this.marks.length === 0) {
        this.marks = marks;
    } else {
        this.marks.push(...marks);              // добавление оценок по предмету
    }
}

Student.prototype.getAverage = function () {
    if (!this.marks || !this.marks.length) {    // Проверка условия для расчета средней оценки
        return 0;
    }
    const sum = this.marks.reduce((acc, item) => acc + item, 0);  // Сумма оценок
    return sum / this.marks.length;                               // Среднее значение оценок
}

Student.prototype.exclude = function (reason) {  // Отчисление студента
    delete this.subject;                         // Удаление параметров студента
    delete this.marks;
    this.excluded = reason;
}
