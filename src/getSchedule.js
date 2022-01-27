const data = require('../data/zoo_data');

const { species } = data;
const { hours } = data;

const daysOfWeek = Object.keys(hours);
const allTheAnimals = species.map((animals) => animals.name);

function gettingAnimal(day) {
  return species.filter((animal) => animal.availability.includes(day))
    .reduce((acc, cur) => {
      acc.push(cur.name);
      return acc;
    }, []);
}
function gettingDay(pickDay) {
  if (pickDay === 'Monday') {
    return {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    };
  }
  if (daysOfWeek.includes(pickDay)) {
    return {
      officeHour: `Open from ${hours[pickDay].open}am until ${hours[pickDay].close}pm`,
      exhibition: gettingAnimal(pickDay),
    };
  }
}

function getSchedule(scheduleTarget) {
  if (daysOfWeek.includes(scheduleTarget)) {
    return { [scheduleTarget]: gettingDay(scheduleTarget) };
  }
  if (allTheAnimals.includes(scheduleTarget)) {
    const dayArray = species.filter((get) => get.name === scheduleTarget);
    return dayArray[0].availability; // objeto dentro do array
  }
  return daysOfWeek.reduce((acc, cur) => {
    acc[cur] = gettingDay(cur);
    return acc;
  }, {});
}
module.exports = getSchedule;

console.log(getSchedule());
console.log(getSchedule('testando'));
// console.log(getSchedule('Tuesday'));
// console.log(getSchedule('penguins'));
