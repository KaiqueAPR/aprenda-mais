package com.br.aprendamais.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "usuario")
public class UsuarioModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "nome")
    private String nome;

    @Column(name = "cpf")
    private String cpf;

    @Column(name = "telefone")
    private Integer telefone;

    @Column(name = "codigo_ddd")
    private Integer ddd;

    @Column(name = "email")
    private String email;

    @Column(name = "data_nascimento")
    private LocalDate dtNascimento;

    @Column(name = "cep")
    private Integer cep;

    @Column(name = "logradouro")
    private String logradouro;

    @Column(name = "senha")
    private String senha;

    @Column(name = "ckAutenticacao")
    private boolean ckAutenticacao;

    @Column(name = "contavalida")
    private boolean contaValida;

}
