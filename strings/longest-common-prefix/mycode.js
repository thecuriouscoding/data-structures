/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const initialString = strs[0]

    if(initialString === ""){
        return ""
    }

    const size = strs.length

    let longestCommonPrefix = initialString.length

    let tempPrefixLen = 0

    for(let i=1; i<size && longestCommonPrefix > 0; i++){
        let currentString = strs[i]
        temp = 0
        for(let j=0;j<currentString.length && j < longestCommonPrefix;j++){
            if(currentString[j] === initialString[j]){
                temp++
            } else {
                break
            }
        }
        if(temp < longestCommonPrefix){
            longestCommonPrefix = temp
        }
    }

    return initialString.substring(0, longestCommonPrefix)
};