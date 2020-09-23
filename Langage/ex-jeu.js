function getRandom() {
  return Math.random();
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const readline = require('readline');

function jouer() {
  if (essais.length) {
    console.log('Vous avez déjà joué : ' + essais.join(' - '));
  }

  rl.question('Quel est le nombre entier ? ', (answer) => {
    console.log('Vous avez saisi : ' + answer);

    const entierSaisi = parseInt(answer, 10);

    if (isNaN(entierSaisi)) {
      console.log('Erreur : il faut saisir un nombre entier');
      return jouer();
    }

    essais.push(entierSaisi);

    if (entierSaisi < entierAlea) {
      console.log('Trop petit');
      jouer();
    } else if (entierSaisi > entierAlea) {
      console.log('Trop grand');
      jouer();
    } else {
      console.log('Gagné');
      rl.close();
    }
  });
}

// ces 3 variables doivent devenir des propriétés de Jeu
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const entierAlea = getRandomInt(0, 100);
const essais = [];
jouer();

// pile d'appels
// ^
// |
// |                         question                  question
// |question                 jouer                     jouer
// |jouer    ...             cbAnswer ...              cbAnswer
// +--------------------------------------------------------------> temps
//
