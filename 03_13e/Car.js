class Car {
  constructor(
    //parameters
    brand,
    model,
    modelYear,
    color,
    mileage,
    doorNum,
    leftDoor,
    rightDoor,
    engineOn,
    dateAcquired
  ) {
    //propperties
    this.brand = brand;
    this.model = model;
    this.modelYear = modelYear;
    this.color = color;
    this.mileage = mileage;
    this.doorNum = doorNum;
    this.frontDoors = {
      left: leftDoor,
      right: rightDoor,
    };
    this.engineOn = engineOn;
    this.dateAcquired = dateAcquired;
  }
  //Functions/methods.
  newDoorStatus(leftDoor, rightDoor) {
    this.frontDoors.left = leftDoor;
    this.frontDoors.right = rightDoor;
  }

  toggleEngine(lidStatus) {
    this.engineOn = lidStatus;
  }
  carAge() {
    let now = new Date();
    let acquired = new Date(this.dateAcquired);
    let elapsed = now - acquired; // elapsed time in milliseconds
    let daysSinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24));
    return daysSinceAcquired;
  }
}
// Export as Car
export default Car;
