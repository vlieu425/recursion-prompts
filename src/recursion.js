/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
let factorial = function(n) {


//base case, when n = 0, return 1
if (n < 0) {
  return null
}

if (n === 0) {
    return 1
  }

//recursive function, return recursive call (need to move n to 0)
  return n * factorial(n-1)


};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
let sum = function(array) {
  let arrayMod=array.slice()

//base case, when array length = 1, return vlaue in array
  if (array.length === 0) {
    return 0
  }

//recursive case, return call to recursion (shorten array)

  return arrayMod.pop() + sum(arrayMod)

};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
let arraySum = function(array) {
//base case, if primative, return value
  var result = 0
  if (!Array.isArray(array)) {
    return array
  }


  array.forEach(function(item) {
    result += arraySum(item)
  })

  return result

};

// 4. Check if a number is even.
// isEven(2) // true
// isEven(9) // false
let isEven = function(n) {


//base case, if n = 1, return true
  if(n === 0 || n === 2) {
    return true
  }

if (n === 1) {
  return false
}
//recursive = n - 2
if (n < 0) {
  return isEven(-n-2)
}

return isEven(n -2)
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
let sumBelow = function(n) {
//base case, if n = 1, return 1

  if (n === 0) {
    return 0
  }

  if (n < 0) {
    return (n+1) + sumBelow(n+1)
  } else {
    return  (n-1) + sumBelow(n-1)
  }


};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
let range = function(x, y) {
  var result = []
  var low = Math.min(x, y)
  var high = Math.max(x, y)

  // if (y-x < 2) {
  //   return result
  // }

  //base case, if x = y, return result
  if (low+2 === high) {
    return [low+1]
  } else if (low+1 < high){
  //recursive
    result = [low+1].concat(range(low+1, high))
  }

  if (x > y) {
    return result.reverse()
  }

  return result
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
let exponent = function(base, exp) {
  //base case, if exp = 0, return 1


  if (exp === 0) {
    return 1
  }

  //recursive
  //var result = base * exponent(base, M*ath.abs(exp)-1)
  if (exp < 0) {
    var result = base * exponent(base, -exp-1)
  } else {
    var result = base * exponent(base, exp-1)
  }


  if (exp < 0) {
    result = 1/resultcd ..
  }

  return result
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
let powerOfTwo = function(n) {
//base case, if n = 1, return true
if (n === 1) {
  return true
}

if (n < 1) {
  return false
}

//recursive, n/2
return powerOfTwo(n/2)

};

// 9. Write a function that reverses a string.
// reverse("hello"); // olleh
let reverse = function(string) {

  //base case, the length = 1
  if (string.length === 1) {
    return string
  }
  //recursive, shorten string
  return reverse(string.slice(1)) + string[0]

};

// 10. Write a function that determines if a string is a palindrome.
// palindrome("koko") // false
// palindrome("rotor") // true
// palindrome("wow") // true


let palindrome = function(string) {
  string = string.toLowerCase().split(' ').join('')

  //base case, if string.length is 1 or less, return true
  if (string.length <=1) {
    return true
  }

  //recursive
  if (string[0] === string[string.length-1]) {
    return palindrome(string.slice(1, string.length-1))
  } else {
    return false
  }

};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
let modulo = function(x, y) {
  if (x < 0) {
    return modulo(x + y, y);
  }


  let result = x
  if (y === 0) {
    return NaN
  }
//base case if remaining amount is less than 2nd parameter
  if (result < y) {
    return result
  }

  result = modulo(x - y, y)

  return result
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
let multiply = function(x, y) {
  let result = x


  if (x === 0 || y === 0) {
    return 0
  }

  if (y > 0) {
    result = x + multiply(x, y - 1)
  }
  return result
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
let divide = function(x, y) {
  //base case
  var result = 0

  if (y === 0) {
    return NaN
  }

  if (y === 1) {
    return x
  }

  if (x < 0) {
    if (-x < y) {
      return x
    }

    result = -1 + divide(x + y, y)
    return result
  }


  if (x < 0 && y <0) {
    if (x > y) {
      return 0
    }

    result = 1 + divide(x - y, y)
  }


  if (x < y) {
    return x
  } else {

  result = 1 + divide(x - y, y)
  }

  return result
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
let gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
let compareStr = function(str1, str2) {
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
let createArray = function(str) {
};

// 17. Reverse the order of an array
let reverseArr = function(array) {
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
let buildList = function(value, length) {
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
let fizzBuzz = function(n) {
};

// 20. Count the occurrence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
let countOccurrence = function(array, value) {
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
let rMap = function(array, callback) {
};

// 22. Write a function that counts the number of times a key occurs in an object.
// let obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
let countKeysInObj = function(obj, key) {
};

// 23. Write a function that counts the number of times a value occurs in an object.
// let obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
let countValuesInObj = function(obj, value) {
  var count = 0

  for (let key in obj) {
    //base case
    if (obj[key] === value) {
      count++
    }
    //recurseive if item = object
    if (typeof obj[key] === 'object') {
        count += countValuesInObj(obj[key], value)
    }
  }

  return count

};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
let replaceKeysInObj = function(obj, oldKey, newKey) {

  for (let key in obj) {
    //base case
    if (key === oldKey) {
      obj[newKey] = obj[key]
      delete obj[key]
    }

    if (typeof obj[key] === 'object') {
      replaceKeysInObj(obj[key], oldKey, newKey)
    }
  }

  return obj


};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
let fibonacci = function(n) {
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
let nthFibo = function(n) {
};

// 27. Given an array of words, return a new array containing each word capitalized.
// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
let capitalizeWords = function(array) {
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
let capitalizeFirst = function(array) {
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// let obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
let nestedEvenSum = function(obj) {
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
let flatten = function(array) {
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
let letterTally = function(str, obj) {
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
let compress = function(list) {
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
let augmentElements = function(array, aug) {
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
let minimizeZeroes = function(array) {
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
let alternateSign = function(array) {
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
let numToText = function(str) {
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
let tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// let array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
let binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
let mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// let obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// let obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
let clone = function(input) {
};
