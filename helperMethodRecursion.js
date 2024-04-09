const outer = (array) => {
  const oddValue = [];

  const helper = (helperArray) => {
    if (!helperArray.length) return;

    const currentValue = helperArray[0];

    if (currentValue % 2 !== 0) {
      oddValue.push(currentValue);
    }

    helper(helperArray.slice(1));
  };

  helper(array);
  return oddValue;
};

console.log(outer([1, 2, 3, 4, 5, 6, 7, 8, 9]));
