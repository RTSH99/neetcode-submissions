class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
           const res = {}
    
        for(let num of nums){
        if(!res[num]){
            res[num]=0
        }
        res[num]+=1
    }
    return Object.keys(res).sort((a,b)=>res[b]-res[a]).slice(0,k).map(Number)
       

    }
}
