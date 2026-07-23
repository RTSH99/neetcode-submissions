class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const filterStr = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase().split("");
const revStr =[...filterStr].reverse()
if (JSON.stringify(filterStr)==JSON.stringify(revStr)){
    return true
} return false
    }
}
