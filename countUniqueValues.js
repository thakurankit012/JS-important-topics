// COUNT UNIQUE VALUES
// - sorted array
// - time complexity = ?

const countUniqueValues = (array) => {
  let initialPointer = 0;
  let observerPointer = initialPointer + 1;

  while (observerPointer <= array.length - 1) {
    if (array[initialPointer] !== array[observerPointer]) {
      initialPointer++;
      array[initialPointer] = array[observerPointer];
    }

    observerPointer++;
  }

  return initialPointer + 1;
};

console.log(countUniqueValues([1, 1, 1, 1, 2, 2, 3, 4, 5, 5, 5, 5, 6, 6])); // 6
console.log(countUniqueValues([1, 2, 2, 5, 7, 7, 99])); // 5
