class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
    let encodedStrSize = []
     let encodedStr =[]
     if (strs.length === 0) return "";
     
     for (let s of strs){
         if(encodedStrSize.length === 0){
             encodedStrSize.push(s.length)
             encodedStr.push(s)
             
         }
         else{
         encodedStrSize.push(",",s.length)
         encodedStr.push(s)
         }
         
     }
     return encodedStrSize.join("")+(",#")+encodedStr.join("")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
    if (str === "") return [];

    let hashIndex = str.indexOf("#")
           
    let strsSizeList =str.slice(0,hashIndex).split(",")
    let strsList = str.slice(hashIndex+1)
    let finalList = []
    let currentIndex = 0
    
    for( let num of strsSizeList){
    if (num === "") continue;
    
    let size = Number(num)
    
      finalList.push(strsList.slice(currentIndex, currentIndex+size)) 
      currentIndex +=size;
    }
    
    
    return finalList
    }
}
