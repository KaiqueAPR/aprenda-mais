package com.br.aprendamais.controller;

import com.br.aprendamais.model.UsuarioModel;
import com.br.aprendamais.request.JwtRequest;
import com.br.aprendamais.request.LoginRequest;
import com.br.aprendamais.service.Login;
import com.br.aprendamais.utils.JwtTokenUtil;
import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private Login login;

    @PostMapping("/login")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody LoginRequest loginRequest) throws Exception {

        UsuarioModel usuario = login.loginUsuario(loginRequest);

        if(usuario == null){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        final String token = jwtTokenUtil.generateToken(usuario);

        return ResponseEntity.ok(new JwtResponse(token, usuario.getNome()));
    }

    class JwtResponse {
        private final String token;
        private final String nome;

        public JwtResponse(String token, String nome) {
            this.token = token;
            this.nome = nome;
        }

        public String getToken() {
            return token;
        }

        public String getNome(){
            return nome;
        }
    }
}
