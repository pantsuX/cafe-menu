function generateFizzBuzzList(endNumber) {
    const fizzBuzzList = [];
    for (let i = 1; i <= endNumber; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        fizzBuzzList.push("FizzBuzz");
      } else if (i % 3 === 0) {
        fizzBuzzList.push("Fizz");
      } else if (i % 5 === 0) {
        fizzBuzzList.push("Buzz");
      } else {
        fizzBuzzList.push(i);
      }
    }
    return fizzBuzzList;
  }
  
  const fizzBuzz1 = generateFizzBuzzList(2);
  const fizzBuzz2 = generateFizzBuzzList(3);
  const fizzBuzz3 = generateFizzBuzzList(5);
  const fizzBuzz4 = generateFizzBuzzList(6);
  const fizzBuzz5 = generateFizzBuzzList(15);
  
  console.log(fizzBuzz1.join(", "));
  console.log(fizzBuzz2.join(", "));
  console.log(fizzBuzz3.join(", "));
  console.log(fizzBuzz4.join(", "));
  console.log(fizzBuzz5.join(", "));
  