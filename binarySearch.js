// BINARY SEARCH
// sorted array
// return index

const search = (array, value) => {
  console.log(array);
  let leftPointer = 0;
  let rightPointer = array.length - 1;

  while (leftPointer <= rightPointer) {
    const middlePointer = Math.floor((leftPointer + rightPointer) / 2);
    const currentValue = array[middlePointer];

    if (currentValue === value) return middlePointer;

    if (currentValue > value) {
      rightPointer = middlePointer - 1;
      continue;
    }

    if (currentValue < value) {
      leftPointer = middlePointer + 1;
      continue;
    }
  }

  return -1;
};

console.log(search([1, 2, 3, 4, 5, 6], 3));
