"use strict"

// Задача №1

class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }
  
  fix() {
    this.state = this.state * 1.5;
  }
  
  set state(state) {
    if (state < 0) {
      this._state = 0;
    } else if (state > 100) {
      this._state = 100;
    } else {
      this._state = state;
    }
  }
  
  get state() {
    return this._state;
  }
  
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

// Задача No2

class Library {
    constructor(name) {
      this.name = name;
      this.books = [];
    }
    
    addBook(book) {
      if (book.state > 30) {
        this.books.push(book);
      }
    }
    
    findBookBy(type, value) {
      /* for (let book of this.books) {
        if (book[type] === value) {
          return book;
        }
      }
      return null; */ 
      return this.books.find(book => book[type] === value) || null;
    }
    
    giveBookByName(bookName) {
      for (let i=0; i < this.books.length; i++) {
        if (this.books[i].name === bookName) {
            const book = this.books[i];
            this.books.splice(i, 1);
            return book;
        }        
      }
      return null;
    }
}


// Задача №3

class Student {
    constructor(name) {
      this.name = name;
      this.marks = {};
    }
  
    addMark(mark, subjectName) {
      if (mark < 2 || mark > 5) {
        return;
      }

      /* if (this.marks[subjectName] === undefined) {   
        this.marks[subjectName] = [];
      } */

      if (!this.marks.hasOwnProperty(subjectName)) {
        this.marks[subjectName] = [];
      } 

      this.marks[subjectName].push(mark);
    }

    getAverageBySubject(subjectName) {
        if (!this.marks.hasOwnProperty(subjectName)) {
            return 0;
        }
        
        /* let summ = this.marks[subjectName].reduce(       // Нахождение суммы оценок
            (acc, mark) => acc + mark, 0);               // Если дина [] 0, то в ответе будет 0
        return summ / this.marks[subjectName].length; */

       return this.marks[subjectName].reduce(
            (acc, mark) => acc + mark / this.marks[subjectName].length,
             0);
    }

    getAverage() {
        const subjects = Object.keys(this.marks);
        if (subjects.length === 0) {
            return 0;
        }
        return subjects.reduce(
            (acc, subjectName) => acc + this.getAverageBySubject(subjectName) / subjects.length,
            0);
        
    }
}

