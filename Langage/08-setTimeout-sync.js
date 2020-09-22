function setTimeout(callbackFn, delayMs) {
  // BLOQUER LE THREAD PENDANT delayMS (ABSURDE)
  const debut = Date.now();
  while (debut + delayMs > Date.now());
  callbackFn();
}

for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}

// Sortie ?
// A - Erreur
// -> B - ..1s.. 0 ..1s.. 1 ..1s.. 2
// C - ..1s.. 0 1 2
// D - ..1s.. 3 3 3

function sleep(delayMs) {
  // BLOQUER LE THREAD PENDANT delayMS (ABSURDE)
  const debut = Date.now();
  while (debut + delayMs > Date.now());
}

for (var i = 0; i < 3; i++) {
  sleep(1000);
  console.log(i);
}
