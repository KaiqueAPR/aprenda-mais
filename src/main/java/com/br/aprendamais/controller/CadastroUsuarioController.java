package com.br.aprendamais.controller;

import com.br.aprendamais.request.UsuarioRequest;
import com.br.aprendamais.response.UsuarioResponse;
import com.br.aprendamais.service.CadastroUsuario;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/usuario")
@CrossOrigin("http://localhost:5173/")
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

    @PostMapping("/autenticar/{id}")
    public UsuarioResponse autenticarUsuario (@RequestHeader @Valid Integer id){
        return cadastroUsuarioService.autenticarUsuario(id);
    }
}
