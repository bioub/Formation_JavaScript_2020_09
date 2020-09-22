setTimeout(() => console.log('A'), 500);
setTimeout(() => console.log('B'), 0);
setTimeout(() => console.log('C'), 1000);
setTimeout(() => console.log('D'), 500);

console.log('E')

// Sortie ??
// 1 - A B C D E
// 2 - B A D C E
// 3 - E B A D C
// 4 - E B D A C


// pile d'appels
// ^
// |
// |
// |                           lg            lg    lg         lg
// |st - st - st - st - lg ... cbB ...       cbA - cbD ...    cbC
// +--------------------------------------------------------------> temps
// sortie               E      B             A     D          C

// file d'attente (0ms) : cbB
// file d'attente (7ms) :
// file d'attente (500ms) : cbA cbD
// file d'attente (501ms) : cbD
// file d'attente (502ms) :
// file d'attente (1000ms) : cbC
// file d'attente (1001ms) : 
