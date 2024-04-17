package com.br.aprendamais.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class UsuarioResponse {

    private String nome;

    private String cpf;

    private Integer telefone;

    private Integer ddd;

    private String email;

    private LocalDate dtNascimento;

    private Integer cep;

    private String logradouro;

}
