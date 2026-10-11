class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const obj = {}
        for (let i=0; i<nums.length; i++){
            const currNum =nums[i]
            const diff = target-currNum
            if(obj[diff]!==undefined){
                return [obj[diff],i]
            }
            obj[currNum]=i
        }
    }
}
