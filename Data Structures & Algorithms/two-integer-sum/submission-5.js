class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */

    //[1,2,3,5,6,7,8,9,11,13] target =10 we will find target or number > target and clean arr
    // [1,2,3,5,6,7,8,9] implement two pointer?
    twoSum(nums, target) {
       const seenNumbers={}
       for (let i=0;i<nums.length ;i++){
        let currNum = nums[i]
        let diffNum = target-currNum
        if(seenNumbers[diffNum] !== undefined){
            return [seenNumbers[diffNum],i]
        }
        else {
            seenNumbers[nums[i]]=i
        }
       }
    }
}
