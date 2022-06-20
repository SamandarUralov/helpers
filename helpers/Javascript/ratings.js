/**
 * 
 * @param {Number} star 
 * @returns {String}
 */
const rating = star => "★★★★★☆☆☆☆☆".slice(5 - star, 10 - star)

console.log(rating(1))