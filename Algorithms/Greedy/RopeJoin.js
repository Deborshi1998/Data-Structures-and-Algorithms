

minCost([4, 2, 7 ,6, 9], 4);

function minCost(arr, n) {
        // code here
        arr.sort((a,b)=>b-a);
        let stack = [...arr];
        let sums = 0;
        while(stack.length){
            let rope1 = stack.pop();
            let rope2 = stack.pop();
           sums+=(rope1 + rope2)
            
            if(!stack.length) break;
            stack.push(rope1 + rope2);
        }
       
        
       
       return result;
        
    }