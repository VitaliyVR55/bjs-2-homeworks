"use strict"
function solveEquation(a, b, c) {
  const arr = [];
  const diskr = b * b - 4 * a * c;
  if (diskr > 0) {
    const x1 = (-b + Math.sqrt(diskr)) / (2 * a);
    const x2 = (-b - Math.sqrt(diskr)) / (2 * a);
    arr.push(x1);
    arr.push(x2);
  } else if (diskr === 0) {
      const x = -b / (2 * a);
      arr.push(x);
      }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let P = percent / 100 / 12;
  let S = amount - contribution;
  let n = countMonths;
  let monthPay = S * (P + (P / (((1 + P) ** n) - 1))); 
  let totalAmount = +(monthPay * n).toFixed(2); 
  return totalAmount;  
}