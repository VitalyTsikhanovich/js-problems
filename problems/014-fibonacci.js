/**
 * Последовательностью Фибоначчи называется последовательность чисел
 * a0, a1, ..., an, ..., где
 * a0 = 0,
 * a1 = 1,
 * ak = ak-1 + ak-2 (k > 1).
 *
 * Напишите функцию fibonacci(n) вычисляющую n-ное число последовательности
 *
 * Пример:
 *
 * fibonacci(2) === 1
 * fibonacci(3) === 2
 * fibonacci(7) === 13
 *
 * @param {number} n >= 0
 * @returns {number}
 */
function fibonacci(n) {
    if (n<=0){
        return 0
    }
    let f1 = 0
    let f2 = 1
    let cf = 1
    for (let i = 1; i < n; i++) {
        cf = f1 + f2;
        f1 = f2;
        f2 = cf
    }
    return cf;
}

module.exports = fibonacci;
