/**
 * Create an object constructor function for the Backpack object type.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new
 */

function Backpack(name, volume, color, pocketNum) {
  this.name = name;
  this.volume = volume;
  this.color = color;
  this.pocketNum = pocketNum;
}

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false
);
