class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let boardArrayLength =board[0].length
    for(let i=0; i<boardArrayLength; i++){
        let seen = new Map()
        for(let j=0; j<boardArrayLength;j++){
            if(board[i][j]===".")continue;
            if (seen.has(board[i][j])) return false;
            seen.set(board[i][j],j)
        }
    }
    
    for(let i=0; i<boardArrayLength;i++){
        let seen = new Map()
        for(let j=0; j<boardArrayLength;j++){
        if(board[j][i]===".")continue;
        if(seen.has(board[j][i])) return false;
        seen.set(board[j][i],i)
        }
    }
    
    for (let sqaure=0 ; sqaure < boardArrayLength ; sqaure ++){
     let seen = new Set();
     for(let i =0; i<3 ; i++){
         for(let j =0; j<3; j++){
             let row = Math.floor( sqaure/3)*3 +i;
             let col =(sqaure%3)*3+j;
             if (board[row][col] === "." )continue;
             if(seen.has(board[row][col])) return false;
             seen.add(board[row][col])
         }
     }
        
    }
    
    
     return true;
    }
}
