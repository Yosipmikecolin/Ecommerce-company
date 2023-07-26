export const products: {
  name: string;
  price: string;
  imagen: string;
  quantity: number;
}[] = [
  {
    name: "Camiseta Azul",
    price: "120.000",
    imagen:
      "https://cdn.koaj.co/124442-thickbox_default/camiseta-basica-manga-corta-estampada.jpg",
    quantity: 1,
  },
  {
    name: "Camiseta de algodon",
    price: "230.000",
    imagen:
      "https://cdn.koaj.co/124732-thickbox_default/camiseta-basica-manga-corta-unicolor.jpg",
    quantity: 2,
  },
  {
    name: "Camiseta Guayaba",
    price: "500.000",
    imagen:
      "https://cdn.koaj.co/97517-thickbox_default/camiseta-manga-corta-estampada.jpg",
    quantity: 5,
  },
];
export const navLinks = [
  {
    name: "Inicio",
    route: "/",
  },
  {
    name: "Productos",
    route: "/products",
  },
  {
    name: "Nosotros",
    route: "/we",
  },
  {
    name: "Contacto",
    route: "/contact",
  },
];
