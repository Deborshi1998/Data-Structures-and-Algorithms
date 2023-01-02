



const string = "123+*8-";
evaluate(string)
function evaluate(ExpString) {
    if(ExpString.length <= 1)  return ExpString;
    let stack = [];
    for(let index = 0; index < ExpString.length; index++){
        if(ExpString[index] >= 0 || ExpString[index] <= 9){
            stack.push(ExpString[index]);
        }else{
            let number1 = parseInt(stack.pop());
            let number2 = parseInt(stack.pop());
            let operator = ExpString[index];
            switch (operator) {
                case "+":
                    stack.push(String(number1 + number2));
                
                    break;
                case "-":
                    stack.push(String(number2 - number1));
                    break;
                case "*":
                    stack.push(String(number1 * number2));
                    break;
                case "/":
                    stack.push(String(number2 / number1));
                    break;
            
                default:
                    break;
            }
        }
    }
    return stack.pop()
}