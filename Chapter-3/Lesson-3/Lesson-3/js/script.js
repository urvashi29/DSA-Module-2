function findAllCombinations(arr, index, current) {
  if (index === arr.length) {
    console.log(current); //
    return;
  }
  findAllCombinations(arr, index + 1, current);
  findAllCombinations(arr, index + 1, current.concat(arr[index])); //
}

// findAllCombinations(["a", "b", "c"], 0, []); //

// Function to find a subset of numbers that add up to a target sum
function findSubsetSum(arr, target) {
  let solution = [];

  // Recursive function to find a solution
  function backtrack(start, sum) {
    // Check if the solution is valid
    if (sum === target) {
      console.log(solution); //
      return;
    }

    // Try all possible paths
    for (let i = start; i < arr.length; i++) {
      solution.push(arr[i]); //[1, 2, 3, 4, 5]
      backtrack(i + 1, sum + arr[i]);
      solution.pop();
    }
  }

  // Call the recursive function
  backtrack(0, 0);
}

// findSubsetSum([1, 2, 3, 4, 5], 7);

// Implementation of backtracking
// function backtrack(parameters) {
//   // Base case(s) - Check for termination conditions
//   if ( /* base case condition */) {
//     // Solution found or termination condition met
//     // Perform necessary operations or return the solution
//     return;
//   }

//   // Iterate over possible choices or options
//   for (let option of /* possible choices */ ) {
//     // Make a choice
//     // Modify parameters or update the state

//     // Recursive call
//     backtrack( /* updated parameters */ );

//     // Undo the choice (backtrack)
//     // Restore parameters or revert the state
//   }
// }

// // Call the backtracking function with initial parameters
// backtrack( /* initial parameters */ );

// Applications:
// Hamiltonion cycle: https://www3.cs.stonybrook.edu/~skiena/combinatorica/animations/anim/ham.gif
// Queen's Problem: https://algoanim.ide.sk/index.php?page=showanim&id=61

// Task: Find all the possible combination generated from [1, 2, 3]
