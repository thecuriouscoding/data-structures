/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let sign = ""

    let numberToConvert = ""

    let numberStarted = false

    // let answerPossible = false

    let size = s.length

    let allowedChars = /[0-9]/

    for(let i=0; i<size; i++){
        if(allowedChars.test(s[i])){
            numberStarted = true
            if(numberToConvert === "" && s[i] === "0"){
                continue
            }
            numberToConvert += s[i]
        } else if(s[i] === "+" || s[i] === "-"){
            if(numberToConvert === "" && numberStarted === false && sign === ""){
                sign = s[i] === "+" ? "+" : "-"
            } else {
                break
            }
        } else {
            if(numberToConvert === "" && s[i] === " " && numberStarted === false && sign === ""){
                continue
            } else {
                break
            }
        }
    }

    if(sign === ""){
        sign = "+"
    }

    // console.log(`numberToConvert: ${numberToConvert} and sign: ${sign}`)

    const minReturn = -2147483648
    const maxReturn = 2147483647

    if(numberToConvert === ""){
        return 0
    } else {
        const temp = sign === "+" ? parseInt(numberToConvert) : -1 * parseInt(numberToConvert)
        if(temp < minReturn){
            return minReturn
        }
        if(temp > maxReturn){
            return maxReturn
        }
        return temp
    }

};