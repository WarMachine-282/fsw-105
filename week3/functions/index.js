//1.) Write a function that accepts two numbers as parameters, and returns the sum.

function add(a, b) {
  return a + b;
}
var result = add(3, 6);
console.log(result);

//2.) Write a function that accepts three numbers as parameters, and returns the largest of those numbers.

function largestNum(num1, num2, num3) {
  return Math.max(num1, num2, num3);
}
console.log(largestNum(1, 2, 3));

//3.) Write a function that accepts one number as a parameter, and returns whether that number is even or odd.
//(Return the string "even" or "odd");

function oddOrEven(number) {
  return number % 2 ? "odd" : "even";
}
  console.log(oddOrEven(5));

//4.) Write a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty characters long,
//return the string concatenated with itself (string + string). If the string is more than twenty characters long, return the first half of the string.

function doSomething(str) {
  if (str.length <= 20) {
    return str + str;
  } else if (str.length > 20) {
    return str.slice(0, str.length / 2);
  }
}
  console.log(doSomething("Bam!"));
  console.log(doSomething("Flintstones, meet the Flintstones, they're the modern Stone Age family"));

//*Extra credit*
//5.) Write a function that accepts a number ‘n’ as a parameter. Then print the first ‘n’ Fibonacci numbers and return their sum.

// var fibonacciSequence = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

function fibonacciSequence(n) {
  var name = [0, 1]
  for (var i = 0; i < n - 1; i++){
    console.log( name[name.length - 1] , "name[name.length - 1] ")
    console.log( name[name.length - 2] , "name[name.length - 2]")
    console.log( name[name.length - 1 ] + name[name.length - 2 ], "name[name.length - 1 ] + name[name.length - 2 ]")
    name.push(name[name.length - 1 ] + name[name.length - 2 ])
    console.log(name)
  }
  var total = 0
  for (var e = 0; e < name.length; e++){
    console.log(name[e])
    total = total + name[e]
    console.log(total, "total")
  }
}
fibonacciSequence(6)
// *EXTRA CREDIT INCOMPLETE*