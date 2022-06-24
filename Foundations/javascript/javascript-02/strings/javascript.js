//Strings
//Only doing additional things from the MDN page

//Creating a string

const string = "Aarnav"
console.log(string)
const stringCopy = string
console.log(stringCopy)

//Escaping characters into a string (how to use quotes inside a string)

const sentence = "I\'ve no idea what you are talking about."
console.log(sentence)

//String concatenation

let strOne = "Hello,"
let strTwo = "how are you?"
console.log(`${strOne} ${strTwo}`) //Spaces matter here as they will affect how the string is printed.

//Using + operator

let greeting = "Hello"
let userName = "Aarnav"
console.log(greeting + ", " + userName)
//But using backticks is preferrable as its more readable.
console.log(`${greeting}, ${userName}`)

//You can concatenate strings and numbers as well.

let stringNum = "Yes"
let num = 50

console.log(`${stringNum} ${num}`) //automatically converts the number to a string

//Other methods to convert numbers to strings and vice versa

//Number() - Convert strings to numbers

let unconvNum = "50"
let convNum = Number(unconvNum)
console.log(typeof unconvNum) //String
console.log(typeof convNum) //Number

//Expressions can be included in strings as well.

let exam = "Entrance Exam"
let score = 550
let maxScore = 600
let output = `I scored ${(score / maxScore * 100).toFixed(1)}% in the ${exam}!`
console.log(output)

//Multiline strings

let multiLine = `This is
A Multiline string`
console.log(multiLine)

let altMultiline = "This is\nAlso a multiline string."
console.log(altMultiline)
