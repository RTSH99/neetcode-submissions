class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let res= new Array(nums.length).fill(1)
    for (let i=1; i<nums.length ; i++){
        let prefix = nums[i-1]*res[i-1]
        res[i]=prefix
    }
    let postFix =1
    for(let i =nums.length-1;i>=0;i--){
        res[i]*=postFix
        postFix*=nums[i]
    }
    return res
    }
}
