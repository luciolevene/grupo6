
const data = {
    usuario: {
      id: 1,
      email: "demo@demo.com",
      usuario: "DemoUser",
      password: "1234",
      fotoPerfil: "user1.jpg"
    },
    productos: [
      {
        id: 1,
        imagen: "iphone-14.jpg",
        nombre: "iPhone 14",
        descripcion: "Pantalla Super Retina XDR de 6,1 pulgadas y cámara dual avanzada.",
        comentarios: [
          { usuario: "Ana", texto: "Lo compré y la cámara es increíble.", imagenPerfil: "profile-default.png" },
          { usuario: "Leo", texto: "Muy caro pero vale la pena.", imagenPerfil: "profile-default.png" }
        ]
      },
      {
        id: 2,
        imagen: "iphone 14 pro.jpeg",
        nombre: "iPhone 14 Pro",
        descripcion: "Dynamic Island y sistema de cámaras Pro de 48 MP.",
        comentarios: [
          { usuario: "Carla", texto: "El mejor celular que tuve.", imagenPerfil: "profile-default.png" },
          { usuario: "Santi", texto: "La batería me dura todo el día.", imagenPerfil: "profile-default.png" }
        ]
      },
      {
        id: 3,
        imagen: "samsung-galaxys23.jpg",
        nombre: "Samsung Galaxy S23",
        descripcion: "Pantalla Dynamic AMOLED 2X y procesador Snapdragon 8 Gen 2.",
        comentarios: [
          { usuario: "Mauro", texto: "Muy fluido y con gran cámara.", imagenPerfil: "profile-default.png" },
          { usuario: "Vale", texto: "Mejor que el iPhone en varios aspectos.", imagenPerfil: "profile-default.png" }
        ]
      },
      {
        id: 4,
        imagen: "s23ultra.jpg",
        nombre: "Samsung Galaxy S23 Ultra",
        descripcion: "Pantalla de 6,8 pulgadas, S Pen integrado y cámara de 200 MP.",
        comentarios: [
          { usuario: "Juan", texto: "El zoom de la cámara es impresionante.", imagenPerfil: "profile-default.png" },
          { usuario: "Nati", texto: "Es grande pero súper cómodo.", imagenPerfil: "profile-default.png" }
        ]
      },
      {
        id: 5,
        imagen: "pixel7.jpg",
        nombre: "Google Pixel 7",
        descripcion: "Cámara con IA de Google y procesador Tensor G2.",
        comentarios: [
          { usuario: "Martín", texto: "Fotos espectaculares de noche.", imagenPerfil: "profile-default.png" },
          { usuario: "Sofi", texto: "Android puro, me encanta.", imagenPerfil: "profile-default.png" }
        ]
      },
      {
        id: 6,
        imagen: "pixelpro7.jpeg",
        nombre: "Google Pixel 7 Pro",
        descripcion: "Cámara triple con telefoto y pantalla QHD+ LTPO de 120 Hz.",
        comentarios: [
          { usuario: "Tomi", texto: "Muy buena pantalla.", imagenPerfil: "profile-default.png" },
          { usuario: "Lu", texto: "El mejor Android que probé.", imagenPerfil: "profile-default.png" }
        ]
      },
      {
        id: 7,
        imagen: "xiami13.jpeg",
        nombre: "Xiaomi 13",
        descripcion: "Colaboración con Leica para fotografía profesional.",
        comentarios: [
          { usuario: "Eli", texto: "Relación calidad-precio inmejorable.", imagenPerfil: "profile-default.png" },
          { usuario: "Fran", texto: "El diseño es hermoso.", imagenPerfil: "profile-default.png" }
        ]
      },
      {
        id: 8,
        imagen: "xiami13pro.jpeg",
        nombre: "Xiaomi 13 Pro",
        descripcion: "Cámara de 1 pulgada con sensor Sony IMX989.",
        comentarios: [
          { usuario: "Clara", texto: "Fotos increíbles en cualquier situación.", imagenPerfil: "profile-default.png" },
          { usuario: "Pedro", texto: "Muy potente, se nota en juegos.", imagenPerfil: "profile-default.png" }
        ]
      },
      {
        id: 9,
        imagen: "oneplus11.jpeg",
        nombre: "OnePlus 11",
        descripcion: "Snapdragon 8 Gen 2, pantalla AMOLED 120 Hz y carga rápida.",
        comentarios: [
          { usuario: "Lucas", texto: "La carga rápida es lo mejor.", imagenPerfil: "profile-default.png" },
          { usuario: "Flor", texto: "Muy rápido y liviano.", imagenPerfil: "profile-default.png" }
        ]
      },
      {
        id: 10,
        imagen: "motorola.jpeg",
        nombre: "Motorola Edge 30 Ultra",
        descripcion: "Cámara de 200 MP y carga rápida de 125 W.",
        comentarios: [
          { usuario: "Pablo", texto: "Motorola volvió con todo.", imagenPerfil: "profile-default.png" },
          { usuario: "Gise", texto: "El diseño es muy elegante.", imagenPerfil: "profile-default.png" }
        ]
      }
    ] 
  };
  
  module.exports = data;
  