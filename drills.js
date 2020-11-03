// In these drills, you'll practice determining the big O complexity of algorithms. For each drill,
// we'll provide a code snippet with a function, and you'll work out the big O complexity by analyzing
// the code without running it.

// 1. What is the Big O for this?
// 1) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You
// want to find a playmate for your dog, preferably of the same breed. So you want to know if anyone out
// of the 15 people have the same breed as your dog. You stand up and yell out, who here has a golden
// retriever and would like to be a playdate for my golden. Someone yells - "I do, be happy to bring him over"

// Constant O(1)

// 2) Determine the Big O for the following algorithm: You are sitting in a room with 15 people.
// You want to find a playmate for your dog who is of the same breed. So you want to know if anyone out of the 15
// people have the same breed as your dog. You start with the first person and ask him if he has a golden retriever.
// He says no, then you ask the next person, and the next, and the next until you find someone who has a golden or
// there is no one else to ask.

// Linear O(n)

// ===================================================================================================================

// 2. Even or odd
// What is the Big O of the following algorithm? Explain your answer

// function isEven(value) {
//     if (value % 2 === 0) {
//         return true;
//     }
//     else
//         return false;
//     }
// }

// Constant O(1) - Performing a basic arithmetic operation

// ===================================================================================================================

// 3. Are you here?
// What is the Big O of the following algorithm? Explain your answer

// function areYouHere(arr1, arr2) {
//     for (let i = 0; i < arr1.length; i++) {
//         const el1 = arr1[i];
//         for (let j = 0; j < arr2.length; j++) {
//             const el2 = arr2[j];
//             if (el1 === el2) return true;
//         }
//     }
//     return false;
// }

// Polynomial O(n^2) - Two levels of looping over the input - For every element in array1 you are checking every element
// in array2 compounding the operations

// ===================================================================================================================

// 4. Doubler
// What is the Big O of the following algorithm? Explain your answer

// function doubleArrayValues(array) {
//     for (let i = 0; i < array.length; i++) {
//         array[i] *= 2;
//     }
//     return array;
// }

// Linear O(n) - Only looping through the array once to perform an operation but looping through every element in the array

// ===================================================================================================================

// 5. Naive search
// What is the Big O of the following algorithm? Explain your answer

// function naiveSearch(array, item) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === item) {
//             return i;
//         }
//     }
// }

// Linear O(n) - Go through each item in the array once to check to see if it is the item you are looking for

// ===================================================================================================================

// 6. Creating pairs:
// What is the Big O of the following algorithm? Explain your answer

// function createPairs(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for(let j = i + 1; j < arr.length; j++) {
//             console.log(arr[i] + ", " +  arr[j] );
//         }
//     }
// }

// O(n log(n)) - The first for loop will go through each element in the array but the second for loop will only go through
// elements with higher indeces than the index of whichever element the first loop is on.
// This means the second loop will take increasingly less time to complete the longer the app runs. It's not as fast as
// linear but it's not as slow as polynomial and by the graph that is approx O(n log(n))


// ===================================================================================================================

// 7. Compute the sequence
// What does the following algorithm do? What is its runtime complexity? Explain your answer

// function compute(num) {
//     let result = [];
//     for (let i = 1; i <= num; i++) {

//         if (i === 1) {
//             result.push(0);
//         }
//         else if (i === 2) {
//             result.push(1);
//         }
//         else {
//             result.push(result[i - 2] + result[i - 3]);
//         }
//     }
//     return result;
// }

// Linear 0(n) - Prints out the fibonacci sequence based on how high the input is - Will perform as many operations
// as given by the input
// Example: If input is 7 it prints the first 7 fibbonacci numbers by adding the two numbers previous together

// ===================================================================================================================

// 8. An efficient search
// In this example, we return to the problem of searching using a more sophisticated approach than in naive search, above.
// Assume that the input array is always sorted. What is the Big O of the following algorithm? Explain your answer

// function efficientSearch(array, item) {
//     let minIndex = 0;
//     let maxIndex = array.length - 1;
//     let currentIndex;
//     let currentElement;

//     while (minIndex <= maxIndex) {
//         currentIndex = Math.floor((minIndex + maxIndex) / 2);
//         currentElement = array[currentIndex];

//         if (currentElement < item) {
//             minIndex = currentIndex + 1;
//         }
//         else if (currentElement > item) {
//             maxIndex = currentIndex - 1;
//         }
//         else {
//             return currentIndex;
//         }
//     }
//     return -1;
// }

// Logarithmic O(log(n)) - Takes a sorted array and an item. It splits the array into two halves by picking the middle
// element. If that element is greater than the element we are seeking we can eliminate the upper half. If the current
// element is less than the element we are seeking we can eliminate the lower half. It does this and keeps splitting
// into smaller and smaller bits until the element we are looking for is found. Because we are eliminating large amounts
// of our data from our search, due to the knowledge the array is sorted, we know that the runtime is O(log(n)).

// ===================================================================================================================

// 9. Random element
// What is the Big O of the following algorithm? Explain your answer

