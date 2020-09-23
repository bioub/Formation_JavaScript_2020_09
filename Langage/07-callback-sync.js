const prenoms = ['Romain', 'Jean', 'Eric'];

// Algo en JS
// Stocker dans un nouveau tableaux
// les prénoms de 4 lettres en majuscule

// Style de programmation -> paradigme
// paradigme impératif (programmation impérative)
const prenoms4LettresUpper = [];

for (const prenom of prenoms) {
  if (prenom.length === 4) {
    const prenom4Letter = prenom;
    prenoms4LettresUpper.push(prenom4Letter.toUpperCase());
  }
}

console.log(prenoms4LettresUpper);

// paradigme fonctionnel (programmation fonctionnelle)
// sur les tableaux natif depuis ES5
const prenoms4LettresUpperFonc = prenoms
  .filter((prenom) => prenom.length === 4)
  .map((prenom4Letter) => prenom4Letter.toUpperCase());

console.log(prenoms4LettresUpperFonc);

// pile d'appels
// ^
// |
// |               up   up
// |=> - => - =>   => - =>
// |filter       - map
// +-----------------------------------------------------------> temps
