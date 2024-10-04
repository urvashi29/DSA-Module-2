// Heap Sort (Inplace)
function heapSort(arr) {
  let length = arr.length; //5

  // Build the heap
  for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
    heapify(arr, length, i); //
  }

  // Extract elements one by one from the heap
  for (let i = length - 1; i > 0; i--) {
    // Swap the root (maximum element) with the last element
    [arr[0], arr[i]] = [arr[i], arr[0]];

    // Restore heap property for the remaining heap
    heapify(arr, i, 0);
  }

  return arr;
}

function heapify(arr, length, rootIndex) {
  let largest = rootIndex; //5
  let left = 2 * rootIndex + 1;
  let right = 2 * rootIndex + 2;

  // Compare the root with the left child
  if (left < length && arr[left] > arr[largest]) {
    largest = left;
  }

  // Compare the largest with the right child
  if (right < length && arr[right] > arr[largest]) {
    largest = right;
  }

  // If the largest element is not the root, swap them and heapify the affected subtree
  if (largest !== rootIndex) {
    //swapping
    [arr[rootIndex], arr[largest]] = [arr[largest], arr[rootIndex]];

    // Recursively heapify the affected subtree
    heapify(arr, length, largest); //
  }
}

console.log(heapSort([10, 4, 8, 5, 12, 2, 6, 11, 3, 9, 7, 1]));

// Time
// Worst O(n logn)
// Average O(n logn)
// Best O(n logn)

// Space O(1)

//Non-comparison Inplace (Radix, Bucket, Counting)

// Counting Sort
function countingSortAlgo(arr) {
  if (arr.length === 0) {
    return arr;
  }

  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const range = max - min + 1;

  const count = new Array(range).fill(0); //store the count of array elements
  const output = new Array(arr.length); //to store output array

  for (let i = 0; i < arr.length; i++) {
    count[arr[i] - min]++; //
  }

  // console.log(count);

  for (let i = 1; i < range; i++) {
    count[i] += count[i - 1];
  }

  // console.log(count);

  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]); //
    output[count[arr[i] - min] - 1] = arr[i]; //output[0] = 1
    count[arr[i] - min]--;
  }

  return output;
}

// console.log(countingSortAlgo([4, 2, 2, 8, 3, 3, 1]));

// Time
// Worst O(n + k)
// Average  O(n + k)
// Best  O(n + k)

// Space O(n + k)

// Bucket Sort
function bucketSort(arr, bucketSize = 5) {
  if (arr.length === 0) {
    return arr;
  }

  // Find the minimum and maximum values in the input array
  let maxValue = Math.max(...arr); //
  let minValue = Math.min(...arr); //

  // Determine the number of buckets needed
  const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  const buckets = new Array(bucketCount); //

  // Initialize the buckets
  for (let i = 0; i < bucketCount; i++) {
    buckets[i] = []; //
  }

  // Distribute the elements into the buckets
  for (let i = 0; i < arr.length; i++) {
    const bucketIndex = Math.floor((arr[i] - minValue) / bucketSize);
    buckets[bucketIndex].push(arr[i]); //
  }

  console.log(buckets);

  // Sort each bucket and concatenate them
  const sortedArray = [];
  for (let i = 0; i < bucketCount; i++) {
    insertionSort(buckets[i]); //
    sortedArray.push(...buckets[i]);
  }

  return sortedArray;
}

function insertionSort(arr) {
  const length = arr.length;
  for (let i = 1; i < length; i++) {
    const current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
}

console.log(bucketSort([6, 2, 5, 3, 9, 9.1]));

// Time
// Worst O(n ^ 2)
// Average O(n ^ 2)
// Best (n + k)

// Space O(n + k)

// Radix Sort
function radixSort(arr) {
  const max = Math.max(...arr); //802
  let divisor = 1;

  while (divisor <= max) {
    arr = countingSort(arr, divisor);
    divisor *= 10; //divisor = divisor * 10
  }

  return arr;
}

function countingSort(arr, divisor) {
  const count = new Array(10).fill(0);
  const n = arr.length;
  const output = new Array(n);

  for (let i = 0; i < n; i++) {
    const digit = Math.floor((arr[i] / divisor) % 10); //
    count[digit]++;
  }

  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  for (let i = n - 1; i >= 0; i--) {
    const digit = Math.floor((arr[i] / divisor) % 10);
    output[count[digit] - 1] = arr[i];
    count[digit]--;
  }

  for (let i = 0; i < n; i++) {
    arr[i] = output[i];
  }

  return arr;
}

console.log(radixSort([170, 45, 75, 90, 802, 24, 2, 66]));

// Time
// Worst O(d * (n + k)): d is representing digit
// Average  O(d * (n + k))
// Best  O(d * (n + k))

// Space O(n + k)
