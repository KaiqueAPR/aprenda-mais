package com.br.aprendamais.controller;

import com.br.aprendamais.request.UsuarioRequest;
import com.br.aprendamais.response.UsuarioResponse;
import com.br.aprendamais.service.CadastroUsuario;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/usuario")
public class CadastroUsuarioController {

    private final CadastroUsuario cadastroUsuarioService;

    public CadastroUsuarioController(CadastroUsuario cadastroUsuarioService) {
        this.cadastroUsuarioService = cadastroUsuarioService;
    }
    @RequestMapping("")
    public void login() {
    }

    @PostMapping("/novo")
    public UsuarioResponse novoUsuario(@RequestBody @Valid UsuarioRequest usuarioRequest) {
        return cadastroUsuarioService.novoUsuario(usuarioRequest);
    }
}
