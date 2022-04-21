/**
 * @param {Object}
 * @returns {Boolean} true if valid, false in other cases
 */
const isEmpty = (object) => {
    return !Object.getOwnPropertyNames(object).length && !Object.getOwnPropertySymbols(object).length
}