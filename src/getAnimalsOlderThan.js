const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  const teste = species.find((specie) => specie.name === animal);
  return teste.residents.every((animalAge) => animalAge > age);
}

module.exports = getAnimalsOlderThan;

console.log(getAnimalsOlderThan('otters', 7));
