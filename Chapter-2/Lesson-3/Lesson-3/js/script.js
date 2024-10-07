// Linear Search
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; //returning the index
    }
  }
  return "Not Found";
}

// console.log(linearSearch([4, 2, 7, 1, 9], 7));

// Time Complexity
// Worst : O(n): where n is the length of an array
// Averge : O(n)
// Best : O(1)

// Space Complexity: O(1)

function sentinelLinearSearch(arr, target) {
  const lastIndex = arr.length - 1;
  const lastValue = arr[lastIndex]; //
  arr[lastIndex] = target; //

  let i = 0;
  while (arr[i] !== target) {
    i++;
  }

  arr[lastIndex] = lastValue; // Reset the array to its original state
  if (i < lastIndex || arr[lastIndex] === target) {
    return i;
  }
  return -1; // Target value not found
}

// sentinelLinearSearch([4, 6, 7, 9, 0, 1], 7);

// Binary Search (array should be already sorted)
function binarySearch(arr, target) {
  let left = 0; //
  let right = arr.length - 1; //

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

console.log(binarySearch([2, 4, 7, 9, 10], 7));

// Time Complexity
// Worst : O(log n) ; where n is the length of an array
// Averge : O(log n)
// Best : O(1): array element is present in mid value

// Space Complexity: O(1)

// Hash Maps
// Hashmap implementation using objects
class HashMap {
  constructor() {
    this.m = {}; // Object to store key-value pairs
  }

  // Insert a key-value pair into the hashmap
  insert(key, value) {
    this.m[key] = value;
  }

  // Retrieve the value associated with a given key
  get(key) {
    return this.m[key];
  }

  // Remove a key-value pair from the hashmap
  remove(key) {
    delete this.m[key];
  }

  // Check if a key exists in the hashmap
  contains(key) {
    return key in this.m;
  }

  // Get the number of key-value pairs in the hashmap
  size() {
    return Object.keys(this.m).length;
  }

  // Get all keys in the hashmap
  keys() {
    return Object.keys(this.m); //
  }

  // Get all values in the hashmap
  values() {
    return Object.values(this.m);
  }
}

const myHashMap = new HashMap();

myHashMap.insert("name", "John"); //key, value
myHashMap.insert("age", 30); //key, value

console.log(myHashMap.get("name")); //John

console.log(myHashMap.contains("age")); //true

// myHashMap.remove("age");
console.log(myHashMap.size());
console.log(myHashMap.keys()); //["name"]
console.log(myHashMap.values()); //["John"]

// Question: Find two numbers that add up to a target number.
// Traditional
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return null;
}

// console.log(twoSum([4, 2, 5, 17, 9], 11));

// Time Complexity: O(n ^ 2)
// Space Complexity: O(1)

//   Using HashMap
function twoSumMap(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const temp = target - nums[i]; //
    if (map.has(temp)) {
      return [map.get(temp), i];
    }
    map.set(nums[i], i); //
  }

  return null;
}

console.log(twoSumMap([4, 2, 5, 17, 9], 11)); //

// Time Complexity: O(n)
// Space Complexity: O(n)


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

// console.log(ternarySearch([1, 2, 3, 4, 5, 6, 7, 8], 5));
