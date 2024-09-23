//Regex
let emailRegexPattern =
  /[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/gi;

let testString = "admin@gmail.com";
console.log(emailRegexPattern.test(testString)); //if test string matching the pattern, it will return true, else false

//match for a specific word
const regexMatchPattern = /ReactJs/i;
console.log(regexMatchPattern.test("I love ReactJs"));

//search & extract
// d -> digit
// /\d{1,2}-\d{1,2}-\d{2,4}/g : 29-11-1992
const regexDobPattern = /\d{1,2}\/\d{1,2}\/\d{2,4}/gi; //29-11-1992
const testDateString = "DOB: 29/11/1992 | 28/12/1998";
const matchDob = testDateString.match(regexDobPattern); //extract the part of the string which matches the pattern
console.log(matchDob);

//[0-9]
const patternDigit = /[1-4]/gi;
const stringDigit = "1238.u9ie";
console.log(stringDigit.match(patternDigit));

// [a-z] | [A-Z]
const stringAlpha = "Open almabetter.com in browser";
const patternAlpha = /[a-e]/gi;
console.log(stringAlpha.match(patternAlpha));

//Naive String Pattern Algo
naiveStringAlgo = (str, pattern) => {
  const n = str.length;
  const m = pattern.length;
  const result = [];

  for (let i = 0; i <= n - m; i++) {
    let j = 0;
    for (j = 0; j < m; j++) {
      if (str[i + j] !== pattern[j]) {
        break;
      }
    }

    if (j === m) {
      result.push(i);
    }
  }

  console.log(result);
};

naiveStringAlgo("ABABABCABABABC", "ABABC");

// Regex
// Find a digit in a string (e.g: "hello789":  789)
// Find all the consonants in string: "iaiuhgufiiai"
// Check whether a given value is alphanumeric or not (e.g: hello789:  yes)
// email, password, contact regex, try test method on this
// check given value(string) contains alpha, underscore, dash check given url is valid or not (e.g. http://www.amazon.in)
