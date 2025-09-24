const isAnagram = (str1, str2) => {
  if (str1.Length != str2.Length) {
    return false;
  }

  const lowerStr1 = str1.toLowerCase();
  const lowerStr2 = str2.toLowerCase();

  if (lowerStr1 === lowerStr2) {
    return false;
  }

  const sortedStr1 = str1.split("").sort().join();
  const sortedStr2 = str2.split("").sort().join();

  return sortedStr1 === sortedStr2;
};
console.log(isAnagram("object","boject"));