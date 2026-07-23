class Solution {
   
    hasDuplicate(nums) {
        const k = new Set(nums)
        if(nums.length==k.size){
            return false
        }
        return true

    
    }
}
