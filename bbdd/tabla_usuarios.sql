CREATE TABLE usuarios(
    id_usuario INT AUTOINCREMENT PRIMARY KEY,
    usuario VARCHAR(50) UNIQUE NOT NULL,
    contrasena VARCHAR(50) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    codigo VARCHAR(50)
);

CREATE TABLE cita(
    id_animal INT AUTOINCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL,
    nombre VARCHAR(50) NOT NULL UNIQUE,
    raza ENUM("perro","gato") NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);
