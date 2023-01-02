/*
Given an array a[ ] of N elements. 
Consider array as a circular array i.e. element after an is a1. 
The task is to find maximum sum of the absolute difference 
between consecutive elements with rearrangement of array elements allowed 
i.e. after any rearrangement of array elements find |a1 – a2| + |a2 – a3| + …… + |an-1 – an| + |an – a1|.

*/


let a = [4, 2, 1, 8]
swapMax(a)
function swapMax(array){
    array.sort((a,b)=>a-b)
    let swapArray = [];
    let start = 0;
    let end = array.length - 1;
    while(start <= end){
        swapArray.push(array[start]);
        swapArray.push(array[end]);
        start++;
        end--;
    }
    swapArray
    let sum = 0;
    for(let index = 0; index < swapArray.length; index++){
        sum += Math.abs(
          swapArray[index] - swapArray[(index + 1) % swapArray.length]
        );
    }
    return sum;
}