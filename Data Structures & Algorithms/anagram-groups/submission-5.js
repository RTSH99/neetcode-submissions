class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const seenStrs ={}
        for(let str of strs){
            const sortedS = str.split('').sort().join('')
            seenStrs[sortedS] = seenStrs[sortedS] || []
            seenStrs[sortedS].push(str)
        }
        return Object.values(seenStrs)
    }
}
