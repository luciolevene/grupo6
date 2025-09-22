
CREATE SCHEMA grupo6_proyecto_integrador;
USE grupo6_proyecto_integrador;



CREATE TABLE usuarios (
  id           INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  usuario      VARCHAR(100) NOT NULL UNIQUE,
  email        VARCHAR(100) NOT NULL UNIQUE,
  password     VARCHAR(255) NOT NULL,
  fotoPerfil  VARCHAR(255),
  createdAt    TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt    TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deletedAt    TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE productos (
  id           INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  idUsuario   INT UNSIGNED NOT NULL,
  imagen       VARCHAR(255),
  nombre       VARCHAR(150) NOT NULL,
  descripcion  TEXT NOT NULL,
  createdAt    TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt    TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deletedAt    TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (idUsuario) REFERENCES usuarios(id)
);

CREATE TABLE comentarios (
  id           INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  idProducto  INT UNSIGNED NOT NULL,
  idUsuario   INT UNSIGNED NOT NULL,
  texto        TEXT NOT NULL,
  createdAt    TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt    TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deletedAt    TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (idProducto) REFERENCES productos(id),
  FOREIGN KEY (idUsuario)  REFERENCES usuarios(id)
);


INSERT INTO usuarios (usuario, email, password, fotoPerfil) VALUES
('Ana',   'ana@example.com',   'pass1', 'ana.jpg'),
('Leo',   'leo@example.com',   'pass2', 'leo.jpg'),
('Pablo', 'pablo@example.com', 'pass3', 'pablo.jpg'),
('Gise',  'gise@example.com',  'pass4', 'gise.jpg'),
('Santi', 'santi@example.com', 'pass5', 'santi.jpg');


INSERT INTO productos (idUsuario, imagen, nombre, descripcion) VALUES
(1, 'iphone-14.jpg',          'iPhone 14',                 'Pantalla Super Retina XDR de 6,1 pulgadas y cámara dual avanzada.'),
(2, 'iphone 14 pro.jpeg',     'iPhone 14 Pro',             'Dynamic Island y sistema de cámaras Pro de 48 MP.'),
(3, 'samsung-galaxys23.jpg',  'Samsung Galaxy S23',        'Pantalla Dynamic AMOLED 2X y procesador Snapdragon 8 Gen 2.'),
(4, 's23ultra.jpg',           'Samsung Galaxy S23 Ultra',  'Pantalla de 6,8 pulgadas, S Pen integrado y cámara de 200 MP.'),
(5, 'pixel7.jpg',             'Google Pixel 7',            'Cámara con IA de Google y procesador Tensor G2.'),
(1, 'pixelpro7.jpeg',         'Google Pixel 7 Pro',        'Cámara triple con telefoto y pantalla QHD+ LTPO de 120 Hz.'),
(2, 'xiami13.jpeg',           'Xiaomi 13',                 'Colaboración con Leica para fotografía profesional.'),
(3, 'xiami13pro.jpeg',        'Xiaomi 13 Pro',             'Cámara de 1 pulgada con sensor Sony IMX989.'),
(4, 'oneplus11.jpeg',         'OnePlus 11',                'Snapdragon 8 Gen 2, pantalla AMOLED 120 Hz y carga rápida.'),
(5, 'motorola.jpeg',          'Motorola Edge 30 Ultra',    'Cámara de 200 MP y carga rápida de 125 W.');


INSERT INTO comentarios (idProducto, idUsuario, texto) VALUES

(1, 1, 'Lo compré y la cámara es increíble.'),
(1, 2, 'Muy caro pero vale la pena.'),
(1, 3, 'Buena batería para el día a día.'),

(2, 2, 'La Dynamic Island es útil.'),
(2, 5, 'Las fotos salen tremendas.'),
(2, 1, 'Rinde muy bien en todo.'),

(3, 3, 'Muy fluido y con gran cámara.'),
(3, 1, 'La pantalla se ve espectacular.'),
(3, 4, 'Buen rendimiento general.'),

(4, 4, 'El zoom de la cámara es impresionante.'),
(4, 2, 'El S Pen suma mucho.'),
(4, 5, 'Es grande pero cómodo.'),

(5, 1, 'Fotos espectaculares de noche.'),
(5, 5, 'Android puro, me encanta.'),
(5, 2, 'El Tensor G2 va bien.'),

(6, 3, 'Muy buena pantalla.'),
(6, 4, 'El telefoto ayuda muchísimo.'),
(6, 1, '120 Hz se notan.'),

(7, 4, 'Relación precio-calidad inmejorable.'),
(7, 2, 'El diseño es hermoso.'),
(7, 3, 'Leica hace diferencia.'),

(8, 1, 'Sensor enorme, fotos top.'),
(8, 5, 'Rinde muy bien en todo.'),
(8, 2, 'Pro en todo sentido.'),

(9, 3, 'La carga rápida es lo mejor.'),
(9, 4, 'Muy rápido y liviano.'),
(9, 1, 'Pantalla de 120 Hz va fina.'),

(10, 2, 'Motorola volvió con todo.'),
(10, 4, 'El diseño es muy elegante.'),
(10, 5, 'Los 200 MP sorprenden.');
