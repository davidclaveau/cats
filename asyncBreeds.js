// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, waitUntilComplete) {
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    if (!error) {
      waitUntilComplete(data);
    } else {
      waitUntilComplete(undefined);
    }
  });
};

module.exports = breedDetailsFromFile;
