package com.br.aprendamais.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Data;

import java.util.Date;

@Builder
@Data
public class UsuarioRequest {

    @NotBlank(message = "Nome deve ser preenchido!")
    @NotNull(message = "Nome não pode ser nulo!")
    @Size(max = 255, message = "Nome deve conter no máximo 200 caracteres!")
    private String nome;

    @NotBlank(message = "CPF deve ser preenchido!")
    @NotNull(message = "CPF não pode ser nulo!")
    @Size(max = 14, message = "CPF deve conter no máximo 11 caracteres!")
    private String cpf;

    @NotBlank(message = "Telefone deve ser preenchido!")
    @NotNull(message = "Telefone não pode ser nulo!")
    @Size(min = 10, max = 11, message = "Telefone deve conter entre 10 e 11 números!")
    private Number telefone;

    @NotBlank(message = "DDD deve ser preenchido!")
    @NotNull(message = "DDD não pode ser nulo!")
    @Size(max = 2, message = "DDD deve conter 2 números!")
    private Number ddd;

    @NotBlank(message = "Email deve ser preenchido!")
    @NotNull(message = "Email não pode ser nulo!")
    @Email(message = "Email inválido!")
    @Size(max = 255, message = "Email deve ter no máximo 200 caracteres!")
    private String email;

    @NotBlank(message = "Data de Nascimento deve ser preenchido!")
    @NotNull(message = "Data de Nascimento não pode ser nulo!")
    private Date dtNascimento;

    @NotBlank(message = "CEP deve ser preenchido!")
    @NotNull(message = "CEP não pode ser nulo!")
    @Size(max = 9, message = "CEP deve ter no máximo 9 caracteres!")
    private Number cep;

    @NotBlank(message = "Logradouro deve ser preenchido!")
    @NotNull(message = "Logradouro não pode ser nulo!")
    @Size(max = 255, message = "Logradouro deve ter no máximo 300 caracteres!")
    private String logradouro;
}
