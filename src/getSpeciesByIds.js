const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(...ids) {
  if (!ids) {
    return [];
  }
  return species
    .filter((especie) => ids.includes(especie.id));
}

module.exports = getSpeciesByIds;
console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));
