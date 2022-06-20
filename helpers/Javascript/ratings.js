/**
 * 
 * @param {Number} star 
 * @returns {String}
 */
const rating = star => "★★★★★☆☆☆☆☆".slice(5 - star, 10 - star)

rating(5) // ★★★★★
rating(2) // ★★☆☆☆