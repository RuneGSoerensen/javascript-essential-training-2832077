/**
 * Create a Backpack object.
 */

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

  newPocketNum: function (pocketNumNew) {
    this.pocketNum = pocketNumNew;
  },
};

console.log("The backpack object:", backpack);
console.log("The pocketNum value:", backpack.pocketNum);

console.log("pocketNum before", backpack.pocketNum);

backpack.newPocketNum(`this is now a string and a data: ${backpack.pocketNum}`);

console.log("pocketNum after", backpack.pocketNum);
