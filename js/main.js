const values = [
  { name: "Ananas", calories: 33, fat: 0, carbs: 11.8 },
  { name: "Jabłko", calories: 57, fat: 0.7, carbs: 12.1 },
  { name: "Pomarańcza", calories: 80, fat: 10, carbs: 1.8 },
  { name: "Wiśnie", calories: 24, fat: 0.3, carbs: 15.8 },
];

const vaulesContainer = document.querySelector(".app--values");

const desktopViewporst = window.matchMedia("screen and (min-width: 500px)");

const drawDesktopValues = () => {
  vaulesContainer.innerHTML = "";

  let table = document.createElement("table");
  let thead = document.createElement("thead");
  thead.innerHTML =
    "<tr><th>Nazwa</th><th>Kalorie</th><th>Tłuszcz</th><th>Węglowodany</th></tr>";

  table.appendChild(thead);
  vaulesContainer.appendChild(table);
};
