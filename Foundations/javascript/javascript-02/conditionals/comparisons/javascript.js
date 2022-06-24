//Comparisons

/*
Greater/less than: a > b, a < b.
Greater/less than or equals: a >= b, a <= b.
Equals: a == b, please note the double equality sign == means the equality test, 
while a single one a = b means an assignment.
Not equals: In maths the notation is ≠, but in JavaScript it’s written as a != b
*/

//All comparions return a boolean value.

console.log(2 > 1) //true
console.log(1 > 2) //false
console.log(2 == 1) //false
console.log(2 != 1) //true

//comparisons can be assigned to variables.

let compVar = 5 != 10
console.log(compVar)

//To compare strings

//Strings are compared in the dictionary/lexographical order, means they are comapred letter by letter.

console.log("Z" > "A") //true
console.log("Glow" > "Glee") //true
console.log("Bee" > "Be") //true
console.log("Bee" > "Beef") //false

/*
Algorithm:

Compare the first character of both strings.
If the first character from the first string is greater (or less) than the other string’s, then the first string is greater (or less) than the second. We’re done.
Otherwise, if both strings’ first characters are the same, compare the second characters the same way.
Repeat until the end of either string.
If both strings end at the same length, then they are equal. Otherwise, the longer string is greater.
*/

//Follows unicode order.

//Automatic value conversion

console.log(5 > "1") //true, converts "1" to a number
console.log("01" == 1) //true, converts "01" to a number

//Strict equality

console.log(0 == false) //true
console.log("0" == false) //true

//It returns true due to automatic type conversion. To compare without any form of type conversion:

console.log(0 === false) //false
console.log("0" === false) //false
console.log(false === false) //true

/*
In other words, if a and b are of different types, 
then a === b immediately returns false without an attempt to convert them.
*/

//null undefined

console.log(null === undefined) //false, different types
console.log(null == undefined) //true, they equal each other in sense of == but not any other value.

//Extra

console.log(null > 0) //false
console.log(null == 0) //false
console.log(null >= 0) //true

/*
The reason is that an equality check == and comparisons > < >= <= work differently. 
Comparisons convert null to a number, treating it as 0. 
That’s why (3) null >= 0 is true and (1) null > 0 is false.

On the other hand, the equality check == for undefined and null is defined such that, 
without any conversions, they equal each other and don’t equal anything else. 
That’s why (2) null == 0 is false.
*/

console.log(undefined > 0) //false
console.log(undefined == 0) //false
console.log(undefined >= 0) //false

/*
Comparisons (1) and (2) return false because undefined 
gets converted to NaN and NaN is a special numeric value which returns false for all comparisons.
The equality check (3) returns false because undefined 
only equals null, undefined, and no other value.
*/

//Tips

//Treat any comparison with undefined/null except the strict equality === with exceptional care.
/*
Don’t use comparisons >= > < <= with a variable which may be null/undefined, 
unless you’re really sure of what you’re doing. If a variable can have these values, 
check for them separately.
*/

//Summary

/*
Comparison operators return a boolean value.
Strings are compared letter-by-letter in the “dictionary” order.
When values of different types are compared, they get converted to 
numbers (with the exclusion of a strict equality check).
The values null and undefined equal == each other and do not equal any other value.
Be careful when using comparisons like > or < with variables that can occasionally be null/undefined. 
Checking for null/undefined separately is a good idea.
*/

//javascript.info tasks

/*
true
false
true
true
false
false
false
*/