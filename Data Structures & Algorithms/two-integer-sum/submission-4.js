class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */

    //[1,2,3,5,6,7,8,9,11,13] target =10 we will find target or number > target and clean arr
    // [1,2,3,5,6,7,8,9] implement two pointer?
    twoSum(nums, target) {
       const seenNumbers ={}
       for (let i=0; i<=nums.length-1;i++){
        let differenceNum = target-nums[i]
        if(seenNumbers[differenceNum] !== undefined){
            return [seenNumbers[differenceNum],i]
        }
        seenNumbers[nums[i]]=i
       }
    
    }
}
