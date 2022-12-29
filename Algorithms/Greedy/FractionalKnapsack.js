/**
 * Fractional Knapsack problem
 */


class Item {
  constructor(value, weight) {
    this.value = value;
    this.weight = weight;
  }
}


const Knapsack = (array, Weight) =>{
    array.sort((a, b)=>(a.value/a.weight)-(b.value/b.weight));
    let output = 0;
    for(const entry of array){
        if(Weight - entry.weight >= 0){
            output += entry.value;
            Weight -= entry.weight
        }else{
            let fraction = Weight/ entry.weight;
            output += fraction * entry.value;
        }
    }
    return output;
}


let item1 = new Item(60, 10);
let item2 = new Item(100, 20);
let item3 = new Item(120, 30);

let KnapsackArray = [item1, item2, item3];

console.log(Knapsack(KnapsackArray, 50))