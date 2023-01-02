function smallestNumber(S, D){
        //code here
       let number = parseInt("1" + '0'.repeat(D-1));

 Array.from(String(number), Number).reduce((a, b) => a + b);
       // Keep decrementing the number by 1 until the sum of its digits is equal to S
    //    while (
    //      Array.from(String(number), Number).reduce((a, b) => a + b) !== S
    //    ) {
    //      number -= 1;
    //    }

       // Return the smallest number with the given sum of digits
       return number;
    }

smallestNumber(20,2)