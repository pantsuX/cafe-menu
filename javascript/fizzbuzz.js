function generateFizzBuzzList(endNumber) {
    const fizzBuzzList = [];
    for (let i = 1; i <= endNumber; i++) { //postfix
      if (i % 3 === 0 && i % 5 === 0) {
        fizzBuzzList.push("FizzBuzz"); // add to array
      } else if (i % 3 === 0) { //variable with remainder
        fizzBuzzList.push("Fizz");// add to array
      } else if (i % 5 === 0) { //variable with remainder
        fizzBuzzList.push("Buzz");// add to array
      } else {
        fizzBuzzList.push(i);
      }
    }
    return fizzBuzzList; // code partially done via chat gpt , couldn't figure out how to postfix
  }
  
  const fizzBuzz1 = generateFizzBuzzList(2);
  const fizzBuzz2 = generateFizzBuzzList(3);
  const fizzBuzz3 = generateFizzBuzzList(5);
  const fizzBuzz4 = generateFizzBuzzList(6);
  const fizzBuzz5 = generateFizzBuzzList(15);
  
  console.log(fizzBuzz1.join(", ")); // join them in a rows
  console.log(fizzBuzz2.join(", "));
  console.log(fizzBuzz3.join(", "));
  console.log(fizzBuzz4.join(", "));
  console.log(fizzBuzz5.join(", "));
  