/*
 * Given a list of number, create two sub list of equal size whose sum difference is minimum
 */

let minDiff = Number.MAX_SAFE_INTEGER;

// main function
const solve = (arr, currIndex, arr1, arr2, arr1Sum, arr2Sum) => {
  if (currIndex === arr.length) {
    let diff = Math.abs(arr1Sum - arr2Sum);
    if (diff < minDiff) {
      minDiff = diff;
      console.log(arr1 + " " + arr2);
    }
    return;
  }

  if(arr1.length < Math.floor((arr1.length + 1)/2)){
    arr1.push(arr[currIndex]);
    solve(arr, currIndex + 1, arr1, arr2, arr1Sum + arr[currIndex], arr2Sum);
    arr1.pop()
  }

  if (arr2.length < Math.floor((arr1.length + 1) / 2)) {
    arr2.push(arr[currIndex]);
    solve(arr, currIndex + 1, arr1, arr2, arr1Sum, arr2Sum + arr[currIndex]);
    arr2.pop();
  }

};

let givenArr = [3, 4, 5, -3, 100, 1, 89, 54, 23, 20];
solve(givenArr, 0, [], [], 0, 0);
