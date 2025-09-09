-- BASE DE DATOS LEVEL-UP GAMER (Oracle SQL Developer)

-- =======================================
-- TABLA DE USUARIOS
-- =======================================
CREATE TABLE usuarios (
    id_usuario NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    nombre VARCHAR2(100) NOT NULL,
    email VARCHAR2(150) UNIQUE NOT NULL,
    password VARCHAR2(255) NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    es_duoc CHAR(1) DEFAULT 'N' CHECK (es_duoc IN ('S','N')),
    puntos_levelup NUMBER DEFAULT 0,
    referido_por NUMBER,
    CONSTRAINT fk_usuario_referido FOREIGN KEY (referido_por) REFERENCES usuarios(id_usuario)
);

-- =======================================
-- TABLA DE CATEGORÍAS
-- =======================================
CREATE TABLE categorias (
    id_categoria NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    nombre VARCHAR2(100) NOT NULL
);

-- =======================================
-- TABLA DE PRODUCTOS
-- =======================================
CREATE TABLE productos (
    id_producto NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    codigo VARCHAR2(10) UNIQUE NOT NULL,
    nombre VARCHAR2(150) NOT NULL,
    descripcion CLOB,
    precio NUMBER(10,2) NOT NULL,
    stock NUMBER DEFAULT 0,
    id_categoria NUMBER,
    CONSTRAINT fk_categoria FOREIGN KEY (id_categoria) REFERENCES categorias(id_categoria)
);

-- =======================================
-- TABLA DE CARRITO
-- =======================================
CREATE TABLE carrito (
    id_carrito NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    id_usuario NUMBER,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_carrito_usuario FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);

-- =======================================
-- TABLA DE ITEMS DEL CARRITO
-- =======================================
CREATE TABLE carrito_items (
    id_item NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    id_carrito NUMBER,
    id_producto NUMBER,
    cantidad NUMBER NOT NULL,
    CONSTRAINT fk_item_carrito FOREIGN KEY (id_carrito) REFERENCES carrito(id_carrito),
    CONSTRAINT fk_item_producto FOREIGN KEY (id_producto) REFERENCES productos(id_producto)
);

-- =======================================
-- TABLA DE PEDIDOS
-- =======================================
CREATE TABLE pedidos (
    id_pedido NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    id_usuario NUMBER,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    total NUMBER(10,2) NOT NULL,
    estado VARCHAR2(20) DEFAULT 'Pendiente' 
           CHECK (estado IN ('Pendiente','Pagado','Enviado','Completado')),
    CONSTRAINT fk_pedido_usuario FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);

-- =======================================
-- TABLA DE DETALLES DE PEDIDO
-- =======================================
CREATE TABLE pedido_detalles (
    id_detalle NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    id_pedido NUMBER,
    id_producto NUMBER,
    cantidad NUMBER,
    precio_unitario NUMBER(10,2),
    CONSTRAINT fk_detalle_pedido FOREIGN KEY (id_pedido) REFERENCES pedidos(id_pedido),
    CONSTRAINT fk_detalle_producto FOREIGN KEY (id_producto) REFERENCES productos(id_producto)
);

-- =======================================
-- TABLA DE RESEÑAS
-- =======================================
CREATE TABLE reseñas (
    id_reseña NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    id_usuario NUMBER,
    id_producto NUMBER,
    calificacion NUMBER CHECK (calificacion BETWEEN 1 AND 5),
    comentario CLOB,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_reseña_usuario FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
    CONSTRAINT fk_reseña_producto FOREIGN KEY (id_producto) REFERENCES productos(id_producto)
);

-- =======================================
-- TABLA DE PREFERENCIAS DEL USUARIO
-- (Para recomendaciones y personalización)
-- =======================================
CREATE TABLE preferencias_usuario (
    id_preferencia NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    id_usuario NUMBER,
    id_categoria NUMBER,
    CONSTRAINT fk_pref_usuario FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
    CONSTRAINT fk_pref_categoria FOREIGN KEY (id_categoria) REFERENCES categorias(id_categoria)
);

-- =======================================
-- TABLA DE EVENTOS
-- (Gamificación: participación de usuarios en eventos que otorgan puntos)
-- =======================================
CREATE TABLE eventos (
    id_evento NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    nombre VARCHAR2(150) NOT NULL,
    ubicacion VARCHAR2(150),
    fecha TIMESTAMP,
    puntos_otorgados NUMBER DEFAULT 0
);

-- =======================================
-- TABLA RELACIONAL USUARIOS - EVENTOS
-- =======================================
CREATE TABLE usuarios_eventos (
    id_usuario_evento NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    id_usuario NUMBER,
    id_evento NUMBER,
    CONSTRAINT fk_usuario_evento_usuario FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
    CONSTRAINT fk_usuario_evento_evento FOREIGN KEY (id_evento) REFERENCES eventos(id_evento)
);

-- =======================================
-- TABLA DE SOPORTE TÉCNICO (opcional, para casos de servicio)
-- =======================================
CREATE TABLE soporte (
    id_ticket NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    id_usuario NUMBER,
    descripcion CLOB NOT NULL,
    estado VARCHAR2(20) DEFAULT 'Abierto' CHECK (estado IN ('Abierto','En Proceso','Cerrado')),
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_soporte_usuario FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);
