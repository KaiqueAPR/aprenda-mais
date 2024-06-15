package com.br.aprendamais.service;

import com.br.aprendamais.model.UsuarioCodigoModel;
import com.br.aprendamais.repository.UsuarioCodigoRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Service
public class CadastroCodigoUsuario {


    @Autowired
    private UsuarioCodigoRepository usuarioCodigoRepository;

    public String salvaCodigo(Integer idUsuario, LocalDate dtNacimento) {
        UsuarioCodigoModel usuarioCodigo = new UsuarioCodigoModel();
        usuarioCodigo.setIdUsuario(idUsuario);
        usuarioCodigo.setCodigo(geraCodigo(dtNacimento));
        usuarioCodigo.setDtExpiracao(LocalDateTime.now().plusMinutes(30));

        BeanUtils.copyProperties(usuarioCodigo,usuarioCodigo);

        // Salva os valore no banco de dados
        usuarioCodigoRepository.save(usuarioCodigo);

        return String.valueOf(usuarioCodigo.getCodigo());
    }

    private Integer geraCodigo(LocalDate dtNacimento) {
        String stringData = String.valueOf(dtNacimento).replace("-","");
        int numero = (int) (Math.random() * 200);
        Integer codigo  = (numero + Integer.valueOf(stringData));

        return codigo;
    }
}
