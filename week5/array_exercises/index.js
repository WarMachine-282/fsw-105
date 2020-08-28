//Section A. Use the built-in array method .filter() to solve all of these problems:

//1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let result = array.filter( array => array >= 5);
    console.log(result);

//2) Given an array of numbers, return a new array that only includes the even numbers.
    let result2 = array.filter( array => array % 2 === 0);
    console.log(result2);

    //extra credit:

// *Make a filtered list of all the people who are old enough to see The Matrix (17+).*
    function ofAge(arr){ 
    return arr.filter(person => person.age >= 17);
}
    console.log(ofAge([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jone", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Angelina Jolie", age: 16 },
    { name: "Angelina Jolie", age: 100 },
]));

//   Section B. Use the built-in .map() method on arrays to solve all of these problems:

//  1) Make an array of numbers that are doubles of the first array.
    let response = array.map(array => array * 2);
    console.log(response);

//2) Take an array of numbers and make them strings.
    const str = array.map(array => array.toString());
    console.log(str);

//3) Capitalize each of an array of names.
    const names = ["John", "Jacob", "Jingleheimer", "Schmidt"]
    const str2 = names.map(names => names.toUpperCase());
    console.log(str2);

//Section C. Use the built-in .reduce() method on arrays to solve all of these problems:

// 1) Turn an array of numbers into a total of all the numbers.   
    let result3 = (accumulator, currentValue) => accumulator + currentValue;
    console.log(array.reduce(result3));

// 2) Turn an array of numbers into a long string of all those numbers.
    const stringConcat = array => {
    return array.reduce((final, stringNum) => {
        final += stringNum;
        return final;
    }, "");
}
    console.log(stringConcat([1, 2, 3]));

// 3) Turn an array of voter objects into a count of how many people voted.
    const voters = [
    {name:'Bob', age: 30, voted: true}, {name:'Jake', age: 32, voted: true}, {name:'Kate', age: 25, voted: false},
    {name:'Sam', age: 20, voted: false}, {name:'Phil', age: 21, voted: true}, {name:'Ed', age: 55, voted: true},
    {name:'Tami', age: 54, voted: true}, {name:'Mary', age: 31, voted: false}, {name:'Becky', age: 43, voted: false}, 
    {name:'Joey', age: 41, voted: true}, {name:'Jeff', age: 30, voted: true}, {name:'Zack', age: 19, voted: false}
]
    const voteCount = voters.reduce(function(final, voters){
    if(voters.voted){
        final++
    }
    return final
}, 0);

    console.log(voteCount);

//Section D. Use the built-in .sort() method on arrays to solve all of these problems:

// 1) Sort an array from smallest number to largest.
function leastToGreatest(array){ 
    return array.sort(function(a, b){
        return a - b
    })
}
    console.log(leastToGreatest([5, 2, 3, 4]));
  
// 2) Sort an array from largest number to smallest.
function greatestToLeast(array){ 
    return array.sort(function(a, b){
        return b - a
    });
}
    console.log(greatestToLeast([5, 2, 3, 4]));

// 3) Sort an array from shortest string to longest.
const vader = ["I", "find", "your", "lack", "of", "faith", "disturbing"]
function lengthSort(vader){ 
    return vader.sort(function(a, b){
        return a.length - b.length
    });
}
    console.log(lengthSort(vader));

   // *Extra Credit) Sort an array alphabetically*

   function alphSort(vader){ 
       return vader.sort();
}
    console.log(alphSort(vader));