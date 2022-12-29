/**
 * Given an array of jobs where every job has a deadline 
 * and associated profit if the job is finished before the deadline. 
 * It is also given that every job takes a single unit of time, 
 * so the minimum possible deadline for any job is 1
 */

const JobSequence =(jobs)=>{
    jobs.sort((a,b)=>a[1]-b[1]);
    let output = [jobs[0]];
    
    for(let index = 1; index < jobs.length; index++){
        let currentDeadline = jobs[index][1];
        let lastEntry = output[output.length - 1];
        if(lastEntry[1] === currentDeadline && lastEntry[2] < jobs[index][2]){
            output.pop();
            output.push(jobs[index])
        }else if(lastEntry[1] < jobs[index][1]){
            output.push(jobs[index]);
        }
    }
    return output;
}

const jobs = [
  [1, 4, 20],
  [2, 1, 10],
  [3, 1, 40],
  [4, 1, 30],
];

let result = JobSequence(jobs)

console.log(result)
