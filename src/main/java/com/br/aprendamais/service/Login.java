package com.br.aprendamais.service;

import com.br.aprendamais.model.UsuarioModel;
import com.br.aprendamais.repository.UsuarioRepository;
import com.br.aprendamais.request.LoginRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class Login {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public boolean loginUsuario (LoginRequest loginRequest) {
        boolean retorno = false;

        UsuarioModel usuarioModel = usuarioRepository.findByEmailAndSenha(loginRequest.getLogin(), loginRequest.getSenha());

        if(!loginRequest.getLogin().contains("@")){
            Integer loginTelefone = Integer.parseInt(loginRequest.getLogin());
            usuarioModel = usuarioRepository.findByTelefoneAndSenha(loginTelefone, loginRequest.getSenha());
            retorno = true;
        }

        if(usuarioModel != null){
            retorno = true;
        }

        return retorno;
    }
}