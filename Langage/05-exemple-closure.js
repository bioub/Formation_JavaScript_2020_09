for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}

// Sortie ?
// A - Erreur
// B - ..1s.. 0 ..1s.. 1 ..1s.. 2
// C - ..1s.. 0 1 2
// -> D - ..1s.. 3 3 3

function logSavedValue(val) {
  return function() {
    console.log(val);
  }
}

for (var i = 0; i < 3; i++) {
  setTimeout(logSavedValue(i) , 1000);
}

// Sortie ?
// A - Erreur
// B - ..1s.. 0 ..1s.. 1 ..1s.. 2
// -> C - ..1s.. 0 1 2
// D - ..1s.. 3 3 3

for (let i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}

// Sortie ?
// A - Erreur
// B - ..1s.. 0 ..1s.. 1 ..1s.. 2
// -> C - ..1s.. 0 1 2
// D - ..1s.. 3 3 3
