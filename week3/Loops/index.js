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
function theirAge() {
    for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) 
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
            console.log("is old enough");
        } 
        else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18) { 
            console.log("is not old enough")
        }
    }
 theirAge();