let letters1   = ["a", "b", "c", "d"];
let letters2   = ["f", "s", "z", "s"];
let letters3  = ["a", "b", "f", "z"];
for (let letters of [letters1, letters2, letters3]) {
    letters.reverse();
  }
console.log([...letters1, ...letters2, ...letters3]);
// reversing inputs


