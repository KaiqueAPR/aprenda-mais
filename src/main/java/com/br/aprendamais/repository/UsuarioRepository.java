package com.br.aprendamais.repository;

import com.br.aprendamais.model.UsuarioModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepository extends JpaRepository<UsuarioModel, Integer> {
    UsuarioModel findByEmailAndSenha (String login, String senha);

    UsuarioModel findByTelefoneAndSenha (Integer telefone, String senha);
}
