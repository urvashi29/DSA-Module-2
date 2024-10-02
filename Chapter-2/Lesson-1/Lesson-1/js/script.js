// Bubble sort (Swap)
function bubbleSort(arr) {
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        //swapping
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

// console.log(bubbleSort([6, 10, 20, 3, 9, 2]));//output -> [2, 3, 6, 9, 10, 20]

// Time
// Worst Case: O(n ^ 2)
// Avergae Case: O(n ^ 2)
// Best Case: O(n)

// Space: O(1)

// Selection sort (Swap)
function selectionSort(arr) {
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    // min is represention index values
    let min = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[min] > arr[j]) {
        min = j; //element with smallest index
      }
    }

    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }

  return arr;
}

console.log(selectionSort([3, 7, 5, 4, 2, 1, 6]));

// Time
// Worst Case: O(n ^ 2)
// Avergae Case: O(n ^ 2)
// Best Case: O(n ^ 2)

// Space: O(1)

// Insertion sort (insertion of element)
function insertionSort(arr) {
  let len = arr.length;

  for (let i = 1; i < len; i++) {
    let key = arr[i]; //
    let j = i - 1; //

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--; //
    }

    arr[j + 1] = key;
  }

  return arr;
}

// console.log(insertionSort([5, 3, 6, 2, 10]));

// Worst Case: O(n ^ 2)
// Avergae Case: O(n ^ 2)
// Best Case: O(n)

// Space: O(1)

// Merge sort (divide & conquer technique)
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2); //
  const leftHalf = arr.slice(0, mid); //
  const rightHalf = arr.slice(mid); //

  const sortedLeft = mergeSort(leftHalf); //
  const sortedRight = mergeSort(rightHalf); //

  return merge(sortedLeft, sortedRight);
}
//merge the sorted halves
function merge(leftArr, rightArr) {
  const mergedArr = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      mergedArr.push(leftArr[leftIndex]);
      leftIndex++;
    } else {
      mergedArr.push(rightArr[rightIndex]);
      rightIndex++;
    }
  }

  mergedArr.push(...leftArr.slice(leftIndex));
  mergedArr.push(...rightArr.slice(rightIndex));

  // console.log(mergedArr);
  return mergedArr;
}

// console.log(mergeSort([6, 5, 3, 1, 8, 7, 2, 4]));

// Worst Case: O(n log n)
// Avergae Case: O(n log n)
// Best Case: O(n log n)

// Space: O(n)

// quick sort
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[arr.length - 1]; //
  const left = []; //
  const right = []; //

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([5, 3, 6, 2, 10]));

// Worst Case: O(n ^ 2)
// Avergae Case: O(n log n)
// Best Case: O(n log n)

// Space: O(log n)
