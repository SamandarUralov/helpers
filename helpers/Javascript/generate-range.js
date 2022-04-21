export const range = (end, start = 1, step = 1) => {
  function* generateRange() {
    let x = start - step;
    while (x < end - step) yield (x += step);
  }

  return {
    [Symbol.iterator]: generateRange,
  };
};

// result

// const r1 = [...range(4)]  -->  [0, 1, 2, 3]

// const r2 = [...range(10, 4)]  -->  [4, 5, 6, 7, 8, 9]

// const r3 = [...range(12, 0, 2)]  -->  [0, 2, 4, 6, 8, 10]
