


//Q1. Write a program to find all pairs of an integer array whose sum is equal to a given number?


function findPairsWithSum(arr, targetSum) {
    const result = [];
  
    // Create an empty object to store visited numbers
    const visitedNumbers = {};
  
    for (let i = 0; i < arr.length; i++) {
      const currentNumber = arr[i];
      const complement = targetSum - currentNumber;
  
      // Check if the complement exists in the visited numbers
      if (visitedNumbers[complement]) {
        // If it exists, push the pair to the result array
        result.push([currentNumber, complement]);
      }
  
      // Mark the current number as visited
      visitedNumbers[currentNumber] = true;
    }
  
    return result;
  }
  
  const arr = [3, 4, 5, 6, 7];
  const targetSum = 10;
  const pairs = findPairsWithSum(arr, targetSum);
  
  console.log("Pairs with sum", targetSum, ":", pairs);
  


 //Q2 Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array

 function reverseArrayInPlace(arr) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      // Swap elements at the left and right positions
      const temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
  
      // Move the pointers towards the center
      left++;
      right--;
    }
  }
  
  const myArray = [1, 2, 3, 4, 5];
  reverseArrayInPlace(myArray);
  console.log(myArray); // Output: [5, 4, 3

 //Q3 Write a program to check if two strings are a rotation of each other?

 
function firstNonRepeatedCharacter(str) {
  const charCount = {};

  // Count the frequency of each character in the string
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  // Find the first non-repeated character
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char] === 1) {
      return char;
    }
  }

  // If no non-repeated character is found, return null or a message
  return null;
}

// Test cases
const str1 = "aabbcc";
const str2 = "abcdef";
const str3 = "aabbccddee";
const str4 = "abcabc";

console.log(firstNonRepeatedCharacter(str1)); // Output: null (no non-repeated characters)
console.log(firstNonRepeatedCharacter(str2)); // Output: "a" (the first non-repeated character)
console.log(firstNonRepeatedCharacter(str3)); // Output: null (no non-repeated characters)
console.log(firstNonRepeatedCharacter(str4)); 







//Q4  Write a program to print the first non-repeated character from a string?


function firstNonRepeatedCharacter(str) {
    const charCount = {};
  
    // Count the frequency of each character in the string
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (charCount[char]) {
        charCount[char]++;
      } else {
        charCount[char] = 1;
      }
    }
  
    // Find the first non-repeated character
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (charCount[char] === 1) {
        return char;
      }
    }
  
    // If no non-repeated character is found, return null or a message
    return null;
  }
  
  // Test cases
  const str5 = "aabbcc";
  const str6 = "abcdef";
  const str7 = "aabbccddee";
  const str8 = "abcabc";
  
  console.log(firstNonRepeatedCharacter(str1)); // Output: null (no non-repeated characters)
  console.log(firstNonRepeatedCharacter(str2)); // Output: "a" (the first non-repeated character)
  console.log(firstNonRepeatedCharacter(str3)); // Output: null (no non-repeated characters)
  console.log(firstNonRepeatedCharacter(str4)); 



//Q5. Read about the Tower of Hanoi algorithm. Write a program to implement it.

