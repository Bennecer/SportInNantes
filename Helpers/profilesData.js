export default profiles = [
   {
      id: 1,
      name: "Marc",
      profilePic: require('../assets/profilePics/marc.png'),
      bio: "Salut ! Je m'appelle Marc, j'ai hâte de faire votre connaissance !",
      sport: "Natation",
      sportData: "natation",
      sportPic: require('../assets/sports/natation.png'),
      place : {
         name: "Gymnase Léo Lagrange",
         rating: 4,
         address : "Rue Gaston Michel, Nantes",
         sports: [
            "natation"
         ],
         hours: "10h - 21h",
         latitude: 47.2096281,
         longitude: -1.5597493,
         img: require('../assets/placesPics/lagrange.jpg')
      },
      rating: "Agréable",
      description: "Salut ! Je vous propose de se rejoindre à la piscine, ça peut être fun !",
      date: "Mercredi 17 Avril à 15h",
      participants: [
         {
            name: "Julie",
            profilePic: require('../assets/profilePics/julie.png'),
         }
      ],
      numberMax: 6
   },
   {
      id: 2,
      name: "Jacques",
      profilePic: require('../assets/profilePics/jacques.png'),
      bio: "Salut ! Je m'appelle Jacques, j'ai hâte de faire votre connaissance !",
      sport: "Handball",
      sportData: "hand",
      sportPic: require('../assets/sports/hand.png'),
      place : {
         name: "Stade Michel Lecointre",
         rating: 4,
         address : "2 boulevard Maurice Bertin, Nantes",
         sports: [
            "hand",
            "rugby",
            "foot"
         ],
         hours: "10h - 20h",
         latitude: 47.2096751,
         longitude: -1.5350217,
         img: require('../assets/placesPics/lecointre.jpg')
      },
      rating: "Agréable",
      description: "Salut les jeunes ! Venez affronter le sénior du Handball !",
      date: "Jeudi 18 Avril à 10h",
      participants: [
         {
            name: "Julie",
            profilePic: require('../assets/profilePics/julie.png'),
         },{
            name: "Marc",
            profilePic: require('../assets/profilePics/marc.png'),
         },{
            name: "Sophie",
            profilePic: require('../assets/profilePics/sophie.png'),
         }
      ],
      numberMax: 15
   },
   {
      id: 3,
      name: "Justine",
      profilePic: require('../assets/profilePics/justine.png'),
      bio: "Salut ! Je m'appelle Justine, j'ai hâte de faire votre connaissance !",
      sport: "Natation",
      sportData: "natation",
      sportPic: require('../assets/sports/natation.png'),
      place : {
         name: "Piscine Petite Amazonie",
         rating: 3,
         address : "Boulevard de Berlin, Nantes",
         sports: [
            "natation"
         ],
         hours: "12h - 19h",
         latitude: 47.2164638,
         longitude: -1.5339178,
         img: require('../assets/placesPics/amazonie.jpg')
      },
      rating: "A éviter",
      description: "Piscine à 15h...",
      date: "Jeudi 18 Avril à 15h",
      participants: [
      ],
      numberMax: 6
   },
   {
      id: 4,
      name: "Sophie",
      profilePic: require('../assets/profilePics/sophie.png'),
      bio: "Salut ! Je m'appelle Sophie, j'ai hâte de faire votre connaissance !",
      sport: "Basket",
      sportData: "basket",
      sportPic: require('../assets/sports/basket.png'),
      place : {
         name: "A S P T T - Salle Ovinet",
         rating: 3,
         address : "38 rue Appert, Nantes",
         sports: [
            "basket",
            "badminton",
            "hand",
            "volley"
         ],
         hours: "11h - 18h",
         latitude: 47.2246567,
         longitude: -1.5971003,
         img: require('../assets/placesPics/ovinet.jpg')
      },
      rating: "Très sympa",
      description: "Un petit basket ça vous dit ?",
      date: "Vendredi 19 Avril à 11h",
      participants: [
         {
            name: "Jacques",
            profilePic: require('../assets/profilePics/jacques.png'),
         },{
            name: "Justine",
            profilePic: require('../assets/profilePics/justine.png'),
         },{
            name: "Sylvain",
            profilePic: require('../assets/profilePics/sylvain.png'),
         },{
            name: "Marc",
            profilePic: require('../assets/profilePics/marc.png'),
         },{
            name: "Julie",
            profilePic: require('../assets/profilePics/julie.png'),
         }
      ],
      numberMax: 12
   },
   {
      id: 5,
      name: "Sylvain",
      profilePic: require('../assets/profilePics/sylvain.png'),
      bio: "Salut ! Je m'appelle Sylvain, j'ai hâte de faire votre connaissance !",
      sport: "Ping-Pong",
      sportData: "ping",
      sportPic: require('../assets/sports/ping.png'),
      place : {
         name: "Saint-Médard de Doulon",
         rating: 4,
         address : "72 route du Pontereau, Nantes",
         sports: [
            "ping",
            "foot",
            "basket",
            "volley",
            "hand"
         ],
         hours: "09h - 18h",
         latitude: 47.2388937,
         longitude: -1.509451,
         img: require('../assets/placesPics/smd.jpg')
      },
      rating: "Agréable",
      description: "Une petite partie de Ping-Pong ? Ou trois ?",
      date: "Vendredi 19 Avril à 13h",
      participants: [
         {
            name: "Sophie",
            profilePic: require('../assets/profilePics/sophie.png'),
         },{
            name: "Julie",
            profilePic: require('../assets/profilePics/julie.png'),
         },{
            name: "Marc",
            profilePic: require('../assets/profilePics/marc.png'),
         }
      ],
      numberMax: 3
   },
   {
      id: 6,
      name: "Julie",
      profilePic: require('../assets/profilePics/julie.png'),
      bio: "Salut ! Je m'appelle Julie, j'ai hâte de faire votre connaissance !",
      sport: "Volley",
      sportData: "volley",
      sportPic: require('../assets/sports/volley.png'),
      place : {
         id: 6,
         name: "Gymnase Victor-Hugo",
         rating: 3,
         address : "29 Rue Paul Bellamy, Nantes",
         sports: [
            "ping",
            "foot",
            "basket",
            "volley",
            "hand",
         ],
         hours: "10h - 20h",
         latitude: 47.2234405,
         longitude: -1.5601003,
         img: require('../assets/placesPics/victor_hugo.jpg')
      },
      rating: "Correcte",
      description: "Let's go pour une partie de volley !",
      date: "Dimanche 21 Avril à 15h",
      participants: [
         {
            name: "Sylvain",
            profilePic: require('../assets/profilePics/sylvain.png'),
         },
      ],
      numberMax: 8
   },
]