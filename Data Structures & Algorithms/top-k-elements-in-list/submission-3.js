class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // k is basically frequency 
        const res = {}
        
        // need a to create a hash map where we can record a frequency of a number
       
       for(let num of nums){
        if(!res[num]){
            res[num]=1
        }
        else{
            res[num]+=1
        }
       }

     const  kres = Object.keys(res).sort((a,b) => res[b]-res[a])
    return kres.slice(0,k).map(Number)
        // need to return Key which is =< frequency
       

    }
}
