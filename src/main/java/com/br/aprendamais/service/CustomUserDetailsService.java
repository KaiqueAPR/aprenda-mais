package com.br.aprendamais.service;

import com.br.aprendamais.model.UsuarioModel;
import com.br.aprendamais.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

        UsuarioModel usuario = usuarioRepository.findByEmail(email);

        if (usuario == null || !usuario.getEmail().equals(email)) {
            throw new UsernameNotFoundException("User not found");
        }

        return User.builder()
                .username(usuario.getNome())
                .password(new BCryptPasswordEncoder().encode(usuario.getSenha()))
                .authorities("ROLE_USER")
                .build();
    }

}
