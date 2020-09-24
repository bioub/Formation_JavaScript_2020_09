// Exercice 1
// Lire a.txt et b.txt
// Les écrire dans l'ordre dans un fichier result.txt

// fs.promises.readFile
// fs.promises.appendFile

// Exercice 2
// Reprendre le meme exercice mais en écrivant
// dans un dossier output
// output/result.txt
// vous devez creer le dossier via fs.promises.mkdir

// fs.promises.mkdir

// Exercice 3
// Avant chaque ecriture de output/result.txt
// Supprimer result.txt en premier
// et output en second

// fs.promises.unlink pour supprimer le fichier
// fs.promises.rmdir pour supprimer le dossier
const fs = require('fs');

async function rmFileIfNotExists(filePath) {
  try {
    await fs.promises.stat(filePath);
    await fs.promises.unlink(filePath);
  } catch (err) {
    if (err.code !== 'ENOENT') {
      throw err;
    }
  }
}

async function rmDirIfNotExists(dirPath) {
  try {
    await fs.promises.stat(dirPath);
    await fs.promises.rmdir(dirPath);
  } catch (err) {
    if (err.code !== 'ENOENT') {
      throw err;
    }
  }
}

(async () => {
  try {
    await rmFileIfNotExists('output/result.txt');
    console.log('output/result.txt deleted');
    await rmDirIfNotExists('output');
    console.log('output deleted');
    await fs.promises.mkdir('output');
    console.log('output created');
    const buffers = await Promise.all([
      fs.promises.readFile('a.txt'),
      fs.promises.readFile('b.txt'),
    ]);
    console.log('a.txt and b.txt read');
    await fs.promises.writeFile('output/result.txt', Buffer.concat(buffers));
    console.log('output/result.txt created');
  } catch (err) {
    console.log(err);
  }
})();
