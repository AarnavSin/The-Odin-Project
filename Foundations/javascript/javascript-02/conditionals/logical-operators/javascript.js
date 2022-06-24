//Logical Operators

/*
There are four logical operators in JavaScript: || (OR), && (AND), ! (NOT), ?? (Nullish Coalescing)
*/

//|| OR

console.log(true || true) //true
console.log(true || false) //true
console.log(false || true) //true
console.log(false || false) //false

//Data conversion

if (1 || 0) {
    console.log("True!")
} //converts 1 to true and 0 to false

//It is usually used to check multiple statements

let hour = 12
let isWeekend = true

if (hour < 10 || hour > 18 || isWeekend) {
    console.log("The office remains closed.")
} else {
    console.log("The office is open.")
}

// a chain of OR || returns the first truthy value or the last one if no truthy value is found.

console.log(1 || 0) //1 is truthy
console.log(null || 1) //1 is the first truthy value
console.log(null || 0 || 1) //1 is the first truthy value
console.log(null || undefined || 0) //0, all falsy, returns the last value.

//&& AND

console.log(true && true) //true
console.log(true && false) //false
console.log(false && true) //false
console.log(false && false) //false

hour = 12
let minute = 30

if (hour == 12 && minute == 30) {
    console.log("It's time to go home!")
}

if (1 && 0) {
    console.log("This statement won't be printed.")
} else {
    console.log("This one, however, will.")
}

//AND returns the first falsy value or the last value if none were found.

/*
The rules above are similar to OR. 
The difference is that AND returns the first falsy value while OR returns the first truthy one.
*/

console.log(1 && 0) //0, is falsy
console.log(null && 1) //null, is falsy
console.log(null && 0 && 1) //null, is the first falsy
console.log(null && undefined && 0) //null, all falsy, returns first one.
console.log(1 && "1" && true && undefined && false) //undefined is first falsy value.
console.log(1 && "1" && true) //when all values true, returns the last one

//Precedence of && is higher than ||

//! NOT

/*
Converts the operand to boolean type: true/false.
Returns the inverse value.
*/

console.log(!true) //false
console.log(!0) //true

//Double NOT is used to convert a value to a boolean type.

console.log(!!"non-empty string!") //true
console.log(!!null) //false

/*
That is, the first NOT converts the value to boolean and returns the inverse,
 and the second NOT inverses it again. In the end, we have a plain value-to-boolean conversion.
*/