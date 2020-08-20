var readlineSync = require('readline-sync');
var firstNum = readlineSync.questionInt("Please enter the first number: ");
var secondNum = readlineSync.questionInt("Please enter the second number: ");
var enteredOperator = readlineSync.question("What operation would you like to perform? add/sub/mul/div/quit: ");

function addTwoNumbers(num1, num2){
    return " Adding Number1: " + num1 + " with Number2 " + num2 + " Results in: " + (num1 + num2);
}
function subtractTwoNumbers(num1, num2){
    return " Subtracting Number1: " + num1 + " and Number2 " + num2 + " Results in: " + (num1 - num2);
}
function multiplyTwoNumbers(num1, num2){
    return " Multiplying Number1: " + num1 + " and Number2 " + num2 + " Results in: " + (num1 *  num2);
}
function divideTwoNumbers(num1, num2){
    return " Dividing Number1: " + num1 + " and Number2 " + num2 + " Results in: " + (num1 /  num2);
}
if (enteredOperator == "add"){
    console.log(addTwoNumbers(firstNum, secondNum));
} else if (enteredOperator == "sub"){
    console.log(subtractTwoNumbers(firstNum, secondNum));
} else if (enteredOperator == "mul"){
    console.log(multiplyTwoNumbers(firstNum, secondNum));
} else if (enteredOperator == "div"){
    console.log(divideTwoNumbers(firstNum, secondNum));
} else if (enteredOperator == "quit"){
    console.log("Thank you for using my Javascript Calculator Program");
}