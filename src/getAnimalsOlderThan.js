const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  const animalSelected = species.find((specie) => specie.name === animal);
  return animalSelected.residents.every((animalAge) => animalAge.age > age);
}

module.exports = getAnimalsOlderThan;

console.log(getAnimalsOlderThan('otters', 7));
