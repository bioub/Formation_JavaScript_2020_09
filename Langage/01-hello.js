// Module IIFE
// Immediately Invoked Function Expression
// (function () {
  const prenoms = ['Jean', 'Pierre', 'Eric'];

  /** @param {string} name Le prénom */
  function hello(name) {
    return `Hello ${name.toUpperCase()} !`;
  }

  for (const p of prenoms) {
    console.log(hello(p));
  }

// }());
