//1.) Replace all the vars with let and const. Alter the code however necessary to make sure this continues to work
// (so the pet's name isn't "John", but instead "spot" is returned). You only need to delete var and insert let and const.
// John is the pet owner, and his name should be stored differently than the other names.

const name = "John";
const age = 101;

function runForLoop(pets) {
  let petObjects = [];
  for (let i = 0; i < pets.length; i++) {
    const pet = { type: pets[i] };
    let name;
    if (pets[i] === "cat") {
      name = "fluffy";
    } else {
      name = "spot";
    }
    console.log("pet name: ", name);
    pet.name = name;
    petObjects.push(pet);
  }
  console.log("man name: ", name);
  return petObjects;
}

runForLoop(["cat", "dog"]);

//2.) Re-write this .map() using an arrow function:
// Be aware that if JavaScript sees a { directly after the => it will think it's starting a function,
// and not starting an object, so the : will be an unexpected symbol.

const carrots = ["bright orange", "ripe", "rotten"];

mapVegetables = arr => {
  return arr.map(function(carrot) {
    return { type: "carrot", name: carrot };
  });
}
console.log(mapVegetables([carrots]));

//3.) Re-write this .filter() using an arrow function:

const people = [
  {
    name: "Princess Peach",
    friendly: false,
  },
  {
    name: "Luigi",
    friendly: true,
  },
  {
    name: "Mario",
    friendly: true,
  },
  {
    name: "Bowser",
    friendly: false,
  },
];

function filterForFriendly(arr) {
  return arr.filter((person) => person.friendly);
}
console.log(filterForFriendly(people));

//4.) Re-write the following functions to be arrow functions:

const doMathSum = (a, b) => {
  return a + b;
};

console.log(doMathSum(2, 2));

const produceProduct = (a, b) => {
  return a * b;
};
console.log(produceProduct(4, 4));

//5.) Write a printString function that takes firstName, lastName,
// and age as parameters and returns a string like the following: Hi Kat Stark, how does it feel to be 40?

printString = (firstname ="Jane", lastname = "Doe", age = 100) => {
    console.log("Hi " + firstname + " " + lastname + ", how does it feel to be " + age + "?" );
}
printString("Kat", "Stark", "40");

//6.) Use template literals to build the string from #5

printString = (firstName = "Jane", lastName = "Doe", age = 100) => {
    console.log(`Hi ${firstName} ${lastName}, how does it feel to be ${age}?`);
}
printString("Kat", "Stark", 40);

//7.) Use the shorthand syntax to make the following filter take up one line. Copy and paste the array to test it.
