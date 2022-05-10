// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

describe("eachPerson", () => {
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () => {
    const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
    ]
      expect(eachPerson(people)).toEqual(["Ford Prefect is a hitchhiker", "Zaphod Beeblebrox is president of the galaxy", "Arthur Dent is a radio employee"])
  })
})

// FAIL  ./code-challenges.test.js
//  eachPerson
//    ✕ takes in an array of objects and returns an array with a sentence about each person with their name capitalized (1 ms)
//
//  ● eachPerson › takes in an array of objects and returns an array with a sentence about each person with their name capitalized
//
//    ReferenceError: eachPerson is not defined

// b) Create the function that makes the test pass.

// Pseudocode
// Create a function called eachPerson
// Input is an array of objects
// Use .map to iterate array through function
// Use .split to separate elements in array
// Use .toUpperCase to capitize first letter of name
// Use substring to create a substring of the array
// Use string interpolation to return array

const eachPerson = (array) => {
  return array.map((value) =>{
    let splitArray = value.name.split(' ')
    let captialArray = splitArray[0][0].toUpperCase() + splitArray[0].substring(1) + " "
    + splitArray [1][0].toUpperCase() + splitArray[1].substring(1)
    return `${captialArray} is ${value.occupation}`
  })
}

// PASS  ./code-challenges.test.js
//  eachPerson
//    ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized (1 ms)

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

describe("remainderNumber", () => {
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
      expect(remainderNumber(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
      expect(remainderNumber(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

// FAIL  ./code-challenges.test.js
//  remainderNumber
//    ✕ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3 (1 ms)
//
//  ● remainderNumber › takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3
//
//    ReferenceError: remainderNumber is not defined

// b) Create the function that makes the test pass.

// Pseudocode
// Create a function called remainderNumber
// Input is an array of mixed data
// Use .filter to create a new array with elements that are numbers
// Use .map to iterate each element through the function and create a new array

const remainderNumber = (array) => {
  let numArray = array.filter(value => typeof value === 'number')
  return numArray.map(value => value % 3)
}

// PASS  ./code-challenges.test.js
//  remainderNumber
//    ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3 (1 ms)

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

describe("sumNumbers", () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
    const cubeAndSum1 = [2, 3, 4]
    const cubeAndSum2 = [0, 5, 10]
      expect(sumNumbers(cubeAndSum1)).toEqual(99)
      expect(sumNumbers(cubeAndSum2)).toEqual(1125)
  })
})

// FAIL  ./code-challenges.test.js
//  sumNumbers
//    ✕ takes in an array of numbers and returns the sum of all the numbers cubed (1 ms)
//
//  ● sumNumbers › takes in an array of numbers and returns the sum of all the numbers cubed
//
//    ReferenceError: sumNumbers is not defined

// b) Create the function that makes the test pass.

// Pseudocode
// Create a function called sumNumbers
// Input is an array of numbers
// Use .map to call the function once for each element of array
// Use .reduce to return the value of the calculation of the preceding element

const sumNumbers = (array) => {
  let cubedArray = array.map(value => value ** 3)
  return cubedArray.reduce((a, b) => a + b)
}

// PASS  ./code-challenges.test.js
//  sumNumbers
//    ✓ takes in an array of numbers and returns the sum of all the numbers cubed (1 ms)
