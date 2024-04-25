package com.br.aprendamais.controller;

import com.br.aprendamais.request.LoginRequest;
import com.br.aprendamais.request.UsuarioRequest;
import com.br.aprendamais.response.UsuarioResponse;
import com.br.aprendamais.service.Login;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/login")
public class LoginController {

    @Autowired
    private Login loginService;

    @PostMapping("")
    public boolean novoUsuario(@RequestBody @Valid LoginRequest loginRequest) {
        return loginService.loginUsuario(loginRequest);
    }
}
