/*
 *Given a string remove the minimum no. of parenthesis that will make the string valid
 *Return all the valid string combinations
 */

let output = new Set();
//Check if the string is valid
const isValidString = (string) => {
//   if (!string.length) return true;

  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "(") {
      count++;
    } else if (string[i] === ")") {
      count--;
    }
    if (count < 0) return false;
  }
  return count === 0;
};

//Get the minimum no. of invalid parenthesis
const getMin = (str) =>{
    let stack = [];
    for(let i = 0; i <= str.length; i++){
        if(str[i] === '('){
            stack.push('(');
        }
        else if( str[i] === ')'){
            if(stack.length === 0){
                stack.push(")");
            }else if(stack[stack.length -1] === ')'){
                stack.push(")");
            }else if (stack[stack.length - 1] === '(') {
              stack.pop();
            }
        }
    }
    return stack.length;
}


//Main function

const solution = (string, minInValid)=>{
    if(minInValid === 0){
        let currMin = getMin(string);
        if(currMin === 0){
            if(!output.has(string)){
                if (isValidString(string)) output.add(string);
            }
        }
        return;
    }

    for(let i = 0; i < string.length; i++){
        let left = string.substring(0, i);
        let right = string.substring(i + 1);
        solution(left + right, minInValid - 1);
    }
}

let stringValue = "(a)())()";
let minInvalidParenthesis = getMin(stringValue)
solution(stringValue, minInvalidParenthesis);

console.log(output)
