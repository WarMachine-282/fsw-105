// Preliminary
var strCat = "cat"
var strDog = "dog"
// 1.) Write an if statement that prints "is greater than" if 5 is greater than 3.

if (5 > 3) {
  console.log("Is greater than");
} else
  console.log("Is not greater than")
// ternary form
5 > 3 ? console.log("Is greater than") : console.log("Is not greater than")
// 2.) Write an if statement that prints "is the length" if the length of "cat" is 3.

if (strCat.length == 3)
    console.log("Is the length");
else 
    console.log("Is not equal")

// ternary form
strCat.length == 3 ? console.log("Is the length") : console.log("Is not equal")

// 3.) Write an if/else statement that checks if "cat" is equal to "dog" and prints, "not the same" when they are not equal.

if (strCat === strDog) {
    console.log("Is the same");
} else
    console.log("Not the same");

// ternary form
(strCat === strDog) ? console.log("Is the same") : console.log("Not the same")

// Bronze Medal

// 1.) Using the below object, write an if statement that prints <theNameOfThePersonInObject> is allowed to go to the movie if they are old enough (18 or older), and the opposite if they are not older than 18.

var person = {
  name: "Bobby",
  age: 12,
};
if (person.age >= 18) {
  console.log("Is allowed to go to movies");
} else {
  console.log("Is not allowed to go to movies");
}
// ternary form
(person.age >= 18) ? console.log("Is allowed to go to movies") : console.log("Is not allowed to go to movies")

// 2.) Using that same object, only allow them into the movie if their name starts with "B".

if (person.name.charAt(0) === "B") {
  console.log("Is allowed to go to movies");
} else {
  console.log("Is not allowed to go to movies");
}
// ternary form
(person.name.charAt(0) === "B") ? console.log("Is allowed to go to movies") : console.log("Is not allowed to go to movies")

// 3.) Using that same object, only allow them into the movie if their name starts with "B" and they are older than 18.

if (person.name.charAt(0) === "B" && person.age >= 18) {
  console.log("Is allowed to go to movies");
} else {
  console.log("Is not allowed to go to movies");
}
// ternary form
person.name.charAt(0) === "B" && person.age >= 18 ? console.log("Is allowed to go to movies") : console.log("Is not allowed to go to movies")

// Silver Medal
// 1.)Write an if/else if/else statement that prints "strict" if 1 strictly equals "1", prints "loose" or "abstract" if 1 equals "1" without type checking, and prints "not equal at all" if it doesn't print the other stuff.

var one = 1;
if (one === 1) {
  console.log("Strict");
} else if (one === "1") {
  console.log("Abstract");
} else {
  console.log("Not equal at all");
}
// ternary form
  one === 1 ? console.log("Strict")
: one === "1" ? console.log("Abstract")
: console.log("Not equal at all")

// 2.) Write an if statement that prints "yes" if 1 is less than or equal to 2 AND (&&) 2 is equal to 4.
if (1 <= 2 && 2 === 4) {
  console.log("Yes");
} else {
  console.log("No");
}
// ternary form
(1 <= 2 && 2 === 4) ? console.log("Yes") : console.log("No");

// Gold Medal

// 1.) Write an if statement that checks to see if "dog" is a string.

var string = "dog"
if(string.match(strDog))
    console.log("Is a string")
else 
    console.log("Is not a string")
// ternary form
string.match(strDog) ? console.log("Is a string") : console.log("Is not a string");

// 2.)Write an if statement that checks to see if "true" is a boolean.

var boolean = true;
if(typeof boolean === "boolean")
    console.log("true")
else
    console.log("false")
// ternary form
typeof boolean === "boolean" ? console.log("true") : console.log("false")

// 3.) Write an if statement that checks to see if a variable has been defined or not.


















// function add(a, b) {
//   console.log(a + b);
// }

// add(3, 6);

// add(5);

// add("bob", " hi");

// add("bob", 2);

// if, if else in one ternary below
// string.match(strDog) ? console.log("Is a string") 
// // : 5 > 2 ? console.log("five is greater than two")
// : console.log("Is not a string");