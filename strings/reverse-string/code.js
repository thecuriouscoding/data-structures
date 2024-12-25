/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s= s.trim()
    let ans = ""
    let spaceEncountered = 0
    let tempAns = ""

    for(let i=s.length - 1; i>=0; i--){
        if(/^[a-zA-Z0-9]$/.test(s[i])) {
            spaceEncountered = 0
            tempAns = s[i] + tempAns
        } else {
            if(spaceEncountered === 0) {
                ans = ans + tempAns + " "
                tempAns = ""
            }
            spaceEncountered = 1 
        }
    }

    if(tempAns.length > 0){
        ans = ans + tempAns
    }

    return ans
};