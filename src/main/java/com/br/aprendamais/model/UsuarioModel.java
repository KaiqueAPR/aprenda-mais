package com.br.aprendamais.model;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

import java.util.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class UsuarioModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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
