let Data3D = [
  {
    type: "Universitaire",
    image: "/images/projet-covers/3D/FD_NMS.jpg",
    titre: "NMS",
    description: "Création d'une maquette d'application.",
    projet: {},
  },
];

Data3D.forEach((project, index) => {
  project.id = `3d-${index + 1}`;
});

export { Data3D };
