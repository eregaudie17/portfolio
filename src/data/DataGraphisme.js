let DataGraphisme = [
  {
    type: "Universitaire",
    image: "/images/projet-covers/graphisme/hiero_1.png",
    titre: "Flyers concerts Hiero",
    description:
      "Création de flyers dans le style graphique de la Fédérarion Hiero.",
    projet: {
      introduction:
        "Ce projet, à réaliser sur Affinity ou Photoshop à la tablette graphique, consistait à créer une série de flyers en s'inspirant du style graphique de la <a class='underline' href='https://www.hierolimoges.fr' target='_blank'>Fédération Hiero</a>, qui fait la promotion de concerts sur la ville de Limoges. La commande était donc de faire quatre flyers fonctionnant par trimestres, avec chacun leur propre illustration et mise en page.",
      outils: "Affinity Studio Pixel",
      livrables: [
        {
          src: "/images/flyers_hiero/Affiche_AVR-MAI-JUIN_Recto.png",
          class: "w-2/3",
        },
        {
          src: "/images/flyers_hiero/Affiche_AVR-MAI-JUIN_BIS.png",
          class: "w-2/3 mb-10",
        },
        {
          src: "/images/flyers_hiero/Affiche_JUI-AOU-SEP_Recto.png",
          class: "w-2/3",
        },
        {
          src: "/images/flyers_hiero/Affiche_JUI-AOU-SEP_BIS.png",
          class: "w-2/3 mb-10",
        },
        {
          src: "/images/flyers_hiero/Affiche_OCT-NOV-DEC_Recto.png",
          class: "w-2/3",
        },
        {
          src: "/images/flyers_hiero/Affiche_OCT-NOV-DEC_BIS.png",
          class: "w-2/3 mb-10",
        },
      ],
      explications:
        "Chaque flyer a été réalisé en utilisant une palette de couleur assez restreinte, avec des couleurs vives et contrastées pour attirer l'attention. Ils comportent chacun une référence à la pop culture, et pour les deux premières un jeu de taille et de perspective à été réalisé. Certaines comportent aussi une référence à la ville de Limoges : la porcelaine pour la deuxième et le basket pour la dernière.",
      conclusion:
        "Pour une première expérience à la tablette graphique, je suis plutôt satisfait du résultat. J'ai pu apprendre et affiner mon coup de crayon, et j'ai pu m'amuser à créer des illustrations dans un style qui me plaît. Je suis content d'avoir pu réaliser ce projet, et j'espère pouvoir continuer à travailler sur des projets similaires à l'avenir.",
    },
  },
  {
    type: "Universitaire",
    image: "/images/projet-covers/graphisme/tarot.png",
    titre: "Arcanes de Tarot",
    description: "Création d'un jeu de tarot personnalisé pour un client.",
    projet: {
      images: [
        {
          src: "/images/projets/graphisme/tarot/tarot-1.png",
          class: "w-1/2",
        },
      ],
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
