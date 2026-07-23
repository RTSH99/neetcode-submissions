class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        nums.sort((a,b)=> a-b)
        for(let num=0 ; num<nums.length ; num++){
            if(nums[num]===nums[num+1]){
                return true
            }
    
        }
        return false
    }
}
