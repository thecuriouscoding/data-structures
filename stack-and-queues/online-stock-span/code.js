
var StockSpanner = function() {
    this.prices = []
    // price span element tuple- [price, maxPriceForThisPrice, index of maxPriceForThisPrice, spanValue]
    this.priceSpan = []
    
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    if(!price){
        return null
    }
    if(!this.prices.length){
        this.prices.push(price)
        this.priceSpan.push([
            price,
            -1,
            0,
            1
        ])
        return 1
    }

    console.log(`Span tuple for last price at input ${price} is [${this.priceSpan[this.priceSpan.length - 1]}]`)


    let maxPriceForThisPrice = 0
    let maxPriceForThisPriceIndex = 0

    // while(price >= maxPriceForThisPrice){

    // }

    let spanForPrice = 1

    for(let i = this.priceSpan.length - 1; i >= 0;){
        // if(price < maxPriceForThisPrice){
        //     break
        // }

        let [lastPrice, lastPriceMaxSpanPrice, lastPriceMaxSpanPriceIndex, lastPriceMaxSpan] = this.priceSpan[i]

        console.log(`lastPrice: ${lastPrice}, lastPriceMaxSpanPrice: ${lastPriceMaxSpanPrice}, lastPriceMaxSpanPriceIndex: ${lastPriceMaxSpanPriceIndex}, lastPriceMaxSpan: ${lastPriceMaxSpan}`)
        // if(i === lastPriceMaxSpanPriceIndex){
        //     break
        // }


        if(price >= lastPrice) {
            spanForPrice += lastPriceMaxSpan
            if(lastPriceMaxSpanPrice === -1){
                maxPriceForThisPrice = -1
                maxPriceForThisPriceIndex = 0
                break
            }
            maxPriceForThisPrice = lastPriceMaxSpanPrice
            maxPriceForThisPriceIndex = lastPriceMaxSpanPriceIndex
            // if(lastPriceMaxSpanPrice <= price){
                i = lastPriceMaxSpanPriceIndex
                // continue
            // } else {
                // break
            // }
        } else {
            maxPriceForThisPrice = lastPrice
            maxPriceForThisPriceIndex = i
            break
        }
    }

    this.priceSpan.push([
        price,
        maxPriceForThisPrice,
        maxPriceForThisPriceIndex,
        spanForPrice
    ])

    console.log(`Span tuple for price ${price} is [${this.priceSpan[this.priceSpan.length - 1]}]`)

    return this.priceSpan[this.priceSpan.length - 1][3]
};


//  Your StockSpanner object will be instantiated and called as such:
 var obj = new StockSpanner()

    const inputs = [[],[31],[41],[48],[59],[79]]

    inputs.forEach(item => {
        console.log(obj.next(item[0]))
    })

//  var param_1 = obj.next(100)

//  console.log(param_1)
