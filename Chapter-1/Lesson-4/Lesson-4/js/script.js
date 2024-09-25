// 1. Find the maximum element in an array.
//    Traditional Solution
//    Time Complexity: O(n), where n is length of array
//    Space Complexity: O(1): constant

// function findMaxElement(arr) {
//   let max = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }

//   return max;
// }

// console.log(findMaxElement([3, 16, 8, 4, 5])); //16

// Optimized
//    Time Complexity: O(n): where n is length of array
//    Space Complexity: O(1)

// function findMaxElement(arr) {
//   if (arr.length === 0) {
//     return "Empty Array";
//   }

//   let max = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }

//   return max;
// }

// console.log(findMaxElement([3, 16, 8, 4])); //16
// console.log(findMaxElement([])); //empty array

// Task
//Find the biggest even number in an array [10, 20, 30, 100, 909, 1]: 100
//Find the biggest odd number in an array [10, 20, 30, 100, 9080, 1001]: 1001

// 2. Reverse an array in-place.
// Traditional Solution
// Time Complexity: O(n)
// Space Complexity: O(1)

// function reverseArray(arr) {
//   let start = 0; //
//   let end = arr.length - 1; //5

//   while (start < end) {
//     const temp = arr[start];
//     arr[start] = arr[end];
//     arr[end] = temp;
//     start++;
//     end--;
//   }

//   return arr;
// }

// console.log(reverseArray([3, 6, 8, 4, 9, 5])); //

// Optimized
// Time Complexity: O(n)
// Space Complexity: O(1)

// function reverseArray(arr) {
//   let start = 0;
//   let end = arr.length - 1;

//   while (start < end) {
//     [arr[start], arr[end]] = [arr[end], arr[start]]; //destructing
//     start++;
//     end--;
//   }

//   return arr;
// }

// console.log(reverseArray([3, 6, 8, 4, 9, 5]));

// Task
// let a = 10, b = 20 , swap the value of a & b without temp variable

// 3. Find the second smallest element in an array.
// Traditional Solution
// Time Complexity: O(n log n)
// Space Complexity: O(n)

// function findSecondSmallest(arr) {
//   const sortedArr = arr.sort((a, b) => a - b); // Sort the array in ascending order
//   console.log(sortedArr); //[3, 3, 4, 5, 6, 8, 9]

//   const uniqueArr = [...new Set(sortedArr)]; // [3, 4, 5, 6, 8, 9] // Remove duplicates by creating a new array

//   if (uniqueArr.length < 2) {
//     return "Don't add duplicate"; // Handle the case when there are less than two unique elements in the array
//   }

//   return uniqueArr[1]; // Return the second element in the sorted, unique array
// }

// console.log(findSecondSmallest([3, 3, 6, 8, 4, 9, 5])); //

// Optimized
// Time complexity: O(n)
// Space Complexity O(1)

// function findSecondSmallest(arr) {
//   let smallest = Infinity;
//   let secondSmallest = Infinity;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < smallest) {
//       secondSmallest = smallest; //
//       smallest = arr[i]; //
//     } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
//       secondSmallest = arr[i];
//     }
//   }

//   return secondSmallest;
// }

// console.log(findSecondSmallest([3, 6, 8, 4, 9, 5]));

// console.log(9 / 0);
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);

// Task: Find the second largest value in an array

// 4. Find intersection of two arrays.
// Traditional Solution
// Time Complexity: O(n * m)
// Space Complexity: O(k): k is the length of intersection array

// function findIntersection(arr1, arr2) {
//   const intersection = [];

//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j] && !intersection.includes(arr1[i])) {
//         intersection.push(arr1[i]);
//       }
//     }
//   }
//   return intersection;
// }

// const arr1 = [1, 2, 3, 4, 5]; //n: length of arr1
// const arr2 = [4, 5, 6, 7, 8]; //m: length of arr2
// console.log(findIntersection(arr1, arr2)); //[4, 5]

// Optimized
// Time complexity: O(n + m)
// Space Compexity: O(max(n, m))[] O(k)

function findIntersection(arr1, arr2) {
  const setOne = new Set(arr1); //
  console.log(setOne);

  const intersection = [];

  for (let i = 0; i < arr2.length; i++) {
    if (setOne.has(arr2[i])) {
      intersection.push(arr2[i]); //[4, 5]
      setOne.delete(arr2[i]);
    }
  }

  return intersection;
}

const arr1 = [1, 2, 3, 4, 5]; //n
const arr2 = [4, 5, 6, 7, 8]; //m
console.log(findIntersection(arr1, arr2)); //[4, 5]

