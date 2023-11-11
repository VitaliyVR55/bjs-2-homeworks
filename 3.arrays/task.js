
     // Задача 1
function compareArrays(arr1, arr2) {
    /*if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;*/
  return arr1.length === arr2.length && arr1.every((item, i) => item === arr2[i]);
}  //    сравнение длин массивов         поэлементное сравнение массивов         


      // Задача 2
function getUsersNamesInAgeRange(users, gender) {
    
    if (users.length === 0) {
        return 0;
    }

    /* if (gender !== 'женский') {
        if (gender !== 'мужской'){
            return 0;
        }
    }
      
   const arr = users.filter((item) => item.gender === gender);
                        // поиск объектов по полу
    const result = arr.reduce((sumAge, item) => sumAge + item.age, 0) / arr.length;
                        // нахождение суммы годов
    return result; */

    if (gender === 'мужской') {
        return users.filter((user) => user.gender === 'мужской').map((user) => user.age).reduce((acc, age, i, arr) => acc + age / arr.length, 0);
    } else if (gender === 'женский') {
        return users.filter((user) => user.gender === 'женский').map((user) => user.age).reduce((acc, age, i, arr) => acc + age / arr.length, 0);
    } else {
        return  0;
    }
    
}