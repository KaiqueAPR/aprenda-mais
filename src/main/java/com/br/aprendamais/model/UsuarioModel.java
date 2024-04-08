package com.br.aprendamais.model;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class UsuarioModel {

    private Integer id;

    private String nome;

    private String cpf;

    private Number telefone;

    private Number ddd;

    // Essa variável ainda não é certeza de que será utilizada.
    private String email;

    private Date dtNascimento;

    private Number cep;

    private String logradouro;

}