// Task
// Symmetric diff:
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [4, 5, 6, 7, 8];
// outout: [1, 2, 3, 6, 7, 8 ]

// 5.  Find the longest substring without repeating characters.
// Traditional Solution
// Time Complexity: O(n^2)
// Space Complexity: O(n)

function longestSubstringWithoutRepeatingChars(str) {
  let longest = "";
  for (let i = 0; i < str.length; i++) {
    let substring = "";
    for (let j = i; j < str.length; j++) {
      if (substring.includes(str[j])) {
        break;
      }
      substring += str[j]; //
    }
    if (substring.length > longest.length) {
      longest = substring;
    }
  }
  return longest;
}

console.log(longestSubstringWithoutRepeatingChars("abcdbcbb"));

// Optimized

// 6. Find the first non-repeating character in it.
// Traditional Solution
// Time Complexity: O(n^2)
// Space Complexity: O(1)

// function firstNonRepeatingChar(str) {
//   for (let i = 0; i < str.length; i++) {
//     let isRepeated = false;
//     for (let j = 0; j < str.length; j++) {
//       if (i !== j && str[i] === str[j]) {
//         isRepeated = true;
//         break;
//       }
//     }
//     if (!isRepeated) {
//       return str[i];
//     }
//   }
//   return null;
// }

// console.log(firstNonRepeatingChar("lovealmario"));

// Optimized
// Time compelxity O(n)
// Space compelxity O(n)

// function firstNonRepeatingChar(str) {
//   const charCount = new Map();

//   //   storing string char with occuernce value in map
//   for (let i = 0; i < str.length; i++) {
//     charCount.set(str[i], (charCount.get(str[i]) || 0) + 1);
//   }

//   console.log(charCount);

//   for (let i = 0; i < str.length; i++) {
//     if (charCount.get(str[i]) === 1) {
//       return str[i];
//     }
//   }
// }

// console.log(firstNonRepeatingChar("lovealmario"));

// 7. Find the length of the longest palindromic substring.
// Traditional Solution
// Time Complexity: O(n^3)
// Space Complexity: O(n)

// function longestPalindromicSubstring(str) {
//   let longest = '';
//   for (let i = 0; i < str.length; i++) {
//     for (let j = i; j < str.length; j++) {
//       let substring = str.substring(i, j + 1);
//       if (isPalindrome(substring) && substring.length > longest.length) {
//         longest = substring;
//       }
//     }
//   }
//   return longest;
// }

// function isPalindrome(str) {
//   return str === str.split('').reverse().join('');
// }

// console.log(longestPalindromicSubstring("babad"));

// Optimized

// 8. Determine if 2nd string is an anagram of 1st string.
// Traditional Solution
// Time Complexity: O(n log n)
// Space Complexity: O(n)

// function isAnagram(s, t) {
//   if (s.length !== t.length) {
//     return false;
//   }

//   const sortedS = s.split("").sort().join("");
//   const sortedT = t.split("").sort().join("");
//   return sortedS === sortedT;
// }

// console.log(isAnagram("triangle", "integral"));//yes

// Optimized
// Time complexity: O(2n)
// space complexity: O(n)

// function isAnagram(s, t) {
//   if (s.length != t.length) {
//     return false;
//   }

//   const charCount = {};
//   for (let i = 0; i < s.length; i++) {
//     charCount[s[i]] = charCount[s[i]] ? charCount[s[i]] + 1 : 1;
//   }

//   console.log(charCount);

//   for (let i = 0; i < t.length; i++) {
//     if (!charCount[t[i]]) {
//       return false;
//     }
//     charCount[t[i]]--;
//   }

//   return "yes exists";
// }

// console.log(isAnagram("triangle", "integral"));

// 9. Check if a String Matches a Pattern
// Traditional Solution
// Time Complexity: O(n^2)
// Space Complexity: O(n)

// function patternMatching(pattern, str) {
//   const patternLength = pattern.length;
//   const strLength = str.length;
//   if (patternLength === 0 && strLength === 0) {
//     return true;
//   }
//   if (patternLength === 0 || strLength === 0) {
//     return false;
//   }
//   const patternArr = pattern.split("");
//   const strArr = str.split(" ");
//   if (patternArr.length !== strArr.length) {
//     return false;
//   }
//   const patternMap = new Map();
//   const strSet = new Set();
//   for (let i = 0; i < patternLength; i++) {
//     const char = patternArr[i];
//     const word = strArr[i];
//     if (!patternMap.has(char) && !strSet.has(word)) {
//       patternMap.set(char, word);
//       strSet.add(word);
//     } else {
//       if (patternMap.get(char) !== word) {
//         return false;
//       }
//     }
//   }
//   return true;
// }

