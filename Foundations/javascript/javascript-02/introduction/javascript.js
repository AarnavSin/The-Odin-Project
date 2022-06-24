//Datatypes in JavaScript - Overview

let message = "Hello"
message = 123456

/*
This is valid JavaScript. A variable can be assigned any data type, 
and that data type and value can change to anything.
*/

//Numbers

//The number type represents both integers and floats.
//Operators such as *, +, -, / can be applied to numbers.
/*Besides regular numbers, there are three abstract ones that belong to the category:
    - Infinity
    - -Infinity
    - NaN
*/
//Infinity represents the mathematical infinity. It is a special value that is greater than others.

console.log(1 / 0) //returns Infinity
console.log(Infinity) //can also be used directly to return Infinity

//NaN (Not a Number) represents a computational error.
//It is a result of an incorrect or an undefined mathematical operation, for instance:

console.log("not a number" / 5) //returns NaN as it is an invalid operation.

//NaN is sticky. Any further mathematical operation on NaN returns NaN:

console.log(NaN + 1) // returns NaN
console.log(3 * NaN) // returns NaN
console.log("not a number" / 2 - 1) // returns NaN

/*
So, if there’s a NaN somewhere in a mathematical expression, 
it propagates to the whole result (there’s only one exception to that: NaN ** 0 is 1).
*/

//BigInt

/*
BigInt is used to represent numbers greater than 2^53-1 = 9007199254740991 or
less than -(2^53-1) for negatives, since numbers cannot support integers larger 
than this.
*/

//A BigInt value is created by appending n to the end of an integer:

const bigInt = 1234567890123456789012345678901234567890n; //appending n to the end is important.

//String

//A string must be surrounded by quotes.

let strOne = "Hello"
let strTwo = 'Hello again.'
let strThree = `Hello, hello, ${strOne}`

//Double quotes and single quotes work the same.
/*
Backticks are used as extended funcionality quotes. 
You can embed variables or expressions into a string using them.
*/

let userName = "Aarnav"
console.log(`Hello, ${userName}!`)
console.log(`1 + 1 = ${1 + 1}`)

/*
The expression inside ${…} is evaluated and the result becomes a part of the string. 
We can put anything in there: a variable like name or an arithmetical expression like 1 + 2 
or something more complex.
*/

//Booleans are the logical type of data. They can only be true or false.

let nameFieldCheck = true; //name field is checked
let ageFieldChecl = false; //name field is not checked

//Comparisons also return boolean values.

let isGreater = 5 > 6
console.log(isGreater) //false
isGreater = 6 > 5
console.log(isGreater) //true

//null value

//The special null value does not belong to any of the types described above.

let age = null

//This means that the age is unknown. null is used to signify emptiness/nothing/unknown values.

//undefined value

//The special value undefined also stands apart. It makes a type of its own, just like null.
//The meaning of undefined is “value is not assigned”.
//If a variable is declared, but not assigned, then its value is undefined:

let unDefVar
console.log(unDefVar) //returns undefined

//Technically, it is possible to explicitly assign undefined to a variable:

let defVar = 16
console.log(defVar)
defVar = undefined
console.log(defVar)

/*
It is not recommeneded though. Normally, one uses null to assign an “empty” or “unknown” 
value to a variable, while undefined is reserved as a default initial value for unassigned things.
*/

/*
The object type is special.

All other types are called “primitive” because their values can contain only a single thing 
(be it a string or a number or whatever). In contrast, objects are used to store collections of 
data and more complex entities.

The symbol type is used to create unique identifiers for objects.
*/

//typeof operator

//It is used to return the type of a value.

console.log(typeof undefined)
console.log(typeof 0)
console.log(typeof 10n)
console.log(typeof Math) //Math is a built in object for mathematical operations
console.log(typeof null) //null returns object. That’s an officially recognized error in typeof, coming from very early days of JavaScript and kept for compatibility. 
console.log(typeof alert) //alert comes under functions, but functions come under objects. There is no seperate type for functions, yet typeof treats them differently.

//Sumarry

/*
There are 8 basic data types in JavaScript.

Seven primitive data types:
number for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
bigint for integer numbers of arbitrary length.
string for strings. A string may have zero or more characters, there’s no separate single-character type.
boolean for true/false.
null for unknown values – a standalone type that has a single value null.
undefined for unassigned values – a standalone type that has a single value undefined.
symbol for unique identifiers.
And one non-primitive data type:
object for more complex data structures.
The typeof operator allows us to see which type is stored in a variable.

Usually used as typeof x, but typeof(x) is also possible.
Returns a string with the name of the type, like "string".
For null returns "object" – this is an error in the language, it’s not actually an object.
In the next chapters, we’ll concentrate on primitive values and once we’re familiar with them, we’ll move on to objects.
*/