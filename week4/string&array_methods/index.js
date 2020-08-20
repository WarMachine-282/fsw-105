// Strings #1: Make a function that will return any given string into all caps followed by the same string all lowercase.
function capitalizedAndLowercase(str) {
    var upperAndLower = str.toUpperCase() + str.toLowerCase();
    return "Your Output is:" + upperAndLower;
}
    console.log(capitalizedAndLowercase("Hello"));
    console.log(capitalizedAndLowercase("HelloHowAreYou"));

// Strings #2: Make a function that returns a number half the length, and rounded down. You'll need to use Math.floor().
function findMiddleIndex(str) {
    var middleOfString = Math.floor(str.length / 2);
    return "Rounded down output will be" + middleOfString;   
}
    console.log(findMiddleIndex("Hello"));
    console.log(findMiddleIndex("Hello World"));

// Strings #3: Make a function that uses slice() and the other functions you've written to return the first half of the string.
function firstHalf(str) {
    var half = str.slice(0, str.length / 2);
    return half;
}
    console.log(firstHalf("Hello World"));

 // Strings #4: Make a function that takes a string and returns that string where the first half is capitalized, and the second half is lower cased. 
 //   (If the string length is odd, capitalize the shorter of the first half.)

function halfUpperHalfLower(str) {
    var halfOne = str.toUpperCase().slice(0, str.length / 2);
    var halfTwo = str.toLowerCase().slice(str.length / 2);
    return(halfOne + halfTwo);
}
    console.log(halfUpperHalfLower("Hello World"));



var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

function arrayExercises() {
    //Arrays #1: Remove the last item from the vegetable array.
    vegetables.pop();

    //Arrays #2: Remove the first item from the fruit array.
    fruit.shift();

    //Arrays #3: Find the index of "orange."
    var findIndex = fruit.indexOf('orange');

    //Arrays #4: Add that number to the end of the fruit array.
    fruit.push(1);

    //Arrays #5: Use the length property to find the length of the vegetable array.
    vegetables.length;

    //Array #6: Add that number to the end of the vegetable array.
    vegetables.push(3);

    //Array #7: Put the two arrays together into one array. Fruit first. Call the new Array "food".
    var food = fruit.concat(vegetables);

    //Array #8: Remove 2 elements from your new array starting at index 4 with one method.
    food.splice(4, 2);

    //Array #9: Reverse your array.
    food.reverse();

    //Array #10: Turn the array into a string and return it.
    var Str = food.toString();
    console.log(Str);
}
console.log(arrayExercises());
