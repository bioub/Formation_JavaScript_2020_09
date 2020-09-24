'use strict';

const p1 = 'Jean';
let p2 = p1;
p2 = 'Eric';
console.log(p1); // Jean

const o1 = {p: 'Jean'};
const o2 = o1;
o2.p = 'Eric';
console.log(o1.p); // Eric

// Immuabilité (Immutability)
const string = 'Romain';
// string[0] = 'T'; // erreur
// console.log(string);

const newString = string.concat(', Eric');
console.log(string); // non modifié
console.log(newString); // créé avec la modif

// Muable Objet + Tableau
const array = ['Romain'];
array.push('Eric');
console.log(array); // modifié

// equivalent immuable
const newArray = [...array, 'Eric'];
console.log(array); // non modifié
console.log(newArray); // créé avec la modif
