class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const uniqueNums = new Set(nums)
        console.log(uniqueNums.size)
        return nums.length === uniqueNums.size ? false :true
    }
}
