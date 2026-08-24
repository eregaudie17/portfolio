let DataGraphisme = [
  {
    type: "Universitaire",
    image: "/images/projet-covers/graphisme/tarot.png",
    titre: "Arcanes de Tarot",
    description: "Création d'un jeu de tarot personnalisé pour un client.",
    projet: {
      introduction: "Présentation du projet",
      outils: "Figma, Photoshop",
      conclusion: "Bilan du projet",
    },
  },
];

DataGraphisme.forEach((project, index) => {
  project.id = `graphisme-${index + 1}`;
});

export { DataGraphisme };
