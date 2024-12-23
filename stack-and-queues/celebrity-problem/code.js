class Solution {
    // Function to find the celebrity.
    celebrity(mat) {
        // your code here
        
        let potentialCelebrities = 0
        let potentialCelebrityIndexRow = 0
        
        let row = mat.length
        let column = mat[0].length
        
        for(let i=0;i<row;i++){
            let isCelebrity = 1
            for(let j=0;j<column;j++){
                if(mat[i][j] != 0){
                    isCelebrity = 0
                    break
                }
            }
            if(isCelebrity){
                potentialCelebrities++
                potentialCelebrityIndexRow = i
                if(potentialCelebrities > 1){
                    break
                }
            }
        }
        
        if(potentialCelebrities === 0 || potentialCelebrities > 1){
            return -1
        }
        
        let celebrityExists = 1
        
        for(let i=0;i<row;i++){
            if(i != potentialCelebrityIndexRow){
                if(mat[i][potentialCelebrityIndexRow] != 1){
                    celebrityExists = 0
                    break
                }
            }
        }
        
        return celebrityExists ? potentialCelebrityIndexRow : -1
    }
}