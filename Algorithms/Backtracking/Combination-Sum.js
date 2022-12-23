/*
 *Given an array of positive integers arr[] and an integer x,
 *The task is to find all unique combinations in arr[] where the sum is equal to x.
 *The same repeated number may be chosen from arr[] an unlimited number of times.
 *Elements in a combination (a1, a2, …, ak) must be printed in non-descending order.
 *(ie, a1 <= a2 <= … <= ak). If there is no combination possible print “Empty”.
 */

let givenArr = [7, 2, 6, 5];
let givenSum = 8;
let ans = [];

//Main function

const combinationalSum = (arr, sum) => {
  const helper = (arr, currSum, index, tempArr) => {
    if (currSum === 0) {
      ans.push(temp);
      return;
    }
    for (let i = index; i < arr.length; i++) {
      if (currSum - arr[i] >= 0) {
        temp.push(arr[i]);
        helper(arr, currSum - arr[i], i, tempArr);
        temp.pop();
      }
    }
  };

  let temp = [];
  let set = new Set(...arr);
  arr = Array.from(set).sort();
  helper(arr, sum, 0, temp);
};



//function call
combinationalSum(givenArr,givenSum);
console.log(ans)