function towerOfHanoi(n, sourcePeg, auxiliaryPeg, targetPeg) {
    if (n === 1) {
      // If there's only one disk, move it from source to target peg
      console.log(`Move disk 1 from ${sourcePeg} to ${targetPeg}`);
      return;
    }
  
    // Move n-1 disks from source to auxiliary peg using target as the auxiliary
    towerOfHanoi(n - 1, sourcePeg, targetPeg, auxiliaryPeg);
  
    // Move the nth disk from source to target peg
    console.log(`Move disk ${n} from ${sourcePeg} to ${targetPeg}`);
  
    // Move the n-1 disks from auxiliary to target peg using source as the auxiliary
    towerOfHanoi(n - 1, auxiliaryPeg, sourcePeg, targetPeg);
  }
  
  // Example usage:
  const numDisks = 3;
  const source = 'A';
  const auxiliary = 'B';
  const target = 'C';
  
  towerOfHanoi(numDisks, source, auxiliary, target);
  

  //Q6. Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression

  function isOperator(char) {
    // Check if a character is an operator (+, -, *, /, etc.)
    return ['+', '-', '*', '/', '^'].includes(char);
  }
  
  function postfixToPrefix(postfixExpression) {
    const stack = [];
    
    for (let char of postfixExpression) {
      if (!isOperator(char)) {
        // If the character is an operand, push it onto the stack
        stack.push(char);
      } else {
        // If the character is an operator, pop two operands from the stack
        const operand2 = stack.pop();
        const operand1 = stack.pop();
  
        // Combine them with the operator and push the result back onto the stack
        const prefixExpression = char + operand1 + operand2;
        stack.push(prefixExpression);
      }
    }
  
    // The final element in the stack is the prefix expression
    return stack.pop();
  }
  
  // Example usage:
  const postfixExpression = "34+5*";
  const prefixExpression = postfixToPrefix(postfixExpression);
  console.log("Prefix Expression:", prefixExpression); //



  //Q7. Write a program to convert prefix expression to infix expression.in js



  function isOperator(char) {
    // Check if a character is an operator (+, -, *, /, etc.)
    return ['+', '-', '*', '/', '^'].includes(char);
  }
  
  function prefixToInfix(prefixExpression) {
    const stack = [];
  
    // Reverse the prefix expression to process it from left to right
    prefixExpression = prefixExpression.split('').reverse().join('');
  
    for (let char of prefixExpression) {
      if (!isOperator(char)) {
        // If the character is an operand, push it onto the stack
        stack.push(char);
      } else {
        // If the character is an operator, pop two operands from the stack
        const operand1 = stack.pop();
        const operand2 = stack.pop();
  
        // Combine them with the operator and push the result back onto the stack
        const infixExpression = `(${operand1}${char}${operand2})`;
        stack.push(infixExpression);
      }
    }
  
    // The final element in the stack is the infix expression
    return stack.pop();
  }
  
  // Example usage:
  const prefixExpression2 = "*+AB-CD"; // This represents the expression (A+B)*(C-D)
  const infixExpression = prefixToInfix(prefixExpression);
  console.log("Infix Expression:", infixExpression); // Output: "(A+B)*(C-D)"
  //Q8. Write a program to check if all the brackets are closed in a given code snippet.



  function areBracketsClosed(codeSnippet) {
    const stack = [];
    const brackets = {
      "(": ")",
      "{": "}",
      "[": "]"
    };
  
    for (let char of codeSnippet) {
      if (brackets[char]) {
        // If the character is an opening bracket, push it onto the stack
        stack.push(char);
      } else if (char === ")" || char === "}" || char === "]") {
        // If the character is a closing bracket
        if (!stack.length) {
          // If the stack is empty, it means there's no matching opening bracket
          return false;
        }
  
        const lastBracket = stack.pop();
        if (brackets[lastBracket] !== char) {
          // If the closing bracket doesn't match the most recent opening bracket
          return false;
        }
      }
    }
  
    // If there are still open brackets in the stack, they are not properly closed
    return stack.length === 0;
  }
  
  // Test cases
  const code1 = "(a + b) * [c - {d + e}]";
  const code2 = "({[})]";
  const code3 = "if (x > 0) { console.log('Hello'); }";
  
  console.log(areBracketsClosed(code1)); // Output: true (all brackets are closed)
  console.log(areBracketsClosed(code2)); // Output: false (brackets are not properly closed)
  console.log(areBracketsClosed(code3)); // Output: true (all brackets are closed)
  



  //Q9. Write a program to reverse a stack.


  class Stack {
    constructor() {
      this.items = [];
    }
  
    push(item) {
      this.items.push(item);
    }
  
    pop() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items.pop();
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    peek() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items[this.items.length - 1];
    }
  }
  
  function reverseStack(stack) {
    const auxiliaryStack = new Stack();
  
    // Pop elements from the original stack and push them onto the auxiliary stack
    while (!stack.isEmpty()) {
      auxiliaryStack.push(stack.pop());
    }
  
    // Pop elements from the auxiliary stack and push them back onto the original stack
    while (!auxiliaryStack.isEmpty()) {
      stack.push(auxiliaryStack.pop());
    }
  }
  
  // Test the reverseStack function
  const myStack = new Stack();
  myStack.push(1);
  myStack.push(2);
  myStack.push(3);
  myStack.push(4);
  
  console.log("Original Stack:", myStack.items); // Output: Original Stack: [1, 2, 3, 4]
  
  reverseStack(myStack);
  
  console.log("Reversed Stack:", myStack.items); // Ou


//  Q10. Write a program to find the smallest number using a stack.



class MinStack {
    constructor() {
      this.stack = [];
      this.minStack = [];
    }
  
    push(value) {
      this.stack.push(value);
  
      if (this.minStack.length === 0 || value <= this.getMin()) {
        this.minStack.push(value);
      }
    }
  
    pop() {
      if (this.stack.length === 0) {
        return null;
      }
  
      const poppedValue = this.stack.pop();
  
      if (poppedValue === this.getMin()) {
        this.minStack.pop();
      }
  
      return poppedValue;
    }
  
    top() {
      if (this.stack.length === 0) {
        return null;
      }
      return this.stack[this.stack.length - 1];
    }
  
    getMin() {
      if (this.minStack.length === 0) {
        return null;
      }
      return this.minStack[this.minStack.length - 1];
    }
  }
  
  // Example usage:
  const minStack = new MinStack();
  
  minStack.push(3);
  minStack.push(5);
  minStack.push(2);
  minStack.push(1);
  
  console.log("Smallest number:", minStack.getMin()); // Output: Smallest number: 1
  
  minStack.pop();
  
  console.log("Smallest number:", minStack.getMin()); // Out