function isMarathon25Miles(distanceList) {
    let totalDistance = 0;
    for (let i = 0; i < distanceList.length; i++) { // postfix
      totalDistance += Math.abs(distanceList[i]); // return absolute value ( used google )
    }
    return totalDistance === 25 || totalDistance > 25;
  }
distanceList = [121];
console.log(isMarathon25Miles(distanceList)); // true

distanceList = [10, -3, 5, 8, -5, 2, 7, 1, -5];
console.log(isMarathon25Miles(distanceList)); // true


// just a basic code to calculate sum of input and return true/false


// This line of code is setting up a loop that will iterate over a list of distances called distanceList.

//The loop will start with the first item in the list (i.e., i = 0), and continue as long as i is less than the length of the list (i.e., i < distanceList.length).

//After each iteration of the loop, the value of i will be incremented by 1 (i.e., i++), until the loop has iterated over all the items in the list.