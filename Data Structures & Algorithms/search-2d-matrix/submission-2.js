class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let left = 0
        let right = matrix.length-1
        while(left<=right){
            let mid = Math.floor((left+right)/2)
            let nums = matrix[mid]
            let lastdigit =nums.length-1
            if(nums[0]<=target &&nums[lastdigit]>=target){
                let l =0
                let r=lastdigit
                while(l<=r){
                    let m = Math.floor((l+r)/2)
                    if(nums[m]===target){
                        return true
                    }
                    else if(nums[m]>target){
                        r=m-1
                    }
                    else{
                        l=m+1
                    }
                }
                return false
            }
            else if(nums[0]>target){
                right = mid-1
            }
            else{
                left=mid+1
            }
        }
        return false
    }
}
