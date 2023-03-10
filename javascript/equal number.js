function countEqual(num1, num2, num3) {
    let count = 0;
    
    if (num1 === num2 && num2 === num3) {
      count = 3;
    } else if (num1 === num2 || num1 === num3 || num2 === num3) {
      count = 2;
    }
    
    return count;
  }

  console.log(countEqual(1, 2, 3)); // 0
console.log(countEqual(1, 1, 2)); // 2
console.log(countEqual(3, 3, 3)); // 3