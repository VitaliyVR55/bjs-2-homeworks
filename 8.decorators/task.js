"user strict";

//Задача № 1
function cachingDecoratorNew(func) {
    let cache = [];

    function wrapper(...args) {
      const hash = md5(args);
      
      let objectInCache = cache.find((item) => item.hash === hash);
      if (objectInCache) {
        return "Из кeша: " + objectInCache.result;
        // return `Из кeша: ${objectInCache.result}`;
      }

      let result = func(...args);
      // const result = func.apply(this, args);  // ввриант 2
      // const result = func.call(this, ...args); // вариант 3
      cache.push({hash, result});

      if (cache.length > 5) {
        cache.shift();
      }
      return "Вычисляем: " + result;
      
    }
    
    return wrapper;
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
    let timeoutId = null;
    function wrapper(...args) {
      wrapper.allCount++;
      
      if (timeoutId) {
        clearTimeout(timeoutId);
      } else {
        func(args);
        wrapper.count++;
      }
      timeoutId = setTimeout(() => {
        func(args);
        wrapper.count++;
      }, delay);
    }
  
    wrapper.allCount = 0;
    wrapper.count = 0;
    
    return wrapper;
}
