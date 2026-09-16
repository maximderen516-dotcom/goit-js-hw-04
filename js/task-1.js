'use strict';
 function isEnoughCapacity(products, containerSize) {
   let totalProductsSize = 0;
const values = Object.values(products);
for (const count of values){
   totalProductsSize += count ;
}
return totalProductsSize <= containerSize;
}
// 5. Виклики console.log для ментора
console.log(isEnoughCapacity({ apples: 10, bananas: 5, oranges: 8 }, 30)); // true
console.log(isEnoughCapacity({ apples: 10, bananas: 5, oranges: 8 }, 20)); // false
console.log(isEnoughCapacity({ tv: 2, fridge: 1 }, 5)); // true
console.log(isEnoughCapacity({ tv: 2, fridge: 1 }, 2)); // false