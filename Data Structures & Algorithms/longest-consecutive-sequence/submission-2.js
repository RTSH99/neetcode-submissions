class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length===0)return 0;
         let res = new Map();
    for (let i =0 ; i < nums.length ;i++){
        let temp = nums[i]
        res.set(temp,[temp])
        for (let j=0; j <nums.length ;j++){
            if(nums[j]===temp+1){
                res.get(nums[i]).push(nums[j])
                temp=nums[j]
                j=-1
            }
        }
    }
    const lengths = Array.from(res.values()).map((arr)=>(arr.length))
    return Math.max(...lengths)
    }
}
