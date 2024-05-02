package com.br.aprendamais.service;

import com.br.aprendamais.configs.exceptions.UsuarioNotFound;
import com.br.aprendamais.model.UsuarioModel;
import com.br.aprendamais.repository.UsuarioRepository;
import com.br.aprendamais.request.UsuarioRequest;
import com.br.aprendamais.response.UsuarioResponse;
import jakarta.validation.Valid;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import javax.mail.MessagingException;
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.Optional;

@Service
public class CadastroUsuario extends EnviaEmail {

    @Autowired
    private UsuarioRepository usuarioRepository;

    /*Método responsável por criar um novo Usuário*/
    public UsuarioResponse novoUsuario(@RequestBody @Valid UsuarioRequest usuarioRequest) {
        UsuarioModel usuarioModel = new UsuarioModel();
        BeanUtils.copyProperties(usuarioRequest, usuarioModel);
        usuarioModel = usuarioRepository.save(usuarioModel);

        // Caminho do arquivo HTML
        String filePath = "C:\\Projetos\\Fontes\\aprenda-mais\\src\\main\\java\\com\\br\\aprendamais\\templates\\EmailAutenticacao.html";

        // Ler o conteúdo do arquivo HTML
        String corpoEmail = readHTMLFile(filePath);

        String tituloEmail = "Aprenda+ - Código de Autenticação";

        //Envio de autenticação de e-mail
        enviarEmail(usuarioModel.getEmail(), tituloEmail, corpoEmail);

        return converteParaDto(usuarioModel);
    }

    /*Método responsável por localizar um Usuário através do seu ID*/
    public UsuarioResponse pesquisaUsuario(Integer id) {
        Optional<UsuarioModel> optional = usuarioRepository.findById(id);
        if (optional.isEmpty()) {
            throw new UsuarioNotFound("O Usuário que você tentou localizar não existe.");
        }
        return converteParaDto(optional.get());
    }

    /*Método responsável por converter um objeto para DTO*/
    private UsuarioResponse converteParaDto(@RequestBody @Valid UsuarioModel usuarioModel) {
        UsuarioResponse usuarioResponse = new UsuarioResponse();
        usuarioResponse.setCep(usuarioModel.getCep());
        usuarioResponse.setCpf(usuarioModel.getCpf());
        usuarioResponse.setDdd(usuarioModel.getDdd());
        usuarioResponse.setEmail(usuarioModel.getEmail());
        usuarioResponse.setNome(usuarioModel.getNome());
        usuarioResponse.setLogradouro(usuarioModel.getLogradouro());
        usuarioResponse.setTelefone(usuarioModel.getTelefone());
        usuarioResponse.setDtNascimento(usuarioModel.getDtNascimento());

        return usuarioResponse;
    }
    private static String readHTMLFile(String filePath) {
        StringBuilder contentBuilder = new StringBuilder();
        try (BufferedReader br = new BufferedReader(new FileReader(filePath))) {
            String line;
            while ((line = br.readLine()) != null) {
                contentBuilder.append(line).append("\n"); // Adiciona uma nova linha
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return contentBuilder.toString();
    }

}