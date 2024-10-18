function solveNQueens(n) {
  const result = [];
  const board = Array.from(Array(n), () => Array(n).fill("*"));

  function isSafe(row, col) {
    // Check if there's a queen in the same column
    for (let i = 0; i < row; i++) {
      if (board[i][col] === "Q") {
        return false;
      }
    }

    // Check upper left diagonal
    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === "Q") {
        return false;
      }
    }

    // Check upper right diagonal
    for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === "Q") {
        return false;
      }
    }

    return true;
  }

  function backtrack(row) {
    //
    if (row === n) {
      result.push([...board.map((row) => row.join(""))]);
      return;
    }

    for (let col = 0; col < n; col++) {
      if (isSafe(row, col)) {
        board[row][col] = "Q";
        backtrack(row + 1);
        board[row][col] = "*";
      }
    }
  }

  backtrack(0);
  return result;
}

// console.log(solveNQueens(4));//n = 4

// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
const generateParentheses = (n) => {
  const currentString = []; //
  const validAnswers = [];

  const recurse = (forwardParensNeeded, backwardsParensNeeded) => {
    //base case
    if (forwardParensNeeded === 0 && backwardsParensNeeded === 0) {
      validAnswers.push(currentString.join(""));
    }

    if (forwardParensNeeded > 0) {
      currentString.push("("); //
      recurse(forwardParensNeeded - 1, backwardsParensNeeded);
    }

    if (
      backwardsParensNeeded > 0 &&
      forwardParensNeeded < backwardsParensNeeded
    ) {
      currentString.push(")");
      recurse(forwardParensNeeded, backwardsParensNeeded - 1);
    }

    if (currentString.length > 0) {
      currentString.pop();
    }
  };

  recurse(n, n);

  return validAnswers;
};

console.log(generateParentheses(3)); //


function intersectionWithDuplicates(arr1, arr2) {
  let result = [];

  let arr2Copy = [...arr2];

  // Iterate through the first array
  for (let i = 0; i < arr1.length; i++) {
    let index = arr2Copy.indexOf(arr1[i]);

    if (index !== -1) {
      result.push(arr1[i]);
      arr2Copy.splice(index, 1);
    }
  }

  return result;
}

// Example usage
let arr1 = [1, 2, 2, 3, 4];
let arr2 = [2, 2, 3, 5];
console.log(intersectionWithDuplicates(arr1, arr2)); //
