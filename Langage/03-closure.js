// (function () {

'use strict';
globalThis.porteeGlobale = 'porteeGlobale'

const porteeDeModule = 'porteeDeModule';

function externe() {
  const porteeDeClosure = 'porteeDeClosure';
  function interne() {
    const porteeLocale = 'porteeLocale';
    console.log(porteeLocale);
    console.log(porteeDeClosure);
    console.log(porteeDeModule);
    console.log(porteeGlobale);
  }
  interne();
}

externe();

// interne n'existe pas
console.log(typeof interne);

// pile d'appels
// ^
// |
// |interne
// |externe
// |(anonymous)
// +-----------------------------------------------------------> temps


// });
