const arr = [1, 6, 6, 2, 3, 1, 6, 22, 33];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 5) {
    continue;
  }
  sum += arr[i];
}
console.log(sum);