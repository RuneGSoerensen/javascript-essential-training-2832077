/**
 * Use the global Date() object to transform dates.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
 */

import Car from "./Car.js";

const thisCar = new Car(
  "Hyandai",
  "Classic",
  2013,
  "black",
  68000,
  4,
  false,
  false,
  false,
  "December 5, 2022 15:00:00 PST"
);

console.log(thisCar);

console.log("The cars millage:", thisCar.mileage);
console.log("Days since aquired:", thisCar.carAge());

console.log("Car engine is:", thisCar.engineOn);

thisCar.toggleEngine(true);

console.log("Car engine is:", thisCar.engineOn);

console.log(
  "Front doors are: ",
  thisCar.frontDoors.left,
  thisCar.frontDoors.right
);

thisCar.newDoorStatus(true, false);

console.log(
  "Front doors are: ",
  thisCar.frontDoors.left,
  thisCar.frontDoors.right
);
