const fs = require("fs");

const readData = () => {
  return fs
    .readFileSync("./1input.txt", "utf8")
    .toString()
    .trim()
    .split("\n")
    .map(i => parseInt(i));
};

const sumArray = (a) => {
  let total = 0;
  a.forEach(el => {
    total += el;
  });
  return total;
}

const getRequiredFuel = (a) => {
  let requiredFuel = a.map(el => Math.floor(el/3) - 2)
  return sumArray(requiredFuel);
}

const fuelData = readData();

const totalFuel = getRequiredFuel(fuelData);

console.log(`Total required fuel: ${totalFuel}`);
