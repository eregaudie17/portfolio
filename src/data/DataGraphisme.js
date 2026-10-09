let DataGraphisme = [
  {
    type: "Universitaire",
    image: "/images/projet-covers/graphisme/hiero_1.png",
    titre: "Flyers concerts Hiero",
    description:
      "Création de flyers dans le style graphique de la Fédérarion Hiero.",
    projet: {
      date: "Octobre 2026",
      introduction:
        "Ce projet, à réaliser sur Affinity ou Photoshop à la tablette graphique, consistait à créer une série de flyers en s'inspirant du style graphique de la <a class='underline' href='https://www.hierolimoges.fr' target='_blank'>Fédération Hiero</a>, qui fait la promotion de concerts sur la ville de Limoges. La commande était donc de faire quatre flyers fonctionnant par trimestres, avec chacun leur propre illustration et mise en page.",
      outils: "Affinity Studio Pixel",
      livrables: [
        {
          src: "/images/flyers_hiero/Affiche_AVR-MAI-JUIN_Recto.png",
          class: "w-full sm:w-2/3",
        },
        {
          src: "/images/flyers_hiero/Affiche_AVR-MAI-JUIN_BIS.png",
          class: "w-full sm:w-2/3 mb-10",
        },
        {
          src: "/images/flyers_hiero/Affiche_JUI-AOU-SEP_Recto.png",
          class: "w-full sm:w-2/3",
        },
        {
          src: "/images/flyers_hiero/Affiche_JUI-AOU-SEP_BIS.png",
          class: "w-full sm:w-2/3 mb-10",
        },
        {
          src: "/images/flyers_hiero/Affiche_OCT-NOV-DEC_Recto.png",
          class: "w-full sm:w-2/3",
        },
        {
          src: "/images/flyers_hiero/Affiche_OCT-NOV-DEC_BIS.png",
          class: "w-full sm:w-2/3 mb-10",
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
    image: "/images/projet-covers/graphisme/metiers_ceramique.png",
    titre: "Illustrations des métiers de la céramique",
    description:
      "Création d'illustrations représentant des travailleurs du monde de la céramique de Limoges.",
    projet: {
      date: "Octobre 2026",
      introduction:
        "Ce projet consistait à créer une série d'un maximum d'illustrations représentant des travailleurs du monde de la céramique de Limoges, en suivant un style graphique choisi au préalable. Le but était de créer des illustrations qui pourraient être utilisées pour faire connaître les métiers de la céramique de nos jours au grand public, notamment la céramique technique qui n'a absolument pas la même utilisation que la céramique classique : elle est utilisée dans l'industrie, l'aéronautique, la médecine, etc, et est cherchée non pas pour sa pureté ou sa beauté mais pour sa résistance et ses propriétés isolantes. J'ai donc choisi un style Paper Cut, qui consiste à créer des illustrations en superposant des formes donnant l'impression d'être découpées dans du papier, en utilisant des couleurs vives et en ajoutant une texture de feuille de papier canson et des ombres portées. Ce projet devait être réalisé sur Illustrator, mais l'arrêt de ma licence Adobe en milieu de semaine m'a forcé à migrer mon projet sur Affinity, ce qui m'a pénalisé étant donné que j'ai du apprendre le logiciel sur le tas, mais qui d'un autre côté m'a permis de développer mon éventail de compétences en graphisme. J'ai donc pu réaliser les trois illustrations ci-dessous.",
      outils: "Illustrator, Affinity Studio Vector",
      livrables: [
        {
          src: "/images/illus_porcelaine/Cuiseur.png",
          class: "w-full sm:w-2/3",
        },
        {
          src: "/images/illus_porcelaine/Emailleur.png",
          class: "w-full sm:w-2/3 my-7",
        },
        {
          src: "/images/illus_porcelaine/Presseur.png",
          class: "w-full sm:w-2/3",
        },
      ],
      explications:
        "Pour réaliser ces illustrations, j'ai commencé par faire des recherches sur les métiers de la céramique à Limoges, en me renseignant sur les différentes étapes de la production des céramiques traditionnelles et techniques, et sur les outils utilisés par les travailleurs. J'ai ensuite fait les illustration en flat design sur Illustrator, puis j'ai découpé des morceaux dans la forme pour préparer mon style Paper Cut. J'ai utilisé des couleurs vives et contrastées, et j'ai ajouté une texture de papier canson pour donner un aspect plus réaliste aux illustrations. Enfin, j'ai ajouté des ombres portées pour donner de la profondeur aux illustrations.",
      conclusion:
        "Je suis plutôt content de mes illustrations, malgré le changement de logiciel qui m'a fait perdre du temps et m'a limité à trois livrables. J'ai pu apprendre à utiliser Affinity Studio Vector, et j'ai pu développer mon style graphique en expérimentant avec le style Paper Cut, style que je trouve très intéressant du point de vue esthétique.",
    },
  },
];

DataGraphisme.forEach((project, index) => {
  project.id = `graphisme-${index + 1}`;
});

export { DataGraphisme };
