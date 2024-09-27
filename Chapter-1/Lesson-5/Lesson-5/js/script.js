// 5.  Find the longest substring without repeating characters.
// Time Complexity: O(n^2)
// Space Complexity: O(min(n, m))

function longestSubstringWithoutRepeatingChars(str) {
  let longest = "";
  let start = 0;
  let charMap = new Map();

  for (let end = 0; end < str.length; end++) {
    if (charMap.has(str[end])) {
      start = Math.max(0, charMap.get(str[end]) + 1);
    }
    charMap.set(str[end], end);
    let substring = str.slice(start, end + 1);
    if (substring.length > longest.length) {
      longest = substring;
    }
  }
  return longest;
}

console.log(longestSubstringWithoutRepeatingChars("abcdbcbb")); //abcd

// 6. Find the first non-repeating character in it.
// Time compelxity O(2n)
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

// console.log(firstNonRepeatingChar("lovealmario")); //

// 7. Find the length of the longest palindromic substring.
// Time Complexity: O(n^2)
// Space Complexity: O(1)
// function longestPalindromicSubstring(str) {
//   let longest = '';
//   for (let i = 0; i < str.length; i++) {
//     let oddPalindrome = expandAroundCenter(str, i, i);
//     let evenPalindrome = expandAroundCenter(str, i, i + 1);
//     let currLongest = oddPalindrome.length > evenPalindrome.length ? oddPalindrome : evenPalindrome;
//     if (currLongest.length > longest.length) {
//       longest = currLongest;
//     }
//   }
//   return longest;
// }

// function expandAroundCenter(str, left, right) {
//   while (left >= 0 && right < str.length && str[left] === str[right]) {
//     left--;
//     right++;
//   }
//   return str.substring(left + 1, right);
// }

// console.log(longestPalindromicSubstring("babad"));

// 9. Check if a String Matches a Pattern
// Traditional Solution
// Time Complexity: O(2n)
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

//   const patternArr = pattern.split(""); //["a, "b", "b", "a", "c"]
//   const strArr = str.split(" "); //["dog", "cat", "cat", "dog"]
//   if (patternArr.length !== strArr.length) {
//     return false;
//   }

//   const patternMap = new Map();
//   const strSet = new Set(); //

//   //iterating over "abba"
//   for (let i = 0; i < patternLength; i++) {
//     const char = patternArr[i]; //
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

// Optimized
// Time Complexity: O(n)
// Space Complexity: O(n)
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

// 12.Replace all occurrences of the pattern in the text with a given replacement string.
// Traditional Solution
// Time Complexity: O(n + m)
// Space Complexity: O(n + k * r), where n is the length of the text, k is the number of occurrences, and r is the length of the replacement string

function patternReplace(text, pattern, replacement) {
  let result = "";
  const n = text.length;
  const m = pattern.length;
  let i = 0;
  while (i <= n - m) {
    let j = 0;
    while (j < m && text[i + j] === pattern[j]) {
      j++;
    }
    if (j === m) {
      result += replacement;
      i += m;
    } else {
      result += text[i];
      i++;
    }
  }
  return result + text.slice(i);
}

console.log(patternReplace("abababab", "aba", "xyz"));

// Optimized
// Time complexity: O(n)
// Space complexity: O(n)

function patternReplace(text, pattern, replacement) {
  let newRegex = new RegExp(pattern, "g"); // /aba/g
  let str = text.replace(newRegex, replacement);
  return str;
}

console.log(patternReplace("abababab", "aba", "xyz"));

// Task: go through Ques- 7
