function countLetters(sentence) {
  const letterCounts = {}; // Initialize an empty object to store letter counts

  // Convert the sentence to lowercase to treat 'A' and 'a' as the same letter
  const lowerCaseSentence = sentence.toLowerCase();

  // Iterate through each character in the sentence
  for (let i = 0; i < lowerCaseSentence.length; i++) {
    const char = lowerCaseSentence[i];

    // Check if the character is an alphabet letter (a-z)
    if (char >= 'a' && char <= 'z') {
      // If the letter already exists in letterCounts, increment its count
      if (letterCounts[char]) {
        letterCounts[char]++;
      } else {
        // If the letter is encountered for the first time, initialize its count to 1
        letterCounts[char] = 1;
      }
    }
  }

  return letterCounts; // Return the object containing letter counts
}

