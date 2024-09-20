//space & time complexity

searchArrElement = (arr, ele) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == ele) {
      console.log("found");
      break;
    }
  }
};

searchArrElement([10, 20, 30, 1, 3, 2, 12, 100], 10); //arr, elementToBeSearched

// Worst case: element to be searched is present at the end. O(n): where "n" is size of array
// Average Case: element to be searched is present in middle 0(n): where "n" is size of the array
// Best Case Omega: element to be searched is present in the start Omega(1)

// space complexity: O(1) constant
// Time complexity: O(n), where is size of input array

// Calculation
// O(1)
// Space: No additional variable is created
// Time: element/solution is found in beginning

// O(n)
// Space: A new array variable is created
// Time: Iterating over complete array
// for(let i =0 to n) {

// }

// O(n^2)
// Time
// for(let i =0 to n) {
//   for(let j = 0 to n) {

//   }
// }

// O(logn)
// Time
// for(let i =0 to n/2) {

// }

// O(nlog n) ->
// Time
// for(let i = 0 to n) {
// for(let j = 0 to n/2) {
// }
// }

// O(2n)
// for(let i = o to n) {

// }

// for(let i = o to n) {

// }

// O(2^n)
// Time
// Recursive call

