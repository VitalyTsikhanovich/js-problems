/**
 * Известны результаты каждой из 4х четвертей баскетбольной встречи.
 * Нужно определить победителя матча. Побеждает команда,
 * набравшая больше очков в течение всего матча.
 *
 * Напишите функцию getWinner(points) возвращающую номер победившей команды,
 * либо undefined в случае ничьей.
 *
 * Пример:

 * getWinner(['23-26', '24-30', '30-27', '35-31']) === 2
 * getWinner(['36-32', '32-24', '20-28', '30-26']) === 1
 * getWinner(['36-18', '22-31', '27-21', '19-34']) === undefined
 *
 * @param {string[]} points
 * @returns {(number|undefined)}
 */
function getWinner(points) {
    let arr = [];
    // let team1=0
    // let team2=0
    for (let i = 0; i < points.length; i++) {
        arr.push(points[i].split("-"));
    }
    //  arr.flat()
    // for(let j= 0; j<arr.length; j++){
    //     team1 += arr[j][0]
    //     team2 += arr[j][1]
    // }
    // return team2

    let team1 = arr
        .flat()
        .filter((e, i) => i % 2 === 0)
        .reduce((a, b) => Number(a) + Number(b));

    let team2 = arr
        .flat()
        .filter((e, i) => i % 2 !== 0)
        .reduce((a, b) => Number(a) + Number(b));
    if (team1 > team2) {
        return 1;
    } else if (team1 === team2) {
        return undefined;
    } else {
        return 2;
    }
}

module.exports = getWinner;
