// ANAGRAMS
// - single word
// - time complexity = O(n)

const validAnagram = (firstWord, secondWord) => {
  console.log(`${firstWord} | ${secondWord}`);
  if (firstWord.length !== secondWord.length) return false;

  const wordFrequency = {};

  // n operation
  for (const key of firstWord) {
    wordFrequency[key] = (wordFrequency[key] || 0) + 1;
  }

  console.log(wordFrequency);

  // n operation
  for (const key of secondWord) {
    if (!wordFrequency[key]) {
      return false;
    }

    wordFrequency[key] -= 1;
  }

  return true;
};

console.log(validAnagram('', ''));
console.log(validAnagram('aaz', 'zza'));
console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram('rat', 'car'));
console.log(validAnagram('awesome', 'awesom'));
console.log(validAnagram('qwerty', 'qeywrt'));
console.log(validAnagram('texttwisttime', 'timetwisttext'));
