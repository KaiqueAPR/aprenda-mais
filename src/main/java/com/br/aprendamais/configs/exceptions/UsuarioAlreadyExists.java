package com.br.aprendamais.configs.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class UsuarioAlreadyExists extends RuntimeException {

    public UsuarioAlreadyExists (String message){
        super(message);
    }

    public UsuarioAlreadyExists(String message, Throwable cause){
        super(message, cause);
    }

}
