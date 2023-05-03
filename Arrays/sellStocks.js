
let prices = [7,2,5,3,6,4]

let left=0;
let right=1;
let max_profit=0;

while(right<prices.length){
  if(prices[left]<prices[right]){
    let profit=prices[right]-prices[left]
    max_profit=Math.max(max_profit,profit)
  }else{
    left=right
  }
  
  right++
}
console.log(max_profit) //4