/**
 * Напишите функцию rle(value) реализующую алгоритм сжатия строки.
 *
 * Пример:
 *
 * rle('AAABC') === '3ABC'
 * rle('AAAaaB') === '3A2aB'
 *
 * @param {string} value
 * @returns {string}
 */
function rle(value) {
    let arr = []
    let count = 1
    for (let i = 1; i <= value.length; i++) {
        if (value[i] === value[i - 1]) {
            count++
        } else {
            if (count > 1) {
                arr.push(count+ value[i-1])
                count=1
            }else {
                arr.push(value[i-1])
            }
        }
    }
    return arr.join('')
}

module.exports = rle;
