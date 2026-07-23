class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums = nums.sort((a,b)=>a-b)
        const result =[]
        
        for (let i=0;i<nums.length-2;i++){
            if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
            let pt1 =i+1
            let pt2=nums.length-1
            while(pt1<pt2){
                let sum = nums[i]+nums[pt1]+nums[pt2]
                if(sum===0){
                    result.push([nums[i],nums[pt1],nums[pt2]])
                    while(pt1<pt2 && nums[pt1]===nums[pt1+1])pt1++
                    while(pt1<pt2 && nums[pt2]===nums[pt2-1])pt2--

                    pt1++;
                    pt2--;
                }
                else if(sum<0){
                    pt1++
                }
                else{
                    pt2--
                }
            }
        }
        return result
    }
}
