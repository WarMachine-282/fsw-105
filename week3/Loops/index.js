var peopleWhoWantToSeeMadMaxFuryRoad =[
    {
        name: "Mike",
        age: 12,
        gender: "male"
    },{
        name: "Madeline",
        age: 80,
        gender: "female"
    },{
        name: "Cheryl",
        age: 22,
        gender: "female"
    },{
        name: "Sam",
        age: 30,
        gender: "male"
    },{
        name: "Suzy",
        age: 4,
        gender: "female"
    }
];

// 1.)Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if they aren't 18.

function isOldEnough(){
    for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){ 
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
            console.log("is old enough to see Mad Max");
        } 
        else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18) { 
            console.log("is not old enough to see Mad Max")
        }
    }
};
isOldEnough();

// 2.) Personalized message.

 function isOldEnoughWithName() {
    for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){ 
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " " + "is old enough to see Mad Max");
        } 
        else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18) { 
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " " + "is not old enough to see Mad Max")
        }
    }
};
isOldEnoughWithName();

// 3.) Personalized message with gender.

function nameAgeGender() {
    
}
for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
        if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max, let him in.");
        } else if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female") {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max, let her in.");
        }
        } else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18) {
        if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max, don't let him in.");
        } else if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female") {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max, don't let her in.");
        }
    }
};
nameAgeGender();

//4.) Create a for loop that iterates through 101 numbers (from 0 - 100).
// If the current iteration is an Odd number, print "Odd" to the console, otherwise print "Even".

for(i = 0; i <= 100; i++) {
    if(i % 2 == 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
}

// *Extra Credit*

var myLightSwitch = [
    [1, 3, 4, 6],
    [8, 7, 3, 2],
    [5, 9, 3, 7]
]

for(var i = 0; i < myLightSwitch.length; i++){
    for(var j = 0; j < myLightSwitch[i].length; j++){
        console.log( myLightSwitch[i][j] )
        if(i % 2 == 0) {
            console.log("The light is on");
        } else {
            console.log("The light is off");
        }
    }
}                     


