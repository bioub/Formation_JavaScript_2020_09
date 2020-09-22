function afficheTropGrandOuPetit(entierAlea, entierSaisi) {
  /*
  Afficher avec console.log trop grand si entierSaisi est supérieur à entierAlea
  Trop petit si inférieur
  Gagné si identique
  */
}

afficheTropGrandOuPetit(45, 60); // Trop grand
afficheTropGrandOuPetit(45, 10); // Trop petit
afficheTropGrandOuPetit(45, 45); // Gagné

function genererAlea(min, max) {
  /*
  Générer et retourner un entier aléatoire entre min et max
  Dans la doc de MDN : Math
  https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math
  */
}

const entierAlea = genererAlea(0, 100); // 23

/**
 *
 * @param {number[]} essais
 */
function dejaJoues(essais) {
  /*
  Afficher dans la console les valeurs déjà jouées :
  Ex : Vous avez déjà joué : 12, 34, 46, 57...
  Ou rien si le tableau essais est vide
  */
}

dejaJoues([12, 34, 46, 57]); // Vous avez déjà joué : 12, 34, 46, 57...

/**
 *
 * @param {string} saisie
 */
function afficherErreur(saisie) {
  // Afficher une erreur avec console.error()
  // si saisie n'est pas un nombre
  // rien sinon
}

afficherErreur("123"); //
afficherErreur("abc"); // Erreur : "abc" n'est pas un nombre
