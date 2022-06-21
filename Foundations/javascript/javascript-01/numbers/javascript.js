//Numbers in JavaScript

//JavaScript only has one data type for numbers, both integers and decimals — Number.

const myInt = 15;
const myFloat = 15.5;
myInt;
myFloat;

console.log(typeof myInt); //Checks for data type.
console.log(typeof myFloat); //Checks for data type.

//Useful Number Methods

//toFixed()

const decimalNumber = 1.24253464635252223425;
console.log(decimalNumber)
const roundedDecNumber = decimalNumber.toFixed(2)
console.log(roundedDecNumber)

//Number()

let numberOne = '56';
numberOne += 50;
console.log(numberOne)

/*This gives us 5650 as 56 is a string. To convert 56 to a decimal, we must convert it using the 
 Number() function.
*/

let numberTwo = '56';
numberTwo = Number(numberTwo) + 50;
console.log(numberTwo)

/* 

Arithmetic Operators in JS

+ ~ Addition
- ~ Subtraction
* ~ Multiplication
/ ~ Division
% ~ Remainder/Modulo
** ~ Exponent

*/

//Numbers involved in arithmetic operations are referred to as operands.

//Numbers Practice

//Basic Arithmetic
console.log(10 + 7);
console.log(9 * 8);
console.log(60 % 3);


//Arithmetic using variables/constants
const numOne = 10;
const numTwo = 50;

console.log(numOne * 9);
console.log(numOne ** 3);
console.log(numTwo / numOne);

//Complex expressions

console.log(5 + 10 *  3);
console.log(numTwo % 9 * numOne);
console.log(numTwo + numOne / 8 + 2);

//Operator Precedence = BODMAS. BODMAS applies to arithmetic in computers.

//To override operator precedence, use parentheses.

console.log((numTwo + numOne) / (8 + 2));

//Increment and decrement operators

//You can only increment/decrement existing variables.

let incDecVar = 10;
console.log(incDecVar++)
console.log(incDecVar)

//The increment or decrement shows only on the lines AFTER the increment/decrement.

console.log(incDecVar--)
console.log(incDecVar)

/*
Putting the ++ or -- before the variable name makes it return the incremented or decremented value on the
same line.
*/

console.log(++incDecVar)
console.log(incDecVar)

console.log(--incDecVar)
console.log(incDecVar)

//Assignment Operators

/*

= ~ General variable assignment.
+= ~ Adds the value on the right to the variable value on the left, 
    then returns the new variable value.
-= ~ Subtracts the value on the right from the variable value on the left, 
    and returns the new variable value.
*= ~ Multiplies the value on the left by the variable value on the right, 
    and returns the new variable value.
/= ~ Divides the value on the left by the variable value on the right, 
    and returns the new variable value.

*/

let x = 5; //x contains 5
let y = 10; //y contains 10

x *= y; //Multiplies x by y, changes x value to the product
console.log(x)

x += y; //Adds y to x, changes x value to the sum
console.log(x)

x -= y; //Subtracts y from x, changes x value to the number
console.log(x)

x /= y; //Divides x by y, changes x value to the quotient
console.log(x)

