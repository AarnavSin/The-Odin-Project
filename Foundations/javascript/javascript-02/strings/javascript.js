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


//String Methods

let text = "A dog is a dog, and a cat is a cat. And you, you are a fool."
console.log(text.length) //returns length of a string

//slice()
console.log(text.slice(4, 20)) //first number is the start position, second is the end position.

//Note: JavaScript counts from 0. First is 0, second is 1 and so on.
console.log(text.slice(-50, -5)) //if negative, it counts from the end of a string.

console.log(text.slice(10)) //if there is no second parameter, it slices the rest of the string from the starting point.

console.log(text.slice(-10)) //if negative, same but reverse

//substring()
console.log(text.substring(1, 50))

//it is the same, except values lower than 0 are treated as zero.
console.log(text.substring(-10, 50))

//replace()
let textTwo = text.replace("dog", "lion")
console.log(textTwo) //it replaces the first matching value, and it is case-sensitive.

//Note -  replace() returns a new string. It does not replace the original.

//case insensitive
console.log(text.replace(/DOG/i, "lion")) //i for insensitive

//replace all matches
console.log(text.replace(/dog/g, "lion")) //g for global

//Expressions written with // are called regular expressions.

//uppercase and lowercase

console.log(text.toUpperCase())
console.log(text.toLowerCase())

//concatenation by method

console.log(text.concat(" And that is the complete truth.", ` You know it, ${string}.`))

//trim()

let trimStr = "         YES!             "
console.log(trimStr.trim()) //removes whitespace from both sides

//padding

let padTxt = "5"
let padded = padTxt.padStart(4,"x")
console.log(padded)
console.log(padTxt.padStart(5,"0"))

//to pad a number

let padNum = 15554
console.log(padNum.toString().padStart(10,"x"))

//pad the end

console.log(padTxt.padEnd(5,"x"))

//extracting string characters

let extrChar = "HELLO!"
console.log(extrChar.charAt(0)) //extracts character at specified index

//extracting unicode value between 0 to 65535
console.log(extrChar.charCodeAt(0)) //UTF-16 value

//convert string to array

//split()
let arrayStr = "I, am the greatest man of all time, and you will agree. | He said so. | Yes."
console.log(arrayStr.split(",")) //new item after every ,
console.log(arrayStr.split(" ")) //new item after every space
console.log(arrayStr.split("|")) //new item after every |