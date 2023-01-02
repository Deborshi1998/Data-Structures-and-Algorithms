/**
 * Given an array A[ ] of positive integers of size N, 
 * where each value represents the number of chocolates in a packet. 
 * Each packet can have a variable number of chocolates. 
 * There are M students, the task is to distribute chocolate packets among M students such that :
1. Each student gets exactly one packet.
2. The difference between maximum number of chocolates given to a student and minimum number of chocolates given to a student is minimum.
 */


const choc = [3, 4, 1, 9, 56, 7, 9, 12];
distributeChocolate(choc,5)
function distributeChocolate(chocolateArray,children){
    chocolateArray.sort((a,b)=>a-b);
    let leftIndex = 0;
    let rightIndex = children - 1;
    let minDifference = Number.MAX_SAFE_INTEGER;
    while(rightIndex < chocolateArray.length){
        minDifference = Math.min(minDifference, chocolateArray[rightIndex] - chocolateArray[leftIndex]);
        leftIndex++;
        rightIndex++;
    }
    return minDifference;
}