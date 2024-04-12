package com.br.aprendamais.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class UsuarioResponse {

    private String nome;

    private String cpf;

    private Number telefone;

    private Number ddd;

    private String email;

    private Date dtNascimento;

    private Number cep;

    private String logradouro;

}
