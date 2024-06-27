function reverseNumber(number) {
    const numberString = number.toString();
    const numberArray = numberString.split('');
    const reversedArray = numberArray.reverse();
    const reversedString = reversedArray.join('');
    const reversedNumber = parseInt(reversedString, 10);
    return reversedNumber;
  }
  
  // Example usage:
  const x = 32243;
  console.log(reverseNumber(x)); // Output: 34223
