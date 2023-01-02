

function ispar(x) {
  //your code here
  let parenthesis = x.split("");
  let stack = [];
  for (let index = 0; index < parenthesis.length; index++) {
    if (
      parenthesis[index] === "[" ||
      parenthesis[index] === "{" ||
      parenthesis[index] === "("
    ) {
      stack.push(parenthesis[index]);
      
    } else {
      if (
        (parenthesis[index] === "]" && stack[stack.length - 1] === "[") ||
        (parenthesis[index] === "}" && stack[stack.length - 1] === "{") ||
        (parenthesis[index] === ")" && stack[stack.length - 1] === "(")
      ) {
        stack.pop();
      }else{
        break;
      }
    }
  }
  if (stack.length === 0) return true;
  else return false;
}


 
ispar("{([])}");