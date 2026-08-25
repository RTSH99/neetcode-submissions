class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
     const set = new Set() //{}
     let l =0
     let res =0
     for(let r=0;r<s.length;r++){
        while(set.has(s[r])){
            // set ={'x'} and s[r]=x where r=1
            set.delete(s[l])
            l++
        }
        set.add(s[r])
        res =Math.max(res,(r-l+1))
     }
     return res

    }
}
