/**
 * @param {Array}
 * @returns {Object}
 */
const frequencies = (arr) =>
  arr.reduce((a, v) => {
    a[v] = a[v] ? a[v] + 1 : 1;
    return a;
  }, {});

frequencies([..."book"]);
// result = { b: 1, o: 2, k: 1 }
