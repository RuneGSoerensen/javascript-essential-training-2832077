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

const content = `
  <main>
    <article>
    <h1>${thisCar.brand}</h1>
      <ul>
        <li>model: ${thisCar.model}</li>
        <li>Color: ${thisCar.color}</li>
        <li>Age: ${thisCar.modelYear}</li>
        <li>Mileage: ${thisCar.mileage}</li>
        <li>Doors: ${thisCar.doorNum}</li>
        <li>Engine status: ${thisCar.engineOn}</li>
      </ul>
    </article>
  </main>
`;

document.body.innerHTML = content;
