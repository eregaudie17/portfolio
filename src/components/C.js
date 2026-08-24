import templateDetail from "./templates/projets-detail.html?raw";

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const isVideo = (value) =>
  typeof value === "string" && /\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(value);

const formatMedia = (value) => {
  const media = typeof value === "string" ? { src: value } : value;
  if (!media || typeof media.src !== "string") return null;

  if (isVideo(media.src)) {
    const type = media.type ? ` type="${escapeHtml(media.type)}"` : "";
    const poster = media.poster ? ` poster="${escapeHtml(media.poster)}"` : "";
    return `<video class="project-detail-video" controls playsinline preload="metadata"${poster}>
      <source src="${escapeHtml(media.src)}"${type} />
      Votre navigateur ne prend pas en charge la lecture vidéo.
    </video>`;
  }

  if (/\.(avif|gif|jpe?g|png|svg|webp)(\?.*)?$/i.test(media.src)) {
    return `<img class="project-detail-image" src="${escapeHtml(media.src)}" alt="" />`;
  }

  return null;
};

const formatContent = (content) =>
  Object.entries(content || {})
    .map(([key, value]) => {
      const values = Array.isArray(value) ? value : [value];
      const html = values
        .map((item) => {
          const media = formatMedia(item);
          if (media) return media;
          return `<p>${escapeHtml(item)}</p>`;
        })
        .join("");
      return `<section class="project-detail-field"><h3>${escapeHtml(key)}</h3>${html}</section>`;
    })
    .join("");

const C = {
  projects: new Map(),
};

C.register = function (projects) {
  projects.forEach((project) => {
    if (!project.id) return;
    C.projects.set(project.id, project);
  });
};

C.formatDetail = function (project) {
  return templateDetail
    .replace("{{titre}}", escapeHtml(project.titre))
    .replace("{{image}}", escapeHtml(project.image))
    .replace(
      "{{details}}",
      formatContent(project.projet) ||
        "<p>Le détail de ce projet sera bientôt disponible.</p>",
    );
};

C.closeProjet = function () {
  const overlay = document.querySelector("#projet-overlay");
  if (!overlay) return;
  overlay.classList.remove("is-visible");
  document.body.classList.remove("project-is-open");
  setTimeout(() => overlay.remove(), 200);
};

C.handlerProjet = function (id) {
  const project = C.projects.get(id);
  if (!project) return;

  C.closeProjet();
  const overlay = document.createElement("div");
  overlay.id = "projet-overlay";
  overlay.className = "project-overlay";
  overlay.innerHTML = `<article class="project-detail" role="dialog" aria-modal="true" aria-labelledby="project-detail-title">
    <button class="project-detail-close" type="button" aria-label="Fermer">&times;</button>
    ${C.formatDetail(project)}
  </article>`;
  document.body.appendChild(overlay);
  document.body.classList.add("project-is-open");

  overlay.addEventListener("click", (event) => {
    if (
      event.target === overlay ||
      event.target.closest(".project-detail-close")
    ) {
      C.closeProjet();
    }
  });
  requestAnimationFrame(() => overlay.classList.add("is-visible"));
};

document.addEventListener("click", (event) => {
  const card = event.target.closest("[data-project-id]");
  if (card) C.handlerProjet(card.dataset.projectId);
  if (
    event.target === document.querySelector("#projet-overlay") ||
    event.target.closest(".project-detail-close")
  ) {
    C.closeProjet();
  }
});

document.addEventListener("keydown", (event) => {
  const card = event.target.closest("[data-project-id]");
  if (card && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    C.handlerProjet(card.dataset.projectId);
  }
  if (event.key === "Escape") C.closeProjet();
});

window.C = C;

export { C };
