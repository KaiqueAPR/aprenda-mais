package com.br.aprendamais.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "usuario_codigo")
public class UsuarioCodigoModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "codigo")
    private Integer codigo;

    @Column(name = "usuario_id")
    private Integer idUsuario;

    @Column(name = "data_expiracao")
    private LocalDateTime dtExpiracao;



}