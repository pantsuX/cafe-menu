function isMarathon25Miles(distanceList) {
    let totalDistance = 0;
    for (let i = 0; i < distanceList.length; i++) {
      totalDistance += Math.abs(distanceList[i]);
    }
    return totalDistance === 25 || totalDistance > 25;
  }

  let distanceList = [11];
console.log(isMarathon25Miles(distanceList)); // true

distanceList = [10, -3, 5, 8, -5, 2, 7, 1, -5];
console.log(isMarathon25Miles(distanceList)); // true


// just a basic code to calculate sum of input and return true/false