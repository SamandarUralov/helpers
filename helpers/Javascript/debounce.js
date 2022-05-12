/**
 * @param {Function} // function for calling after delay
 * @param {number} // how much time ?
 * @returns {Function}
 */
function debounce(fn, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => fn(), delay);
  };
}

// first, we are clearing the timer if it's initialized already.
// Then we are running setTimeout function, which will run after the delay milliseconds.
