function maximizeSum(arr, n, k) {
  //code here
  arr.sort((a, b) => a - b);

  for (let index = 0; index < n; index++) {
    if (arr[index] >= 0 || k === 0) break;
    arr[index] = -arr[index];
    k--;
  }

  arr.sort((a, b) => a - b);
  if (k % 2 === 1) {
    arr[0] = -arr[0];
  }

  let sum = 0;
  for (let index = 0; index < n; index++) {
    sum += arr[index];
  }
  return sum;
}

console.log(maximizeSum([-1, -2, -3, -4, -5], 5, 10));
