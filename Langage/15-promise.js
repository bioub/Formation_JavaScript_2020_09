const fs = require('fs');

// SYNC
try {
  const buffer = fs.readFileSync('.prettierrc');
  fs.writeFileSync('.prettierrc.copy', buffer);
  console.log('DONE');
} catch (err) {
  console.log(err);
}

// ASYNC
// Callback Hell / Pyramid of doom
fs.readFile('.prettierrc', (err, buffer) => {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile('.prettierrc.copy', buffer, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('DONE');
      }
    });
  }
});

// ASYNC Promise
// fs utilise Promise depuis Node 12
fs.promises.readFile('.prettierrc')
  .then((buffer) => fs.promises.writeFile('.prettierrc.copy', buffer))
  .then(() => console.log('DONE'))
  .catch((err) => console.log(err))

async function copy() {
  try {
    const buffer = await fs.promises.readFile('.prettierrc');
    await fs.promises.writeFile('.prettierrc.copy', buffer);
    console.log('DONE');
  } catch (err) {
    console.log(err);
  }
}

copy();
