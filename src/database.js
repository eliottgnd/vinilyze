export const vinyles = [
  {
    id: 1,
    titre: "Dark Side of the Moon",
    artiste: "Pink Floyd",
    prix: 29.99,
    categorie: "Rock",
    image: "https://m.media-amazon.com/images/I/51UtWpxbNYL._AC_UF1000,1000_QL80_.jpg",
    description: "Album légendaire de Pink Floyd sorti en 1973"
  },
  {
    id: 2,
    titre: "Kind of Blue",
    artiste: "Miles Davis",
    prix: 24.99,
    categorie: "Jazz",
    image: "https://m.media-amazon.com/images/I/71dQKQD4MHL._AC_UF1000,1000_QL80_.jpg",
    description: "Le plus grand album de jazz de tous les temps"
  },
  {
    id: 3,
    titre: "The Chronic",
    artiste: "Dr. Dre",
    prix: 27.99,
    categorie: "Hip-Hop",
    image: "https://m.media-amazon.com/images/I/71RmtrrRLCL._AC_UF1000,1000_QL80_.jpg",
    description: "Album classique du hip-hop west coast"
  },
  {
    id: 4,
    titre: "Selected Ambient Works",
    artiste: "Aphex Twin",
    prix: 26.99,
    categorie: "Electronic",
    image: "https://m.media-amazon.com/images/I/71ZUgR5+9kL._AC_UF1000,1000_QL80_.jpg",
    description: "Chef-d'œuvre de la musique électronique"
  }
];

export const categories = ["Rock", "Jazz", "Hip-Hop", "Electronic", "Classical"];

export const categoryImages = {
  "Rock": "url_de_l_image_rock",
  "Jazz": "url_de_l_image_jazz",
  "Hip-Hop": "url_de_l_image_hiphop",
  // etc.
};

export const artists = [
  {
    id: 1,
    name: "Jazz Artist",
    image: "/images/artists/jazz-artist.jpg",
    color: "teal-500"
  },
  {
    id: 2,
    name: "Rock Artist",
    image: "/images/artists/rock-artist.jpg",
    color: "pink-500"
  },
  {
    id: 3,
    name: "Classical Artist",
    image: "/images/artists/classical-artist.jpg",
    color: "red-500"
  },
  {
    id: 4,
    name: "Pop Artist",
    image: "/images/artists/pop-artist.jpg",
    color: "purple-500"
  },
  {
    id: 5,
    name: "Electronic Artist",
    image: "/images/artists/electronic-artist.jpg",
    color: "blue-500"
  }
];

export const subscriptions = [
  {
    id: 'sub_1',
    name: 'Découverte',
    price: 19.99,
    period: 'mois',
    features: [
      '1 vinyle par mois',
      'Accès aux recommandations',
      'Newsletter mensuelle'
    ],
    color: 'teal'
  },
  {
    id: 'sub_2',
    name: 'Passionné',
    price: 39.99,
    period: 'mois',
    features: [
      '2 vinyles par mois',
      'Accès aux recommandations',
      'Newsletter mensuelle',
      'Vinyles exclusifs'
    ],
    isPopular: true,
    color: 'primary'
  },
  {
    id: 'sub_3',
    name: 'Collectionneur',
    price: 59.99,
    period: 'mois',
    features: [
      '3 vinyles par mois',
      'Accès aux recommandations',
      'Newsletter mensuelle',
      'Vinyles exclusifs',
      'Éditions limitées'
    ],
    color: 'purple'
  }
]; 