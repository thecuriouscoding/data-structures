/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const mapping = {
        "M": 1000,
        "D": 500,
        "C": 100,
        "L": 50,
        "X": 10,
        "V": 5,
        "I": 1
    }

    let result = 0

    let temp = mapping[s[0]]

    for(let i = 1; i < s.length; i++){
        // temp = mapping[s[i]]

        if(temp === 0){
            temp = mapping[s[i]]
            continue
        }

        if (temp >= mapping[s[i]]) {
            result = result + temp
            temp = mapping[s[i]]
        } else {
            result = result + (mapping[s[i]] - temp)
            temp = 0
        }
    }

    if(temp != 0){
        result = result + temp
    }

    return result
};