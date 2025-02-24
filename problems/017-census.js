/**
 * В доме решили провести перепись всех жильцов и составили список,
 * в котором указали возраст и пол каждого жильца.
 *
 * Напишите функцию census(list) возвращающую номер в списке самого старшего жителя мужского пола.
 *
 * Пример:
 *
 * census([{ age: 12, gender: 'Male' }, { age: 40, gender: 'Male' }]) === 2
 * census([{ age: 40, gender: 'Female' }]) === undefined
 *
 * @param {{age: number, gender: string}[]} list
 * @returns {undefined|number}
 */
function census(list) {
    let count = 0;
    let age = 0
    list.forEach((e, i, list) => {
        if (e.age > age && e.gender === "Male") {
            age = e.age;
            count++
        }
    });
    if (count <= 0){
        return undefined
    }

    return count
}

module.exports = census;
