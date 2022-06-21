//Variables in JavaScript

/*
A variable is a “named storage” for data. We can use variables to store goodies, 
visitors, and other data.
*/

let message;  //creates variable "message"

message = "Hello!"; //assigns string value to the variable, = is the assignment operator.

alert(message) //shows the variable

//We can also combine the variable declaration and assignment into one line

let message2 = "Hello to you too!"

alert(message2)

//We can also assign multiple variables on the same line.

let user = "Aarnav", age = "16", message3 = "Hey!";

/*
Older scripts may use var instead of let. They are slightly different, 
but those differences will be touched on later.
*/

//We can change a variable's value.

let varOne;

varOne = "Hey!";

varOne = "Hello!";

alert(varOne)

//We can copy the value of one variable to another.

let varThree, copyVar;

varThree = "Three";
copyVar = varThree;

alert(varThree);
alert(copyVar);

//Declaring variables twice (using let) gives an error.

//Variable naming conventions

/*
There are two limitations on variable names in JavaScript:

1) The name must contain only letters, digits, or the symbols $ and _.
2) The first character must not be a digit.
*/

let userName;
let test123; 

//These are valid.

//As said before, $ and _ are also valid.

let $ = 1;
let _ = 2;

alert($ + _);

//Variable names cannot start with digits. Hyphens aren't allowed.
//Variables are case sensitive.

//Reserved names cannot be used. 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords

//Constants

//To declare a const, use "const" instead of "let"

const myName = "Aarnav S."

//Constants are constant. They cannot be reassigned values.


//Uppercase Constants

/*
There is a widespread practice to use constants as aliases for difficult-to-remember 
values that are known prior to execution.

Such constants are named using capital letters and underscores.
*/

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

let color = COLOR_ORANGE;
alert(color); // #FF7F00

/*
Being a “constant” just means that a variable’s value never changes. But there are constants
 that are known prior to execution (like a hexadecimal value for red) and there are constants 
 that are calculated in run-time, during the execution, but do not change after their initial 
 assignment.
*/

const pageLoadTime = 5;

/*
The value of pageLoadTime is not known prior to the page load, so it’s named normally. 
But it’s still a constant because it doesn’t change after assignment.

In other words, capital-named constants are only used as aliases for “hard-coded” values.
*/

//Variable Naming Conventions

/*
Some good-to-follow rules are:

Use human-readable names like userName or shoppingCart.

Stay away from abbreviations or short names like a, b, c, unless 
you really know what you’re doing.

Make names maximally descriptive and concise. Examples of bad names 
are data and value. Such names say nothing. It’s only okay to use them 
if the context of the code makes it exceptionally obvious which data or value the variable is referencing.
Agree on terms within your team and in your own mind. If a site visitor is called a “user” then we should name related variables currentUser or newUser instead of currentVisitor or newManInTown.
*/

/*
Summary

We can declare variables to store data by using the var, let, or const keywords.

let – is a modern variable declaration.
var – is an old-school variable declaration. Normally we don’t use it at all, but we’ll cover subtle differences from let in the chapter The old "var", just in case you need them.
const – is like let, but the value of the variable can’t be changed.

Variables should be named in a way that allows us to easily understand what’s inside them.
*/

