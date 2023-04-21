/**
 * Hex и RGB - текстовые форматы для представления цвета в коде.
 *
 * Напишите функцию hexToRgb(color) конвертирующую цвет закодированный в формате HEX
 * в RGB кодированную строку.
 *
 * Пример:
 *
 * hexToRgb('#000000') === 'rgb(0, 0, 0)'
 * hexToRgb('#fff') === 'rgb(255, 255, 255)'
 * hexToRgb('#800080') === 'rgb(128, 0, 128)'
 *
 * @param {string} color
 * @returns {string}
 */
function hexToRgb(color) {
    let hex = color.slice(color.startsWith("#") ? 1 : 0);
    // let hex = color.slice(1);
    if (hex.length === 3) {
        hex = hex
            .split("")
            .map((e) => e + e)
            .join("");
    }

    let arr = hex.slice(0, 2);
    let arr2 = hex.slice(2, 4);
    let arr3 = hex.slice(4, 6);

    return `rgb(${parseInt(arr, 16)}, ${parseInt(arr2, 16)}, ${parseInt(
        arr3,
        16
    )})`;
}

module.exports = hexToRgb;
