/**
 * Given N meetings with start and end time, 
 * find the maximum no. of jobs that can be accomodated in a room
 */

const findMaxMeeting = (meetings) =>{
  meetings.sort((a,b)=>a[1]-b[1]);
  let result = [meetings[0]];
  let ending = meetings[0][1];
  for(let index = 1; index < meetings.length - 1; index++){
    if(ending < meetings[index][0]){
      result.push(meetings[index]);
      ending = meetings[index][1]
    }
  }
  return result;
}


const meetings = [
  [10, 20],
  [12, 25],
  [20, 30],

];

let output = findMaxMeeting(meetings)

console.log(output);