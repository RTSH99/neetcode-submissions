class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
   let rows = matrix.length;
    let cols = matrix[0].length;
    let i = 0;
    let j = cols - 1;

    while (i < rows && j >= 0) {
        if (matrix[i][j] === target) {
            return true;
        } else if (matrix[i][j] > target) {
            j--;
        } else {
            i++;
        }
    }

    return false;
    }
    
}
