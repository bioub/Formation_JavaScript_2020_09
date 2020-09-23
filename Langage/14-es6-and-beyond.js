// function sum(a, b) {
//   let result = a + b;

//   for (let i = 2; i < arguments.length; i++) {
//     result += arguments[i];
//   }

//   return result;
// }

// REST Params
// conversion d'une liste de valeurs vers un tableau
// 3, 4 -> [3, 4]
function sum(a, b, ...nbs) {
  let result = a + b;

  for (const nb of nbs) {
    result += nb;
  }

  return result;
}

console.log(sum(1, 2)); // 3
console.log(sum(1, 2, 3, 4)); // 10

// SPREAD Operator
// conversion d'un tableau vers une liste de valeur
// [1, 2, 3, 4] -> 1, 2, 3, 4
function multiply(a, b, c, d) {
  return a * b * c * d;
}

const nbs = [1, 2, 3, 4];
console.log(multiply(nbs[0], nbs[1], nbs[2], nbs[3])); // 24
console.log(multiply(...nbs)); // 24

const cloneNbs = [...nbs];

// Destructurer un tableau
//    [1  , 2  , 3    , 4   ]
const [one, two, three, four] = nbs;

const fullName = 'Romain Bohdanowicz';

//    ['Romain', 'Bohdanowicz']
const [prenom  , nom          ] = fullName.split(' ');

// Combiner avec REST et default param
const [ , deux = 2, ...autres] = nbs;


const coords = {x: 1, y: 2};

//    {x: 1   , y: 2   }
const {x: varX, y: varY} = coords;

//    {x: 1   , y: 2   }
const {x = 0, y = 0} = coords;





function *generateValues() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = generateValues();

console.log(generator.next().value) // 1
console.log(generator.next().value) // 2
console.log(generator.next().value) // 3

for (const nb of generateValues()) {
  console.log(nb);
}