// console.log(patternMatching("abba", "dog cat cat dog")); //

// Optimized

// function patternMatching(pattern, str) {
//   const patternLength = pattern.length;
//   const strArr = str.split(" ");

//   if (patternLength !== strArr.length) {
//     return false;
//   }

//   const patternMap = new Map(); // storing pattern
//   const strSet = new Set(); //storing string

//   for (let i = 0; i < patternLength; i++) {
//     const char = pattern[i]; //
//     const word = strArr[i]; //
//     if (!patternMap.has(char) && !strSet.has(word)) {
//       patternMap.set(char, word); //
//       strSet.add(word); //
//     } else {
//       if (patternMap.get(char) !== word) {
//         return false;
//       }
//     }
//   }
//   return true;
// }

// console.log(patternMatching("abba", "dog cat cat dog")); //

// 10. Implement a function to find all occurrences of the pattern in the text.
// Traditional Solution
// Time Complexity: O((n - m + 1) * m)
// Space Complexity: O(k), where k is the length of occurrences

// function patternMatching(text, pattern) {
//   const n = text.length;
//   const m = pattern.length;
//   const occurrences = [];

//   for (let i = 0; i <= n - m; i++) {
//     let j = 0;
//     for (j = 0; j < m; j++) {
//       if (text[i + j] !== pattern[j]) {
//         break;
//       }
//     }

//     if (j === m) {
//       occurrences.push(i);
//     }
//   }
//   return occurrences;
// }

// console.log(patternMatching("abababab", "aba"));

// Optimized
// Time complexity: O(n + m);
// space complexity: O(k)

function patternMatching(text, pattern) {
  const n = text.length;
  const m = pattern.length;
  let occurences = [];

  for (let i = 0; i <= n - m; ) {
    let j = 0;
    while (j < m && text[i + j] === pattern[j]) {
      j++;
    }

    if (j === m) {
      occurences.push(i);
      i += m - 1; //
    } else {
      i++;
    }
  }

  return occurences;
}

console.log(patternMatching("abacbabab", "aba"));

// 11. Count the number of occurrences of the pattern in the text.
// Traditional Solution
// Time Complexity: O((n - m + 1) * m)
// Space Complexity: O(1)

// function countOccurrences(text, pattern) {
//   const n = text.length;
//   const m = pattern.length;
//   let count = 0;
//   for (let i = 0; i <= n - m; i++) {
//     let j = 0;
//     while (j < m) {
//       if (text[i + j] !== pattern[j]) {
//         break;
//       }
//       j++;
//     }
//     if (j === m) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countOccurrences("Hello, Hello, world!", "Hello"));

// Optimized
// Time complexity: O(n + m);
// space complexity: O(1)

function countOccurrences(text, pattern) {
  const n = text.length;
  const m = pattern.length;
  let count = 0;

  i = 1;
  j = 0;

  for (let i = 0; i <= n - m; ) {
    let j = 0;
    while (j < m && text[i + j] === pattern[j]) {
      j++;
    }

    if (j === m) {
      count++;
      i += m - 1; //i = i + m - 1
    } else {
      i++;
    }
  }

  return count;
}

console.log(countOccurrences("abababab", "aba"));

// 12.Replace all occurrences of the pattern in the text with a given replacement string.
// Traditional Solution
// Time Complexity: O(n + m)
// Space Complexity: O(n + k * r), where n is the length of the text, k is the number of occurrences, and r is the length of the replacement string

// function patternReplace(text, pattern, replacement) {
//   let result = "";
//   const n = text.length;
//   const m = pattern.length;
//   let i = 0;
//   while (i <= n - m) {
//     let j = 0;
//     while (j < m && text[i + j] === pattern[j]) {
//       j++;
//     }
//     if (j === m) {
//       result += replacement;
//       i += m;
//     } else {
//       result += text[i];
//       i++;
//     }
//   }
//   return result + text.slice(i);
// }

// console.log(patternReplace("abababab", "aba", "xyz"));

// Optimized
// Time complexity: O(n)
// Space complexity: O(n)
function patternReplace(text, pattern, replacement) {
  let newRegex = new RegExp(pattern, "g");
  return text.replace(newRegex, replacement);
}

console.log(patternReplace("abababab", "aba", "xyz"));

//Covered: 1, 2, 3, 4, 8, 10, 11
//Complete Task: Mentioned below the questions, I have covered