const data = require('../data/zoo_data');

const { species } = data;
const { employees } = data;
const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';

function getOldestFromFirstSpecies(id) {
  const firstAnimal = employees.find((employee) => employee.id === id).responsibleFor[0];
  const findingAnimal = species.find((array) => array.id === firstAnimal).residents;
  const oldestAnimal = findingAnimal.sort((a, b) => a.age - b.age);
  const keysFromTheOldest = oldestAnimal[oldestAnimal.length - 1];
  return Object.values(keysFromTheOldest);
}

module.exports = getOldestFromFirstSpecies;

console.log(getOldestFromFirstSpecies(stephanieId));
