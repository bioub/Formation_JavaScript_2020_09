// Extensibilité (ajouter des clés)
Math.sum = (a, b) => a + b;
console.log(Math.sum(1, 2)); // 3

// Mauvaise pratique d'étendre des objets qu'on a pas créé

// Modifier des clés
Math.sum = (a, b) => Number(a) + Number(b);

// Supprimer des clés
delete Math.sum;

// Créer vos propres objets

// 2 syntaxes :
// - object literal
// - constructor function (mot clé class)

// object literal
// - l'objet est simple à créer
// - s'il est créé plusieurs fois, n'a pas de méthode
// sinon -> constructor

const coords1 = {
  x: 1,
  y: 2,
  // sumXY: function() {
  //   return this.x + this.y;
  // },
};
const coords2 = {
  x: 3,
  y: 4,
  // sumXY: function() {
  //   return this.x + this.y;
  // },
};

console.log(coords1.x);
console.log(coords1['x']);
const key = 'x';
console.log(coords1[key]);

const coordsJson = JSON.stringify(coords1);

console.log(coordsJson); // {"x":1,"y":2}

globalThis.MyMath = {
  sum: (a, b) => Number(a) + Number(b),
};

console.log(MyMath.sum(1, 2));

// sinon fonction constructeur
// function Contact(prenom) {
//   this.prenom = prenom;
// }
// Contact.prototype.hello = function() {
//   return `Hello ${this.prenom}`;
// };
class Contact {
  constructor(prenom) {
    this.prenom = prenom;
  }
  hello() {
    return `Hello ${this.prenom}`;
  }
}

const romain = new Contact('Romain');
const eric = new Contact('Eric');

console.log(typeof Contact); // function
console.log(typeof romain); // object

console.log(romain.prenom); // Romain
console.log(eric.prenom); // Eric
console.log(romain.hello()); // Romain
console.log(eric.hello()); // Eric
