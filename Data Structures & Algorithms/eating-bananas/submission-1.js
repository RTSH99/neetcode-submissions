class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
     let l =0
     let r= Math.max(...piles)
     let res=r
     while(l<=r){
        let hours= 0
        let k = Math.round((l+r)/2)
        for(let p of piles){
            hours+=Math.ceil(p/k)
        }

        if(hours<=h){
            res = Math.min(res,k)
            r = k-1
        }
        else{ l=k+1}
     }
     return res
    }
}
