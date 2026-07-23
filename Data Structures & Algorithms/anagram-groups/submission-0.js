class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = {}

        for (let s of strs){
            const SortedS = s.split('').sort().join('')
            if (!res[SortedS]){
                res[SortedS]=[]
            }
            res[SortedS].push(s)
        }

        return Object.values(res)
    }
}
