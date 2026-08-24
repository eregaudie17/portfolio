import { C } from "../C.js";

import templateGrid from "../templates/projets-grid.html?raw";
import templateCard from "../templates/projets-card.html?raw";

let Integration = {};

Integration.formatOneCard = function (id, type, image, titre, description) {
  let html = templateCard;
  html = html.replace("{{type}}", type);
  html = html.replace("{{id}}", id);
  html = html.replace("{{image}}", image);
  html = html.replaceAll("{{titre}}", titre);
  html = html.replace("{{description}}", description);

  return html;
};

Integration.formatGrid = function (data) {
  let html = templateGrid;
  let cardsList = "";
  for (let card of data) {
    card.id = card.id || `integration-${data.indexOf(card) + 1}`;
    cardsList += Integration.formatOneCard(
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

Integration.render = function (where, what) {
  C.register(what);
  let html = Integration.formatGrid(what);
  let element = document.querySelector(where);
  element.innerHTML = html;
};

export { Integration };
