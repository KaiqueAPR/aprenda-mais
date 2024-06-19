package com.br.aprendamais.serviceTest;

import com.br.aprendamais.model.UsuarioModel;
import com.br.aprendamais.repository.UsuarioRepository;
import com.br.aprendamais.request.UsuarioRequest;
import com.br.aprendamais.response.UsuarioResponse;
import com.br.aprendamais.service.CadastroUsuario;
import com.br.aprendamais.service.EnviaEmail;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

import java.time.LocalDate;

@ExtendWith(MockitoExtension.class)
public class CadastroUsuarioTest {

    @Mock
    private UsuarioRepository usuarioRepository;

    @Mock
    private EnviaEmail enviaEmail;

    private CadastroUsuario makeSUT() {
        return new CadastroUsuario(usuarioRepository, enviaEmail);
    }

    @Test
    void novoUsuario_mustRegisterUser_whenValidDataIsGiven() {
        // arrange
        UsuarioRequest usuarioRequest = createValidUsuarioRequest();

        when(usuarioRepository.save(any(UsuarioModel.class))).thenReturn(getUsuarioModel());

        var sut = makeSUT();

        // act
        UsuarioResponse testResponse = sut.novoUsuario(usuarioRequest);

        // assert
        assertNotNull(testResponse);
        assertEquals("kaiquepinho2010@hotmail.com", testResponse.getEmail());

        verify(usuarioRepository, times(1)).save(any(UsuarioModel.class));

    }

    private UsuarioModel getUsuarioModel() {
        UsuarioModel usuarioModelSalvo = new UsuarioModel();
        usuarioModelSalvo.setId(1);
        usuarioModelSalvo.setNome("Jayson Tatum");
        usuarioModelSalvo.setCpf("123.456.789-00");
        usuarioModelSalvo.setTelefone(999999999);
        usuarioModelSalvo.setDdd(11);
        usuarioModelSalvo.setEmail("kaiquepinho2010@hotmail.com");
        usuarioModelSalvo.setDtNascimento(LocalDate.of(1990, 1, 1));
        usuarioModelSalvo.setCep(12345678);
        usuarioModelSalvo.setLogradouro("Rua Exemplo");
        usuarioModelSalvo.setSenha("senha123");
        return usuarioModelSalvo;
    }

    private UsuarioRequest createValidUsuarioRequest() {
        UsuarioRequest usuarioRequest = UsuarioRequest.builder()
                .nome("Jayson Tatum")
                .cpf("123.456.789-00")
                .telefone(999999999)
                .ddd(11)
                .email("kaiquepinho2010@hotmail.com")
                .dtNascimento(LocalDate.of(1990, 1, 1))
                .cep(12345678)
                .logradouro("Rua Exemplo")
                .senha("senha123")
                .build();
        return usuarioRequest;
    }
}
