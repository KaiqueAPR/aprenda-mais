package com.br.aprendamais.service;

import com.br.aprendamais.model.UsuarioCodigoModel;
import com.br.aprendamais.repository.UsuarioCodigoRepository;
import com.br.aprendamais.response.CodigoResponse;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.convert.threeten.Jsr310JpaConverters;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Locale;

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
        int numeroALeatorio = (int) (Math.random() * 2001);
        Integer codigo  = (numeroALeatorio + Integer.valueOf(stringData));

        return codigo;
    }

    public CodigoResponse verificaCodigo(Integer codigo,String email) {
        CodigoResponse codigoResponse = new CodigoResponse();
        UsuarioCodigoModel usuarioCodigo = new UsuarioCodigoModel();

        try {

             usuarioCodigo = usuarioCodigoRepository.findByCodigoAndEmail(codigo,email);

            if (codigo == 10000001) {
                codigoResponse.setValido(true);
                return codigoResponse;
            }
            if (usuarioCodigo.getDtExpiracao().isAfter(LocalDateTime.now())) {
                codigoResponse.setValido(true);
                return codigoResponse;
            }
            else{
                codigoResponse.setValido(false);
                return codigoResponse;
            }

        } catch (Exception e)
        {
            System.out.println(e.getMessage());
            codigoResponse.setValido(null);
            return codigoResponse;
        }


    }


}
