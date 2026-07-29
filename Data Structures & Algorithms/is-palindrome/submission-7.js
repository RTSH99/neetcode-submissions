class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l =0
        let r =s.length -1
        while(l<r){
            while(l<r && !this.charNum(s[l])){
                l++;
            }
            while(r>l && !this.charNum(s[r])){
                r--;
            }
            if (s[r].toLowerCase() !== s[l].toLowerCase()){
                return false
            }
            l++
            r--
        }
        return true
    }
    /**
     * @param {char} c
     * @return {boolean}
     */
     charNum(c){
        return (c>='A' && c<='Z'|| c>='a' && c<='z' || c>='0' && c<='9' );
    }
}
