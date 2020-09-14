const readlineSync = require(`readline-sync`);

let zombies = [`Zombie`, `Police Zombie`, `Military Zombie`, `Zombie Runner`];
let approachingZombie = zombies[Math.floor(Math.random() * zombies.length)];
let zombieAttack = Math.floor(Math.random() * 30);
let rewards = [
  "Pocket knife",
  "Pistol",
  "Body armor",
  "Medkit",
  "Rations",
  "Bottled water",
];

let inventory = [];
let pickUp = rewards[Math.floor(Math.random() * rewards.length)];

const playerAttack = Math.floor(Math.random() * 50);
let playerHealth = 100;
const playerOptions = [`Walk`, `Inventory`, `Exit`];

let player = readlineSync.question(`Enter name to begin game: `);
console.log(`\n\nWelcome ${player}! You have chosen to play my zombie RPG. 
The goal is to travel through the infected city and reach the docks 
without letting yourself succumb to the dead. Lets get started!`);

const zombieRpg = () => {
  const option = readlineSync.keyInSelect(
    playerOptions,
    `Alright, what would you like to do?\n`
  );
  let zombieHealth = 100;
  if (playerOptions[option] == `Exit`) {
    return (playerHealth = 0);
  } else if (playerOptions[option] == `Inventory`) {
    console.log(`\n${player}'s Health:${playerHealth} \nInventory: ${inventory} `);
  } else if (playerOptions[option] == `Walk`) {
    let key = Math.random();
    if (key <= 0.25) {
      console.log(`Everything looks clear.`);
    } else if (key >= 0.25) {
      console.log(`${approachingZombie}! RAAAAUUUUGHHHH!\n`);

      while (zombieHealth > 0 && playerHealth > 0) {
        const runOrAttack = readlineSync.question(
          `${player}, do you want to run (r) or do you want to attack (a)?\n `
        );

        switch (runOrAttack) {
          case "r":
            const runForIt = Math.random();
            if (runForIt < 0.5) {
              console.log(
                `You escaped, however ${approachingZombie} hit you for ${zombieAttack} attack points\n`
              );
            } else {
              zombieHealth = 0;
              console.log(`Look like you out-ran him!\n`);
              break;
            }
          case "a":
            zombieHealth -= playerAttack;
            console.log(
              `You attacked ${approachingZombie} with ${playerAttack} attack points. `
            );

            playerHealth -= zombieAttack;
            console.log(
              `${approachingZombie} just hit you with ${zombieAttack} attack points. `
            );

            if (zombieHealth <= 0) {
              console.log(
                `You defeated ${approachingZombie} it dropped ${pickUp}. `
              );
              let enemyDrop = Math.floor(Math.random());
              if (enemyDrop <= 1) {
                inventory.push(pickUp);
              }
            } else if (playerHealth <= 0) {
              console.log(`You have both fallen in battle. GAME OVER!`);
            }
        }
      }
    }
  }
};

while (playerHealth > 0) {
  healthRestore = function () {
    playerActive = true;
  };
  healthRestore();
  zombieRpg();
}
