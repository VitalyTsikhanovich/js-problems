/**
 * С числами Фибоначчи мы уже познакомились в прошлой задаче.
 *
 * Напишите функцию isFibonacci(value) которая определяет, является ли value числом Фибоначчи.
 *
 * Пример:
 *
 * isFibonacci(1) === 1
 * isFibonacci(2) === 3
 * isFibonacci(55) === 10
 * isFibonacci(52) === undefined
 *
 * @param {number} value
 * @returns {undefined|number}
 */
function isFibonacci(value) {
    if (value <= 0) return 0
    if (value === 1) return 1
    let count = 1
    let f1 = 0
    let f2 = 1
    let cf = 1
    for (let i = 1; i <= value; i++) {
        cf = f1 + f2;
        f1 = f2;
        f2 = cf
        count++
        if (cf === value) {
            return count
        }
    }
}

module.exports = isFibonacci;
