let DataUXUI = [
  {
    type: "Universitaire",
    image: "/images/projet-covers/UX-UI/image.png",
    titre: "RBLX",
    description: "Création d'une maquette d'application.",
    projet: {},
  },
];

DataUXUI.forEach((project, index) => {
  project.id = `ux-ui-${index + 1}`;
});

export { DataUXUI };
