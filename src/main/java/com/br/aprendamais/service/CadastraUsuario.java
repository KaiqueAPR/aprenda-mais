package com.br.aprendamais.service;

import com.br.aprendamais.model.UsuarioModel;
import org.springframework.stereotype.Service;

@Service
public class CadastraUsuario {

    public UsuarioModel criaUsuario(UsuarioModel usuarioModel){
        UsuarioModel novoUsuarioModel = new UsuarioModel();
        if(usuarioModel != null){
            novoUsuarioModel = usuarioModel;
        }
        return novoUsuarioModel;
    }
}
