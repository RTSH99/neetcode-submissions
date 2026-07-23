class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const l = {};
        for (let i = 0; i < nums.length; i++) {
            let key = nums[i];
            if (l.hasOwnProperty(key)) {
                l[key] += 1;
            } else {
                l[key] = 1;
            }
        }

        // Convert the object to an array of [key, value] pairs, sort by value in descending order, and take the first k elements
        const sortedKeys = Object.entries(l)
            .sort((a, b) => b[1] - a[1])
            .slice(0, k)
            .map(entry => Number(entry[0]));

        return sortedKeys;
    }
}
