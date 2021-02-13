const fs = require('fs');

fs.writeFile('./dist/README.md', "testing", err => {
  if (err) throw err;
  console.log(`README.md completed. Check directory 'dist' to see output`);
});