// function findRandomElement(arr) {
//     return arr[Math.floor(Math.random() * arr.length)];
// }

// Constant O(1) - Picks a random element and returns it, no need to look at any of the items

// ===================================================================================================================

// 10. What Am I?

// function isWhat(n) {
//     if (n < 2 || n % 1 !== 0) {
//         return false;
//     }
//     for (let i = 2; i < n; ++i) {
//         if (n % i === 0) return false;
//     }
//     return true;
// }

// What does the following algorithm do?
// It checks to see if the number given, n, is not a whole number. If it's not a whole number it returns true.
// If it is a whole number it returns false.

// What is the Big O of the following algorithm? Explain your answer.
// Linear 0(n) - As the number gets bigger there have to be more and more checks to see if there are any factors of
// said number. This continues until the number about to be checked, i, is greater than or equal to the number given, n.


// ===================================================================================================================

// 11. Tower of Hanoi
// The Tower of Hanoi is a very famous mathematical puzzle (some call it game!). This is how it goes:

// There are three rods and a number of disks of different sizes which can slide onto any rod. The puzzle starts with
// the disks neatly stacked in ascending order of size on one rod, the smallest disk at the top (making a conical shape).
// The other two rods are empty to begin with.
// The goal of the puzzle is to move the entire stack of rods to another rod (can't be the original rod where it was
// stacked before) where it will be stacked in the ascending order as well. This should be done obeying the following rules:
// i) Only one disk may be moved at a time
// ii) Each move consists of taking the upper disk from one of the rods and sliding it onto another rod, on top of the other
// disks that may already be present on that rod.
// iii) A larger disk may not placed on top of a smaller disk

// Input:

// Rod A	Rod B	Rod C
// ----
// ---------
// -------------
// Output:

// Rod A	Rod B	Rod C
// ----
// ---------
// -------------
// Derive an algorithm to solve the Tower of Hanoi puzzle.
// Implement your algorithm using recursion. Your program should display each movement of the disk from one rod to another.
// If you are given 5 disks, how do the rods look like after 7 recursive calls?
// How many moves are needed to complete the puzzle with 3 disks? with 4 disks? with 5 disks?
// What is the runtime of your algorithm?

// ===================================================================================================================

// Answers for #12, #13 & #14 combined below

// 12. Iterative version
// Solve the drills 1 - 7 from your previous checkpoint (Recursion) iteratively.

// 13. Recursive Big O
// Take your solutions from the recursive exercises that you completed in the previous checkpoint and identify the time
// complexities (big O) of each of them.

// 14. Iterative Big O
// Take your solutions from the iterative exercises today and identify the time complexities (big O) of each of them.


// 1. Counting Sheep

function sheep(num) {
  for (let i = num; i > 0; i--) {
      console.log(`${i}: Another sheep jumps over the fence.`);
  }
  console.log('All sheep jumped over the fence.');
}

// Recursive Big O - Linear O(n)
// Iterative Big O - Linear O(n)

// 2. Power Calculator

function powerCalculator(base, exp) {
  if (exp === 0) {
      return 1;
  }
  if (exp < 0) {
      return 'Exponent should be >= 0';
  }
  let product = 1;
  for (let i = 0; i < exp; i++) {
      product *= base;
  }
  return product;
}

// Recursive Big O - Linear O(n)
// Iterative Big O - Linear O(n)

// 3. Reverse String

function reverse(str) {
  let newString = '';
  for (let i = str.length - 1; i >= 0; i--) {
      newString += str.charAt(i);
  }
  return newString;
}

// Recursive Big O - Linear O(n)
// Iterative Big O - Linear O(n)

// 4. nth Triangular Number

function triangular(n) {
  if (n < 0) return 'N must be >= 0 as it is impossible to have negative length.';
  let counter = 0;
  for (let i = 1; i <= n; i++) {
      counter += i;
  }
  return counter;
}

// Recursive Big O - Linear O(n)
// Iterative Big O - Linear O(n)

// 5. String Splitter

function splitter(str) {
  let currentItem = '';
  let itemArray = [];

  for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) !== '/') {
          currentItem += str.charAt(i);
      } else itemArray.push(currentItem);
  }
  return itemArray;
}

// Recursive Big O - Linear O(n)
// Iterative Big O - Linear O(n)

// 6. Fibonacci

function fibonacci(n) {
  let fibonacciStart = [0, 1];
  for (let i = 0; i < n; i++) {
      if (i < 2) {
          console.log(fibonacciStart[i]);
      }
      else {
          let newFib = fibonacciStart[i - 2] + fibonacciStart[i - 1];
          console.log(newFib);
          fibonacciStart.push(newFib);
      }
  }
}

// Recursive Big O - Linear O(n)
// Iterative Big O - Linear O(n)

// 7. Factorial

function factorial(n) {
  let product = n;
  for (let i = n - 1; i > 0; i--) {
      product *= i;
  }
  return product;
}

// Recursive Big O - Linear O(n)
// Iterative Big O - Linear O(n)