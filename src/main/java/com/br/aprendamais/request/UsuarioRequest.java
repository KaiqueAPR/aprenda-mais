package com.br.aprendamais.request;

import jakarta.validation.constraints.*;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;

@Builder
@Data
public class UsuarioRequest {

    @NotBlank(message = "Nome deve ser preenchido!")
    @NotNull(message = "Nome não pode ser nulo!")
    @Size(max = 255, message = "Nome deve conter no máximo 255 caracteres!")
    private String nome;

    @NotBlank(message = "CPF deve ser preenchido!")
    @NotNull(message = "CPF não pode ser nulo!")
    @Size(max = 14, message = "CPF deve conter no máximo 14 caracteres!")
    private String cpf;

    @NotNull(message = "Telefone não pode ser nulo!")
    private Integer telefone;

    @NotNull(message = "DDD não pode ser nulo!")
    private Integer ddd;

    @NotBlank(message = "Email deve ser preenchido!")
    @NotNull(message = "Email não pode ser nulo!")
    @Email(message = "Email inválido!")
    @Size(max = 255, message = "Email deve ter no máximo 255 caracteres!")
    private String email;

    @NotNull(message = "Data de Nascimento não pode ser nulo!")
    private LocalDate dtNascimento;

    @NotNull(message = "CEP não pode ser nulo!")
    private Integer cep;

    @NotBlank(message = "Logradouro deve ser preenchido!")
    @NotNull(message = "Logradouro não pode ser nulo!")
    @Size(max = 255, message = "Logradouro deve ter no máximo 255 caracteres!")
    private String logradouro;

    @NotBlank(message = "Senha deve ser preenchido!")
    @NotNull(message = "Senha não pode ser nulo!")
    @Size(max = 100, message = "Senha deve conter no máximo 100 caracteres!")
    private String senha;
}
