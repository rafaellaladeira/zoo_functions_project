const data = require('../data/zoo_data');

const { prices } = data;

const entrants1 = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

function countEntrants(entrants) {
  const child1 = entrants.filter((filtering) => filtering.age < 18).length;
  const adult1 = entrants.filter((filtering) => filtering.age >= 18 && filtering.age < 50).length;
  const senior1 = entrants.filter((filtering) => filtering.age >= 50).length;
  return {
    child: child1,
    adult: adult1,
    senior: senior1,
  };
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const extraindo = countEntrants(entrants);
  return extraindo.child * prices.child
  + extraindo.adult * prices.adult
  + extraindo.senior * prices.senior;
}

module.exports = { calculateEntry, countEntrants };

console.log(countEntrants(entrants1));
console.log(calculateEntry(entrants1));
