let DataMotion = [
  {
    type: "Universitaire",
    image: "/images/projet-covers/motion/japan_motion.png",
    titre: "Japan Motion",
    description: "Création d'une animation sur le Japon.",
    projet: {},
  },
];

DataMotion.forEach((project, index) => {
  project.id = `motion-${index + 1}`;
});

export { DataMotion };
