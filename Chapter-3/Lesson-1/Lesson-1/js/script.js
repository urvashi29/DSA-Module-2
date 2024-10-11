// Recursion

//Calculate Factorial
factorialRecursion = (n) => {
  //base case ( condition at which recursion call should end)
  if (n == 0) {
    return 1; //recursive calls will end
  } else {
    return n * factorialRecursion(n - 1); //5 * 4 * 3 * 2 * 1
  }
};

// console.log(factorialRecursion(5));

//Loops
factorialLoops = (num) => {
  let factorial = 1;

  for (let i = 1; i <= num; i++) {
    factorial = factorial * i;
  }

  return factorial;
};

// console.log(factorialLoops(5));

//product of Array elments
productArray = (arr) => {
  if (arr.length == 1) {
    return arr[0];
  } else {
    let ele = arr.pop(); //2
    return ele * productArray(arr);
  }
};

// console.log(productArray([1, 2, 4, 6])); //6 * 4 * 2 * 1 = 48

//reverseString
reverseStringRecursion = (str) => {
  if (str.length == 0) {
    return "";
  } else {
    let subStr = reverseStringRecursion(str.substring(1)); //return string from 1st index till end
    return subStr + str.charAt(0);
  }
};

console.log(reverseStringRecursion("hello!"));

// fibonacci series
// With loops
fibonacciLoops = (n) => {
  let a = 1,
    b = 0,
    temp;

  while (n > 0) {
    temp = a; //5
    a = a + b; //8
    b = temp; //5
    n--;
  }

  return b;
};

console.log(fibonacciLoops(10));

// with recursion
recursionFibonacci = (n) => {
  if ((n == 1) | (n == 2)) {
    return 1;
  } else {
    return recursionFibonacci(n - 1) + recursionFibonacci(n - 2);
  }
};

console.log(recursionFibonacci(10));
