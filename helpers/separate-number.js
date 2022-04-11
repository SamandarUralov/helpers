
/**
 * @param {Number} x - number which is separate 
 * @param {String} s - separate number with it
 * @returns {String} separated number. s: 256400 x: - exp: 256400 -> 256-400
 */
const numberWithSeparator = (x, s) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, s);
}