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

    public UsuarioModel loginUsuario(LoginRequest loginRequest) {

        UsuarioModel usuarioModel;

        if (loginRequest.getLogin().contains("@")) {
            usuarioModel = usuarioRepository.findByEmail(loginRequest.getLogin());
        } else {
            usuarioModel = usuarioRepository.findByTelefone(Integer.valueOf(loginRequest.getLogin()));
        }
        if (usuarioModel != null && usuarioModel.getSenha().equals(loginRequest.getPassword())) {
            return usuarioModel;
        }
        return null;
    }
}