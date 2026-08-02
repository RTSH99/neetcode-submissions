class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b)=>a-b)
        const triplets=[]
        for(let i=0 ; i < nums.length-2; i++){
            if(i>0 && nums[i]===nums[i-1])continue;
            let l = i +1
            let r= nums.length-1
            while(l<r){
                let currentSum = nums[i]+nums[l]+nums[r]
                if(currentSum ===0){
                    triplets.push([nums[i],nums[l],nums[r]])
                    l++
                    r--
                    while(l<r && nums[l]===nums[l-1])l++;
                    while(l<r && nums[r]===nums[r+1])r--;
                }
                else if(currentSum>0){
                    r--
                }
                else (l++)
            }

        }
        return triplets;
    }
}
