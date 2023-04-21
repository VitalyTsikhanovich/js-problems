/**
 * Петя опубликовал картинку X секунд назад.
 *
 * Напишите функцию timeago(seconds) возвращаю текстовое представление периода прошедшего со времени публикации.
 * Для публикаций опубликованных более четырёх недель назад возвращайте строку 'undefined', ведь их никто не увидит.
 *
 * Пример:
 *
 * timeago(0) === 'just now'
 * timeago(10) === '10 seconds ago'
 * timeago(60) === '1 minute ago'
 * timeago(3600) === '1 hour ago'
 *
 * @param {number} seconds
 * @returns {string}
 */
function timeago(seconds) {
    const minute = 60
    const hours = 3600
    let dey = 86400
    let week = 604800

    if (seconds < 10) {
        return 'just now'
    }

    if (seconds < minute) {
        return `${Math.floor(seconds / 10) * 10} seconds ago`
    } else if (seconds < hours) {
        if (seconds > hours / 2 && seconds < hours) {
            return `30 minutes ago`
        }
        if (Math.floor((seconds / minute / 10) * 10) === 1) {
            return `${Math.floor((seconds / minute / 10) * 10)} minute ago`
        } else {
            return `${Math.floor((seconds / minute / 10) * 10)} minutes ago`
        }
    } else if (seconds < dey) {
        if (seconds > dey / 2 && seconds < dey) {
            return `12 hours ago`
        }
        if (Math.floor((seconds / hours / 10) * 10) === 1) {
            return `${Math.floor((seconds / hours / 10) * 10)} hour ago`
        } else {
            return `${Math.floor((seconds / hours / 10) * 10)} hours ago`
        }
    } else if (seconds < week) {
        if (Math.floor((seconds / dey / 10) * 10) === 1) {
            return `${Math.floor((seconds / dey / 10) * 10)} day ago`
        } else {
            return `a few days ago`
        }
    } else if (seconds >= week) {
        if (seconds >= week * 4) {
            return `undefined`
        }
        if (Math.floor((seconds / week / 10) * 10) === 1) {
            return `${Math.floor((seconds / week / 10) * 10)} week ago`
        } else {
            return `${Math.floor((seconds / week / 10) * 10)} weeks ago`
        }
    }
}

module.exports = timeago;
