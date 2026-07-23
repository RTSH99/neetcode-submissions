class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;
        nums = Array.from(new Set(nums.sort((a,b)=>a-b)))

        let longestStrk=1
        let currentStrk=1

        for(let i=1;i<nums.length;i++){
            if(nums[i]===nums[i-1]+1){
                currentStrk++
            }
            else if(nums[i]!==nums[i-1]){
                longestStrk =Math.max(longestStrk,currentStrk)
                currentStrk=1
            }
        }
        longestStrk =Math.max(longestStrk,currentStrk)
        return longestStrk
    }
}
