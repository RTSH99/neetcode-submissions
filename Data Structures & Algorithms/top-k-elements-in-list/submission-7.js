class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
         let seenNumber ={}
    
    for ( let n of nums){
        if(!seenNumber[n]){
            seenNumber[n] =0
        }
        seenNumber[n]+=1
    }
    return Object.keys(seenNumber).sort((a,b)=>seenNumber[b]-seenNumber[a]).slice(0,k).map(Number)
    }
}
