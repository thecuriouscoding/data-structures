function isInterleaved (A,B,C)
    {
        let i = 0, j = 0, k = 0; 
        
        // Iterate through all characters of C.  
        while (k != C.length)
        {
        
            // Match first character of C with first character  
            // of A. If matches them move A to next  
            if (i<A.length && A[i] == C[k])
            {
                i++; 
            }
            
            // Else Match first character of C with first  
            // character of B. If matches them move B to next
            else if (j < B.length && B[j] == C[k])
            {
                j++;  
            }
            
            // If doesn't match with either A or B, then return  
            // false  
            else
            {
                return false;
            }
            
            // Move C to next for next iteration
            k++;
        }
        
        // If A or B still have some characters,  
        // then length of C is smaller than sum  
        // of lengths of A and B, so return false 
        if (i < A.length || j < B.length)
        {
            return false;
        }
        return true;  
    }

    console.log(isInterleaved("AXY", "BBZ", "BBAZXY"))