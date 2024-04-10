package com.br.aprendamais.service;

import com.br.aprendamais.model.UsuarioModel;
import com.br.aprendamais.repository.UsuarioRepository;
import com.br.aprendamais.request.UsuarioRequest;
import com.br.aprendamais.response.UsuarioResponse;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CadastroUsuario {

    @Autowired
    private UsuarioRepository usuarioRepository;

    /*Método responsável por criar um novo Usuário*/
    public UsuarioResponse novoUsuario (UsuarioRequest usuarioRequest){
        UsuarioModel usuarioModel = new UsuarioModel();
        BeanUtils.copyProperties(usuarioRequest, usuarioModel);
        usuarioModel = usuarioRepository.save(usuarioModel);
        return converteParaDto(usuarioModel);
    }

    /*Método responsável por converter um objeto para DTO*/
    private UsuarioResponse converteParaDto(UsuarioModel usuarioModel) {
        UsuarioResponse usuarioResponse = new UsuarioResponse();
        usuarioResponse.setCep(usuarioModel.getCep());
        usuarioResponse.setCpf(usuarioModel.getCpf());
        usuarioResponse.setDdd(usuarioModel.getDdd());
        usuarioResponse.setEmail(usuarioModel.getEmail());
        usuarioResponse.setNome(usuarioModel.getNome());
        usuarioResponse.setLogradouro(usuarioModel.getLogradouro());
        usuarioResponse.setTelefone(usuarioModel.getTelefone());
        usuarioResponse.setDtNascimento(usuarioModel.getDtNascimento());

        return usuarioResponse;
    }

}