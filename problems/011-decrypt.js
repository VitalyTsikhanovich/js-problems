/**
 * Самый простой способ зашифровать строку – сдвиг букв.
 * Под сдвигом понимается замена буквы на предыдущую в алфавите.
 * Если предыдущей буквы нет, она заменяется на последнюю букву алфавита (в этой задаче мы имеем дело с английским алфавитом).
 *
 * Вам прислали секретное сообщение, зашифрованное способом, описанным выше и состоящее из строчных английских букв.
 *
 * Напишите функцию decrypt(secret) которая расшифрует и вернет его.
 *
 * Пример:
 *
 * decrypt('bnqqdbs') === 'correct'
 * decrypt('zmc vd hfmnqd rozbdr') === 'and we ignore spaces'
 *
 * @param {string} secret
 * @returns {string}
 */
function decrypt(secret) {
    let arr = secret.split('')
    let arr2 = []

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === ' ') {
            arr2.push(' ')
        } else if (arr[i] === 'z') {
            arr2.push('a')
        } else {

            arr2.push(String.fromCharCode(arr[i].charCodeAt(0) + 1))
        }
    }
    return arr2.join('')

    // return arr.map((e)=>String.fromCharCode(e.charCodeAt(0)+1)).join('')
}

module.exports = decrypt;
