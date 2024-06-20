CREATE TABLE IF NOT EXISTS `usuario` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `nome` VARCHAR(255) NOT NULL,
  `cpf` VARCHAR(14) NOT NULL,
  `telefone` DECIMAL(10,0),
  `codigo_ddd` DECIMAL(2,0),
  `email` VARCHAR(255),
  `data_nascimento` DATE,
  `cep` DECIMAL(8,0),
  `logradouro` VARCHAR(255),
  `senha` VARCHAR(100),
  `ckAutenticacao` BOOLEAN,
  `contavalida` BOOLEAN
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
