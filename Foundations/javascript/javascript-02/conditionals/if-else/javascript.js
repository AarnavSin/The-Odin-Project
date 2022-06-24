//If Else Else If

/*
Use if to specify a block of code to be executed, if a specified condition is true
Use else to specify a block of code to be executed, if the same condition is false
Use else if to specify a new condition to test, if the first condition is false
Use switch to specify many alternative blocks of code to be executed
*/

//If
let condition = 5 > 2

if (condition) {
    console.log("That is true.")
}

//If Else
let conditionTwo = 4 > 2

if (conditionTwo == condition) {
    console.log("Turns out, both of them are true!")
} else {
    console.log("Welp, false.")
}

//Else If
let conditionThree = 3 > 5

if (condition == conditionThree) {
    console.log("All of them are true!")
} else if (conditionTwo == conditionThree ) {
    console.log("I don't know.")
} else {
    console.log("YES!")
}

