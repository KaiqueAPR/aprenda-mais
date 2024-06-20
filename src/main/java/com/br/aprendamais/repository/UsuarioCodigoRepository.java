package com.br.aprendamais.repository;

import com.br.aprendamais.model.UsuarioCodigoModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import  com.br.aprendamais.model.UsuarioModel;

@Repository
public interface UsuarioCodigoRepository extends JpaRepository<UsuarioCodigoModel, Long> {

     // Criado uma query de forma nativa , pois tive alguns problemas utilizando o ORM
     @Query(value = "SELECT uc.id, uc.codigo, uc.data_expiracao, uc.usuario_id\n" +
             "FROM aprenda_mais.usuario_codigo uc\n" +
             "JOIN usuario as u on u.id = uc.usuario_id\n" +
             "WHERE uc.codigo = :iduser \n" +
             "AND u.email = :email \n" +
             "order by id asc \n" +
             "LIMIT 1" ,nativeQuery = true)

     UsuarioCodigoModel findByCodigoAndEmail(@Param("iduser") Integer codigo,@Param("email") String email);


}
