export function calculateTotal(
    prices: number[],
    discountPercentage = 0
) {
    const total = prices.reduce((sum, p) => sum + p, 0)
    return total - total * discountPercentage
}

