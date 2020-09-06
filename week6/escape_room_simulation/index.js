const readlineSync = require("readline-sync");

let isAlive = true;
let hasKey = false;


const userName= readlineSync.question("What shall we call you?: ");

const intro = (`Welcome ${userName}! You have chosen to play our Escape Room Simulation. Lets get started.`);
    console.log(intro);

    
while (isAlive == true){

    const menuOptions = readlineSync.keyIn(" Enter a number from the options below: \n 1. Put hand in hole \n 2. Find the key, or \n 3. Open the door \n Enter your selection: ", {limit: `$<1-3>`});

    if (menuOptions == 1){
        console.log (`Ouch! ${userName} was bitten by a poisonous viper, the venom sets in and you are dead. GAME OVER!`);
        isAlive = false;
    }
    else if (menuOptions == 2 && hasKey == false) {
        console.log (`Great job ${userName}! You found the key!`);
        hasKey = true;
    }
    else if (menuOptions == 2 && hasKey == true) {
        console.log (`You already have the key? ${userName}, why not try to open that fancy door?`);
       
    }
    else if (menuOptions == 3 && hasKey == false) {
        console.log (`${userName} the door is still locked, you need the key!`);
        
    }
    else if (menuOptions == 3 && hasKey == true) {
        console.log (`CONGRATULATIONS! ${userName}, you have successfully passed the most difficult test EVER and opened the door to freedom!`);
        isAlive = false;
    }   

};