let DataIntegration = [
  {
    type: "Universitaire",
    image: "/images/projet-covers/integration/BAL_App.png",
    titre: "BAL APP",
    description: "Création d'une maquette d'application.",
    projet: {},
  },
];

DataIntegration.forEach((project, index) => {
  project.id = `integration-${index + 1}`;
});

export { DataIntegration };
