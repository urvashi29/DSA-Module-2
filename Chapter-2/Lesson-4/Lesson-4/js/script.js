// Ternary Search
function ternarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid1 = left + Math.floor((right - left) / 3);
    let mid2 = right - Math.floor((right - left) / 3);

    if (arr[mid1] === target) {
      return mid1;
    }

    if (arr[mid2] === target) {
      return mid2;
    }

    if (target < arr[mid1]) {
      right = mid1 - 1;
    } else if (target > arr[mid2]) {
      left = mid2 + 1;
    } else {
      left = mid1 + 1;
      right = mid2 - 1;
    }
  }

  return -1; // Target not found
}

console.log(ternarySearch([1, 2, 3, 4, 5, 6, 7, 8], 5));

// Time Complexity:
// Worst: O(log3(n)): where 3 is the base to logrithm
// Average: O(log3(n))
// Best: O(1)

// Space Complexity: O(1)

// Jump Search
function jumpSearch(arr, target) {
  const n = arr.length;
  let end = Math.floor(Math.sqrt(n)); //2
  let start = 0;

  // Finding the block where the target may exist
  while (arr[Math.min(end, n) - 1] < target) {
    start = end; //4
    end += Math.floor(Math.sqrt(n)); //6

    if (start >= n) {
      return -1; // Target not found
    }
  }

  // Performing a linear search within the block
  while (arr[start] < target) {
    start++; //

    if (start === Math.min(end, n)) {
      return -1; // Target not found
    }
  }

  // Check if the target is found
  if (arr[start] === target) {
    return start; // Index of the target element
  }

  return -1; // Target not found
}

console.log(jumpSearch([1, 2, 3, 4, 5, 6, 7], 5));

// Time Complexity:
// Worst: O(sqrt(n))
// Average: O(sqrt(n))
// Best: O(1)

// Space Complexity: O(1)

//Exponential Search
function exponentialSearch(arr, target) {
  const n = arr.length;

  if (arr[0] === target) {
    return 0; // Target found at the first element
  }

  let i = 1;
  while (i < n && arr[i] <= target) {
    i *= 2;
  }

  // Perform binary search within the identified range
  let left = Math.floor(i / 2); //
  let right = Math.min(i, n - 1); //

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Target found
    }

    if (arr[mid] < target) {
      left = mid + 1; // Target may be in the right half
    } else {
      right = mid - 1; // Target may be in the left half
    }
  }

  return -1; // Target not found
}

console.log(exponentialSearch([1, 2, 3, 4, 5, 6, 7], 5));

// Time Complexity:
// Worst: O(log n)
// Average: O(log n)
// Best: O(1)

// Space Complexity: O(1)
