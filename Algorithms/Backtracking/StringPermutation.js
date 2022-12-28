/**
 * String Permutation using Backtracking
 */

const Permutate = (string, left, right) => {
  if (left === right) {
    console.log(string.join(""));
  } else {
    for (let index = left; index < right; index++) {
      [string[left], string[index]] = [string[index], string[left]];
      Permutate(string, left + 1, right);
      [string[left], string[index]] = [string[index], string[left]];
    }
  }
};

let givenString = "abc"
Permutate(givenString.split(""), 0, givenString.length);