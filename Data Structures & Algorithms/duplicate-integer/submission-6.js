class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
           const k = new Set(nums)
           if (k.size===nums.length){
            return false
           }
           return true
    }
}
