const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  } const empregado = employees
    .filter((person) => person.firstName === employeeName || person.lastName === employeeName);
    // .filter((person) => employeeName.includes(person.firstName) || employeeName.includes(person.lastName));
  const personEmployee = empregado[0];
  return personEmployee;
}

module.exports = getEmployeeByName;

console.log(getEmployeeByName('Emery'));
console.log(getEmployeeByName('Elser'));
