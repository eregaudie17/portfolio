import { C } from "../C.js";

import templateGrid from "../templates/projets-grid.html?raw";
import templateCard from "../templates/projets-card.html?raw";

let TroisD = {};

TroisD.formatOneCard = function (id, type, image, titre, description) {
  let html = templateCard;
  html = html.replace("{{type}}", type);
  html = html.replace("{{id}}", id);
  html = html.replace("{{image}}", image);
  html = html.replaceAll("{{titre}}", titre);
  html = html.replace("{{description}}", description);

  return html;
};

TroisD.formatGrid = function (data) {
  let html = templateGrid;
  let cardsList = "";
  for (let card of data) {
    card.id = card.id || `3d-${data.indexOf(card) + 1}`;
    cardsList += TroisD.formatOneCard(
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

TroisD.render = function (where, what) {
  C.register(what);
  let html = TroisD.formatGrid(what);
  let element = document.querySelector(where);
  element.innerHTML = html;
};

export { TroisD };
