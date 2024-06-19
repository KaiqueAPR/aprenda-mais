package com.br.aprendamais.utils;

import com.br.aprendamais.model.UsuarioModel;
import com.br.aprendamais.security.CustomUserDetails;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

@Component
public class JwtTokenUtil {

    @Value("${jwt.secret}")
    private String secret;

    public String generateToken(UsuarioModel usuarioModel) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("email", usuarioModel.getEmail());
        claims.put("name", usuarioModel.getNome());
        return doGenerateToken(claims, usuarioModel.getId().toString());
    }

    public String getUsernameFromToken(String token) {
        return getClaimFromToken(token, Claims::getSubject);
    }

    public boolean validateToken(String token, String username) {
        final String tokenUsername = getUsernameFromToken(token);
        return (tokenUsername.equals(username));
    }

    private String doGenerateToken(Map<String, Object> claims, String subject) {
        return Jwts.builder()
                .setClaims(claims)
                .setSubject(subject)
                .signWith(SignatureAlgorithm.HS512, secret)
                .compact();
    }

    private Claims getAllClaimsFromToken(String token) {
        return Jwts.parser()
                .setSigningKey(secret)
                .parseClaimsJws(token)
                .getBody();
    }

    private <T> T getClaimFromToken(String token, java.util.function.Function<Claims, T> claimsResolver) {
        final Claims claims = getAllClaimsFromToken(token);
        return claimsResolver.apply(claims);
    }

    public UsernamePasswordAuthenticationToken getAuthentication(String token, Authentication existingAuth, UserDetails userDetails) {
        final var user = (CustomUserDetails) userDetails;
        return new UsernamePasswordAuthenticationToken(user, "", user.getAuthorities());
    }
}
