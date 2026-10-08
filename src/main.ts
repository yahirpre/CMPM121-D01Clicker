// Vite turns this import into a production-safe URL. Keep it as a file so
// even this tiny example demonstrates a separately deployed asset.
// @deno-types="./asset-url.d.ts"
import tileUrl from "./assets/tile.svg?no-inline";

const app = document.querySelector<HTMLElement>("#app")!;

const heading = document.createElement("h1");
heading.textContent = "ClickerMon";

const image = document.createElement("img");
image.src = tileUrl;
image.alt = "A teal tile with a cream circle";
image.width = 96;
image.height = 96;

const message = document.createElement("p");
message.textContent = "Your project starts here.";

let counter = 0;
const counterElem = document.createElement("p");
counterElem.textContent = `Coins: ${counter}`;

let growth = 0;
const growthElem = document.createElement("p");
growthElem.textContent = `Growth: ${growth} coins/sec`;

const clicker = document.createElement("button");
clicker.textContent = "Click Me!";
clicker.addEventListener("click", () => {
  counter++;
  update();
});

const upgrade = document.createElement("button");
upgrade.textContent = "Upgrade";
upgrade.addEventListener("click", () => {
  growth++;
  update();
});

app.append(heading, image, message, counterElem, growthElem, clicker, upgrade);

setInterval(() => {
  counter += growth;
  update();
}, 1000);

function update() {
  counterElem.textContent = `Coins: ${counter}`;
  growthElem.textContent = `Growth: ${growth} coins/sec`;
}
