/**
 * Given arrival and departure times of all trains that reach a railway station.
 *  Find the minimum number of platforms required for the railway station 
 * so that no train is kept waiting.
 *Consider that all the trains arrive on the same day and leave on the same day. 
 *Arrival and departure time can never be the same for a train 
 *but we can have arrival time of one train equal to departure time of the other. 
 *At any given instance of time, same platform can not be used for both departure of a train and arrival of another train. 
 *In such cases, we need different platforms.

 */
// less space more time, time: O(nlong) + O(nlogn) + O(n)
function minPlatforms(arrival, departure, n) {
  arrival.sort((a, b) => a - b);
  departure.sort((a, b) => a - b);
  let platforms = 0;
  let arrivalIndex = 0;
  let departureIndex = 0;
  let ans = 0
  while (arrivalIndex < n) {
    if (arrival[arrivalIndex] <= departure[departureIndex]) {
      platforms += 1;
      ans = Math.max(ans, platforms)
      arrivalIndex += 1;
    } else {
      platforms -= 1;
      departureIndex += 1;
    }
 
  }
  return ans;
}

const arr = [0900, 1100, 1235];
const dep = [1000, 1200, 1240];

console.log(minPlatforms(arr, dep, 3));



// less time but more space,  time:O(nlong) + O(n) + O(n)
// function method2(arr, dep, n) {
//     let timestamp = [];
//     for(let i = 0; i < n; i++){
//         let entry = [arr[i],dep[i]];
//         timestamp.push(entry);
//     }
//     timestamp.sort((a,b)=>a[1]-b[1]);
//     let count = 1;
//     let j = 1;
//     let ans = 0
//     let lastdep = timestamp[0][1];
//     while(j < n){
//         if(lastdep <= timestamp[j][0]){
//             ans = Math.max(ans, count);
//             count--
            
//         }else{
//             count++;
//             ans = Math.max(ans, count)
//         }
//         lastdep = timestamp[j][1]
//         j++;
//     }
//     return ans;
// }
