/**
 * Счастливым билетом называют такой билет с шестизначным номером,
 * где сумма первых трех цифр равна сумме последних трех.
 *
 * Напишите функцию checkTicket(number) которая проверяет счастливость билета.
 *
 * Пример:
 *
 * checkTicket('005212') === true
 * checkTicket('133700') === true
 * checkTicket('123032') === false
 *
 * @param {string} number
 * @returns {boolean}
 */
function checkTicket(number) {
    const size = 3;
    let arr1 = number
        .split("")
        .slice(0, size)
        .reduce((a, b) => +a + +b);

    let arr2 = number
        .split("")
        .slice(size)
        .reduce((a, b) => +a + +b);
    return arr1 === arr2

    // if (arr1 === arr2) {
    //     return true;
    // } else {
    //     return false;
    // }
}

module.exports = checkTicket;
