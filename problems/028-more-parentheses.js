/**
 * Ранее мы уже решали задачу валидации последовательности скобок в строке.
 *
 * На этот раз напишите функцию parentheses(value) валидирующую строку с несколькими типами скобок.
 *
 * Пример:
 *
 * parentheses('<>') === true
 * parentheses('<}') === false
 *
 * @param {string} value – строка из набора символов (, ), {, }, <, >.
 * @returns {boolean}
 */
function parentheses(value) {
    let stack = [];
    if (value === "") {
        return false;
    }

    for (let i = 0; i < value.length; i++) {
        if (value[i] === "(" || value[i] === "{" || value[i] === "<") {
            stack.push(value[i]);
        } else if (
            (stack[stack.length - 1] === "(" && value[i] === ")") ||
            (stack[stack.length - 1] === "{" && value[i] === "}") ||
            (stack[stack.length - 1] === "<" && value[i] === ">")
        ) {
            stack.pop();
        } else {
            return false;
        }
    }

    return stack.length === 0;
}

module.exports = parentheses;
