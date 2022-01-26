const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  if (!animal) {
    return species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
  }
  if (Object.keys(animal).length === 1) {
    return species.find((choose) => choose.name === animal.specie).residents.length;
  }
  if (Object.keys(animal).length > 1) {
    const seachingFemales = species.find((choose) => choose.name === animal.specie).residents;
    return seachingFemales.filter((female) => female.sex === 'female').length;
  }
}
module.exports = countAnimals;

// console.log(countAnimals());
// console.log(countAnimals({ specie: 'giraffes' }));
console.log(countAnimals({ specie: 'elephants', sex: 'male' }));
