package com.br.aprendamais.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class LoginRequest {
    @NotNull(message = "O E-mail ou o Número de Telefone não pode ser nulo!")
    private String login;

    @NotBlank(message = "A Senha deve ser preenchida!")
    @NotNull(message = "A Senha não pode ser nula!")
    @Size(max = 255, message = "A Senha deve conter no máximo 255 caracteres!")
    private String senha;
}
