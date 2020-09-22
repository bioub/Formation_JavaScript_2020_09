'use strict';
globalThis.porteeGlobale = 'porteeGlobale'

const porteeDeModule = 'porteeDeModule';

function externe() {
  const porteeDeClosure = 'porteeDeClosure';
  function interne() {
    const porteeLocale = 'porteeLocale';
    console.log(porteeLocale);
    console.log(porteeDeClosure); // la valeur est sauvegardée
    console.log(porteeDeModule);
    console.log(porteeGlobale);
  }

  return interne;
}

const interneFromExterne = externe();
// termine l'appel de externe
interneFromExterne();

// interneFromExterne existe
console.log(typeof interneFromExterne); // function

// pile d'appels
// ^
// |
// |
// |externe - interne/interneFromExterne
// |(anonymous)
// +-----------------------------------------------------------> temps

