/**
 * Palindromic Partitions of a string
 */

const isPalindrome = (string, start, end) =>{
  
    while(start < end){
        if(string[start] !== string[end]){
            return false;
        }
        start++;
        end--;
    }
    return true;
}



const PalindromicPartition = (string, start, end, buffer) =>{
    if(start >= end){
        console.log(buffer);
    }else{
       for(let index = start; index < end; index++){
        if(isPalindrome(string, start, index)){
            buffer.push(string.substring(start, index + 1));
            PalindromicPartition(string, index + 1, end, buffer);
            buffer.pop();
        }
       }
    }
}


let stringInput = "nitin"
PalindromicPartition(stringInput, 0, stringInput.length, []);