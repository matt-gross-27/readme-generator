const fs = require('fs');

const writeReadme = fileContents => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/README.md', fileContents, err => {
      if(err) {
        reject(err);
        return;
      }
      resolve({
        ok:true,
        message: 'README.md file created. Check dist directory for output.'
      });
    });
  });
};

module.exports = writeReadme;