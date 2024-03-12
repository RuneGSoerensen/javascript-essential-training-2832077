/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

/*

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

*/

const runesBil = {
  brand: "Hyuandai",
  model: "Classic",
  modelYear: "2013",
  color: "black",
  mileage: "68000",
  doorNum: 4,
  frontDoors: {
    left: "closed",
    right: "closed",
  },
  engineOn: false,
  toggleEngine: function (engineStatus) {
    this.engineOn = engineStatus;
  },
};

console.log(runesBil);

console.log(runesBil.frontDoors.right);

const boberKurva = {
  gender: "male",
  name: "Bober",
  surName: "Kurva",
  age: 25,
  singleStatus: false,
  job: "Mega chadisaur",
};

boberKurva.greet = function () {
  console.log(
    `Hello my name is ${boberKurva.name} ${boberKurva.surName} and i am a ${boberKurva.job}`
  );
};
