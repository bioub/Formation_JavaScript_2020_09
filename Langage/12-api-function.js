// 'use strict';

globalThis.name = 'Global';

function hello() {
  console.log('Hello ' + this.name); // this === object global ou undefined en mode strict
}

hello(); // Hello undefined

const contact = {
  name: 'Romain',
};

hello.call(contact); // Hello Romain
const helloContact = hello.bind(contact);
helloContact(); // Hello Romain
