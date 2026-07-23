class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const newArray = new Set(nums);
        return newArray.size !== nums.length ? true : false;
        
    }
}
