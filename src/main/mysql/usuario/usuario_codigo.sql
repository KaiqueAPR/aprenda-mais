CREATE TABLE IF NOT EXISTS usuario_codigo (
	id  int auto_increment NOT NULL,
	codigo int NOT NULL,
	data_expiracao datetime NOT NULL,
	usuario_id int NOT NULL,
	CONSTRAINT usuario_codigo_pk PRIMARY KEY (id),
	CONSTRAINT usuario_codigo_usuario_FK FOREIGN KEY (usuario_id) REFERENCES aprenda_mais.usuario(id)
)
ENGINE=InnoDB DEFAULT CHARSET=utf8mb4

