//递归
// function fibonacci(n) {
//     if (n == 0) return 0;
//     if (n == 1) return 1;
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }

//迭代
// function fibonacci(n) {
//     if (n == 0) return 0;
//     if (n == 1) return 1;
//     let last = 0,
//         curr = 1,
//         newCurr
//     for (let i = 2; i <= n; i++) {
//         newCurr = last + curr
//         last = curr
//         curr = newCurr
//     }
//     return curr
// }

//动态规划
// function fibonacci(n) {
//     const dp = [0, 1]
//     for (let i = 2; i <= n; i++) {
//         dp[i] = dp[i - 1] + dp[i - 2]
//     }
//     return dp[n]
// }

console.log(fibonacci(0))
console.log(fibonacci(1))
console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(4))
console.log(fibonacci(5))
console.log(fibonacci(6))
console.log(fibonacci(7))
console.log(fibonacci(8))