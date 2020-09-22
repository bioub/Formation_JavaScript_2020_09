const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function jouer() {
  rl.question('Quel est le nombre entier ? ', (answer) => {
    console.log('Vous avez saisi : ' + answer);
    // rejouer
    jouer();

    // si j'ai gagné :
    // rl.close();
  });
}

jouer();
