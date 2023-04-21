/**
 * Строка со скобками считается валидной, если на каждую закрывающую скобку имеется ранее открытая
 * и на каждую ранее открытую имеется закрывающая.
 *
 * Напишите функцию parentheses(value) проверяющую строку со скобками на валидность.
 *
 * Пример:
 *
 * parentheses('') === false
 * parentheses('()()') === true
 * parentheses('(()())') === true
 * parentheses('(()') === false
 * parentheses(')') === false
 *
 * @param {string} value
 * @returns {boolean}
 */
function parentheses(value) {
    const stack = [];
    if (value === "") {
        return false;
    }
    for (let i = 0; i < value.length; i++) {
        if (value[i] === "(") {
            stack.push(value[i]);
        } else if (value[i] === ")" && stack[stack.length - 1] === "(") {
            stack.pop();
        } else {
            return false;
        }
    }

    return stack.length === 0;
}

module.exports = parentheses;
