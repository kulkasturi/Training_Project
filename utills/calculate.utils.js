function calculateTotal(price,discountPercentage) {
    if(price <0 || discountPercentage < 0 || discountPercentage > 100) {
        throw new Error("Price and discount percentage must be non-negative");
    }
    return price - (price * (discountPercentage / 100));
}

module.exports = {
    calculateTotal
};