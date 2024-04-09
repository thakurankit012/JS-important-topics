// COMPARE ARRAY TO OTHER DOUBLED ARRAY
// - time complexity = O(n)

const same = (firstArray, secondArray) => {
  if (firstArray.length !== secondArray.length) {
    return false;
  }

  const firstArrayFrequency = {};
  const secondArrayFrequency = {};

  for (const value of firstArray) {
    firstArrayFrequency[value] = (firstArrayFrequency[value] || 0) + 1;
  }

  for (const value of secondArray) {
    secondArrayFrequency[value] = (secondArrayFrequency[value] || 0) + 1;
  }

  console.log(firstArrayFrequency);
  console.log(secondArrayFrequency);

  for (const key in firstArrayFrequency) {
    const doubled = key ** 2;
    if (!(doubled in secondArrayFrequency)) {
      return false;
    }

    if (firstArrayFrequency[key] !== secondArrayFrequency[doubled]) {
      return false;
    }
  }
  return true;
};

console.log(same([1, 2, 3], [4, 1, 9])); // true
console.log(same([1, 2, 3], [1, 9])); // false
console.log(same([1, 2, 1], [4, 4, 1])); // false
