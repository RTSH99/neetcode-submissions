class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
    
        const k =s.split('').sort()
        const l =t.split('').sort()
        if(JSON.stringify(k) === JSON.stringify(l)){return true}
        else{
            return false
        }
    }
}
