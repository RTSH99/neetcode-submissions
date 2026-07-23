class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const k = new Set(nums);
        return (nums.length===k.size)? false : true;
    }
}
