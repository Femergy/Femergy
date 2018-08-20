const fs = require('fs-extra');

async function removeExtracted (id) {
  try {
    await fs.remove(`./extracted/${id}`);
    await fs.remove(`./extracted/acceptedFiles-${id}.zip`);
  } catch (err) {
    console.error(err)
  }
}

module.exports = removeExtracted;
