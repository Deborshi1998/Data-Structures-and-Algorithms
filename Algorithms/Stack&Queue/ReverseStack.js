function reverseStack(stack) {
  if (stack.length === 0) return;
  let temp = stack.pop();
  reverseStack(stack);
  insertAtBottom(stack,temp)
}

function insertAtBottom(stack, element){
    if(stack.length === 0){
        stack.push(element);
        return;
    }
    let topElement = stack.pop();
    insertAtBottom(stack, element);
    stack.push(topElement);

}

let stack = [1, 2, 3, 4, 5];
reverseStack(stack);
console.log(stack); // Outputs [5, 4, 3, 2, 1]
