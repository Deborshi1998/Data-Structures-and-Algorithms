/**
 * Given a string s and a dictionary of words dict of length n, 
 * add spaces in s to construct a sentence where each word is a valid dictionary word. 
 * Each dictionary word can be used more than once. Return all such possible sentences
 */

let s = "catsanddog";
let n = 5;
let dict = new Set(["cats", "cat","and","sand","dog"]);
let ans = [];
//Main Function

const wordBreak = (currArr, index) =>{
    if(index === s.length){
        ans.push(currArr);
        console.log(ans)
        return;
    }

    for(let i = index + 1; i < s.length; i++){
        let word = s.slice(index, i);
        if(dict.has(word)){
            currArr.push(word);
            wordBreak(currArr, i);
            currArr.pop();
        }
    }
}

wordBreak([], 0)
console.log(ans)