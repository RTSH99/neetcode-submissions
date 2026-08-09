class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
          let l=0 //buy
      let r=1 //sell
      let maxProfit =0
      while(r<prices.length){
          if(prices[l]<prices[r]){
              let profit = prices[r] - prices[l]
              maxProfit = Math.max(maxProfit,profit)
          }
          else {
              l=r
          }
          r++
      }
      return maxProfit
       
    }
}
