
var StockSpanner = function() {
    this.prices = []
    // price span element tuple- [price, maxPriceForThisPrice, index of maxPriceForThisPrice, spanValue]
    this.lastGreaterPrice = []
    
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    if(!price){
        return null
    }



    if(!this.lastGreaterPrice.length){
        this.prices.push(price)
        this.lastGreaterPrice.push([price, 1])
        return 1
    }

    this.prices.push(price)


    while(this.lastGreaterPrice.length > 0){
        let currentPriceIndex = this.prices.length
        
        while(
            this.lastGreaterPrice.length > 0 &&
            this.lastGreaterPrice[this.lastGreaterPrice.length - 1][0] <= price
        ) {
            this.lastGreaterPrice.pop()
        }

        let ans

        if(!this.lastGreaterPrice.length){
            ans = currentPriceIndex - 0
            this.lastGreaterPrice.push([price, ans])
            return ans
        }

        ans = currentPriceIndex - this.lastGreaterPrice[this.lastGreaterPrice.length - 1][1]

        this.lastGreaterPrice.push([price, ans])
    }
};


//  Your StockSpanner object will be instantiated and called as such:
 var obj = new StockSpanner()

    const inputs = [[],[31],[41],[48],[59],[79]]

    inputs.forEach(item => {
        console.log(obj.next(item[0]))
    })

//  var param_1 = obj.next(100)

//  console.log(param_1)
