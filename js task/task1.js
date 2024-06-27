function alphabetizeString(str) {
    return str.split('').sort().join('');
  }
  
  // Example usage:
  const exampleString = 'webmaster';
  console.log(alphabetizeString(exampleString)); // Output: 'abeemrstw'