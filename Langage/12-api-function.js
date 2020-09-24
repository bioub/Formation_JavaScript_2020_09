// 'use strict';

globalThis.name = 'Global';

function hello() {
  console.log('Hello ' + this.name); // this === object global ou undefined en mode strict
}

hello(); // Hello Global

const contact = {
  name: 'Romain',
};

hello.call(contact); // Hello Romain
const helloContact = hello.bind(contact);
helloContact(); // Hello Romain

function bind(originalFct, applyThis) {
  return function() {
    originalFct.call(applyThis);
  }
}

const helloContact2 = bind(hello, contact);
helloContact2(); // Hello Romain
