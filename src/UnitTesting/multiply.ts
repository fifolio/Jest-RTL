export function multiply(a: number, b: number) {
    if (a === 0) throw new Error('No divide by 0')
    return a * b
}


// export function cal(prices: number[]){
//     return prices.reduce((acc, curr) => acc + curr, 1)
// }

// console.log(cal([1,2,3,4,5])) // Output: 15