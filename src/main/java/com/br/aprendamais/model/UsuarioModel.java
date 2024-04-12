package com.br.aprendamais.model;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.boot.autoconfigure.domain.EntityScan;

import java.util.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
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
    private Number telefone;

    @Column(name = "codigo_ddd")
    private Number ddd;

    @Column(name = "email")
    private String email;

    @Column(name = "data_nascimento")
    private Date dtNascimento;

    @Column(name = "cep")
    private Number cep;

    @Column(name = "logradouro")
    private String logradouro;

}
