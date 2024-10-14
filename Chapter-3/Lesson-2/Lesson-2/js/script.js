// fibonacci
function fibonacciRecursion(n) {
  if (n == 1 || n == 2) {
    return 1;
  } else {
    let sample = fibonacciRecursion(n - 1) + fibonacciRecursion(n - 2);
    return sample; //
  }
}

console.log(fibonacciRecursion(10)); //

// Time Complexity: O(2 ^ n)

//8. Power
function power(x, n) {
  if (n === 0) {
    return 1;
  }

  if (n % 2 === 0) {
    const temp = power(x, n / 2);
    return temp * temp;
  }

  return x * power(x, n - 1);
}

// console.log(power(2, 4));

// Time Complexity: O(log n)

// 9. Sorted Square
function sortedSquares(nums) {
  const result = new Array(nums.length);
  let left = 0; //
  let right = nums.length - 1; //
  let index = right; //

  // 2 pointer technique
  while (left <= right) {
    const leftSquare = nums[left] * nums[left]; //
    const rightSquare = nums[right] * nums[right]; //

    if (leftSquare > rightSquare) {
      result[index] = leftSquare;
      left++;
    } else {
      result[index] = rightSquare;
      right--;
    }

    index--;
  }

  return result;
}

// console.log(sortedSquares([-4, -2, 0, 2, 4]));

// 12. merge Overlapping

// Traditional
// function mergeOverlappingIntervals(arr) {
//   const n = arr.length;

//   //sort the given intervals:
//   arr.sort((a, b) => a[0] - b[0]);

//   const ans = [];

//   for (let i = 0; i < n; i++) {
//     // select an interval:
//     let start = arr[i][0];
//     let end = arr[i][1];

//     //Skip all the merged intervals:
//     if (ans.length && end <= ans[ans.length - 1][1]) {
//       continue;
//     }

//     //check the rest of the intervals:
//     for (let j = i + 1; j < n; j++) {
//       if (arr[j][0] <= end) {
//         end = Math.max(end, arr[j][1]);
//       } else {
//         break;
//       }
//     }
//     ans.push([start, end]);
//   }
//   return ans;
// }

// let ans = mergeOverlappingIntervals([
//   [1, 3],
//   [8, 10],
//   [2, 6],
//   [15, 18],
// ]);

// for (let it of ans) {
//   console.log(`[${it[0]}, ${it[1]}]`); //[[1,6],[8,10],[15,18]]
// }

// Optimized

function mergeOverlappingIntervals(arr) {
  const n = arr.length; //4

  // sort the given intervals
  arr.sort((a, b) => a[0] - b[0]); //[[1, 3], [2, 6], [8, 10], [15, 18]]

  const ans = [arr[0]]; //

  for (let i = 1; i < n; i++) {
    const last = ans[ans.length - 1];
    const curr = arr[i]; //

    // if the current interval overlaps with the last interval
    if (curr[0] <= last[1]) {
      last[1] = Math.max(last[1], curr[1]);
    }
    // if the current interval does not overlap with the last interval
    else {
      ans.push(curr);
    }
  }

  return ans;
}

let answer = mergeOverlappingIntervals([
  [1, 3],
  [8, 10],
  [2, 6],
  [15, 18],
]);

for (let it of answer) {
  console.log(`[${it[0]}, ${it[1]}]`);
}

// Time: O(n logn) + O(n)
// Space: O(n)
