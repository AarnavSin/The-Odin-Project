//Add 2 numbers together!
console.log(50 + 20);

//Add a sequence of 6 different numbers together.
console.log(1 + 2 + 3 + 4 + 5 +6);

//Print the solution to the following equation: (4 + 6 + 9) / 77
let eq = (4+ 6 + 9) / 77
console.log(eq);

//Bonus
console.log(eq.toFixed(5))

//Type the following at the top of the script tag: let a = 10

let a = 10;

//In the console console.log(a) should print 10
console.log(a)

//Try the following: 9 * a
console.log(9 * a)

//and this: let b = 7 * a (returns undefined *) and then console.log(b)
let b = 7 * a;
console.log(b)

/*
Declare a constant variable max with the value 57
Set another variable actual to max - 13
Set another variable percentage to actual / max
If you type percentage in the console and press enter you should see a value like 0.7719
*/

const max = 57;
let actual = max - 13;
let percentage = actual / max;
console.log(percentage)
console.log(percentage.toFixed(4))


//Note
/*
let b = 7 * a returns undefined and so you cannot 
declare and assign a value to a variable and read its value in the 
same line.
*/