// function timeout(delayMs) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, delayMs)
//   });
// }

// timeout(1000).then(() => console.log('1s'));

// on ne peut pas utiliser les promesses quand le callback
// doit être appelé plusieurs fois
// à la place :
// - event emitter
// - Observable (Angular) -> RxJS
// - async iteration ES2018 (Deno)
// function interval(delayMs) {
//   return new Promise((resolve) => {
//     setInterval(() => {
//       resolve();
//     }, delayMs)
//   });
// }

// interval(1000).then(() => console.log('1s'));

function randomTimeout(val) {
  const delayMs = Math.floor(Math.random() * 1000);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({val, delayMs});
    }, delayMs)
  });
}

// randomTimeout('A').then((val) => console.log(val));
// randomTimeout('B').then((val) => console.log(val));
// randomTimeout('C').then((val) => console.log(val));
// randomTimeout('D').then((val) => console.log(val));

// console.log('E');




console.log('E');

// Promise.all([
//   randomTimeout('A'),
//   randomTimeout('B'),
//   randomTimeout('C'),
//   randomTimeout('D'),
// ]).then((values) => {
//   console.log(values);
// });

(async () => {
  const values = await Promise.all([
    randomTimeout('A'),
    randomTimeout('B'),
    randomTimeout('C'),
    randomTimeout('D'),
  ])
  console.log(values);
})();
