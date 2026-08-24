import { C } from "../C.js";

const templateFile = await fetch(
  "./src/components/templates/projets-grid.html",
);
const templateGrid = await templateFile.text();

const templateFile2 = await fetch(
  "./src/components/templates/projets-card.html",
);
const templateCard = await templateFile2.text();

let UXUI = {};

UXUI.formatOneCard = function (id, type, image, titre, description) {
  let html = templateCard;
  html = html.replace("{{type}}", type);
  html = html.replace("{{id}}", id);
  html = html.replace("{{image}}", image);
  html = html.replaceAll("{{titre}}", titre);
  html = html.replace("{{description}}", description);

  return html;
};

UXUI.formatGrid = function (data) {
  let html = templateGrid;
  let cardsList = "";
  for (let card of data) {
    card.id = card.id || `ux-ui-${data.indexOf(card) + 1}`;
    cardsList += UXUI.formatOneCard(
      card.id,
      card.type,
      card.image,
      card.titre,
      card.description,
    );
  }
  html = html.replace("{{projets}}", cardsList);
  return html;
};

UXUI.render = function (where, what) {
  C.register(what);
  let html = UXUI.formatGrid(what);
  let element = document.querySelector(where);
  element.innerHTML = html;
};

export { UXUI };
