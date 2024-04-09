// MAX SUB ARRAY SUM CONSECUTIVE
// without sliding window pattern
// - time complexity = O(n^2)

const maxSubArraySum_withoutSlidingWindow = (array, num) => {
  if (num > array.length) return null;

  let max = -Infinity;
  const safeLength = array.length - num + 1;

  for (let i = 0; i < safeLength; i++) {
    let tmp = 0;

    for (let j = i; j < num + i; j++) {
      tmp += array[j];
    }

    if (tmp > max) {
      max = tmp;
      tmp = 0;
    }
  }

  return max;
};

// MAX SUB ARRAY SUM CONSECUTIVE
// withsliding window pattern
// - time complexity = O(n)

const maxSubArraySum = (array, num) => {
  if (num > array.length) return null;

  let max = 0;
  let tmp = 0;

  for (let i = 0; i < num; i++) {
    max += array[i];
  }

  tmp = max;

  for (let i = num; i < array.length; i++) {
    tmp = tmp - array[i - num] + array[i];
    max = Math.max(max, tmp);
  }

  return max;
};

console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubArraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubArraySum([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubArraySum([], 4)); // null
