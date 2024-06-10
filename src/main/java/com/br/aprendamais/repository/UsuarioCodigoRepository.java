package com.br.aprendamais.repository;

import com.br.aprendamais.model.UsuarioCodigoModel;
import com.br.aprendamais.model.UsuarioModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioCodigoRepository extends JpaRepository<UsuarioCodigoModel, Integer> {

    UsuarioModel findByCodigo(Integer codigo);

}
