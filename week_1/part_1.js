const fs = require("fs");

const readData = () => {
  return fs
    .readFileSync("./part_1input.txt", "utf8")
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
  return a.map(el => Math.floor(el / 3) - 2);
}

// console.log(`Total required fuel: ${sumArray(readData(fuelData))}`);

module.exports = { sumArray, getRequiredFuel };