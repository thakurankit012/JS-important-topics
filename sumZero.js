// SUM ZERO
// - sorted array
// - time complexity = O(n)

const sumZero = (array) => {
  let leftPointer = 0;
  let rightPointer = array.length - 1;

  while (leftPointer < rightPointer) {
    const sum = array[leftPointer] + array[rightPointer];
    if (sum === 0) {
      return [array[leftPointer], array[rightPointer]];
    }

    if (sum > 0) {
      rightPointer--;
    } else {
      leftPointer++;
    }
  }
};

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10])); // [-3, 3]
