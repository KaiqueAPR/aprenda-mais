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

import com.br.aprendamais.service.ChatBotWhatsApp;

import java.io.*;
import java.util.Optional;

import java.util.stream.Collectors;

@Service
public class CadastroUsuario extends EnviaEmail {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private CadastroCodigoUsuario cadastroCodigoUsuario;

    @Autowired
    private  ChatBotWhatsApp chatBotWhatsApp;

    /*Método responsável por criar um novo Usuário*/
    public UsuarioResponse novoUsuario(@RequestBody @Valid UsuarioRequest usuarioRequest) {
        //var token = chatBotWhatsApp.gerarToken();

        UsuarioModel usuarioModel = new UsuarioModel();
        usuarioModel.setCkAutenticacao(false);
        BeanUtils.copyProperties(usuarioRequest, usuarioModel);
        usuarioModel = usuarioRepository.save(usuarioModel);


        // Caminho do arquivo HTML
        String filePath = "src/main/java/com/br/aprendamais/templates/EmailAutenticacao.html";
        String corpoEmail = "";

        // Tenta ler o arquivo html que tem o email
        try {
            //cadastroCodigoUsuario.salvaCodigo(100,usuarioModel.getDtNascimento());
            corpoEmail = readFile(filePath);
            corpoEmail = corpoEmail.replace("#codigo",cadastroCodigoUsuario.salvaCodigo(usuarioModel.getId(),usuarioModel.getDtNascimento()));
            corpoEmail = corpoEmail.replace("#nome",usuarioModel.getNome());

        } catch (Exception ex) {
            System.out.println(ex.getMessage());
            corpoEmail = "<p>Ola #nome ,</p><br><p>O seu codigo e #codigo</p>";

            // Rescrevo a tag #codigo
            corpoEmail = corpoEmail.replace("#codigo",cadastroCodigoUsuario.salvaCodigo(usuarioModel.getId(),usuarioModel.getDtNascimento()));

            // Rescrevo a tag #nome para o nome do aluno cadastrado , que vai ser enviado por email
            corpoEmail = corpoEmail.replace("#nome",usuarioModel.getNome());
        }

        String tituloEmail = "Aprenda + - Código de Autenticação";

        //Envio de autenticação de e-mail
        enviarEmail(usuarioModel.getEmail(), tituloEmail, corpoEmail);



        return converteParaDto(usuarioModel);
    }

    public UsuarioResponse autenticarUsuario(Integer id){
        UsuarioModel usuario = pesquisaUsuario(id);
        if (!usuario.isCkAutenticacao()) {
            usuario.setCkAutenticacao(true);
            usuarioRepository.save(usuario);
        }
        return converteParaDto(usuario);
    }

    /*Método responsável por localizar um Usuário através do seu ID*/
    public UsuarioModel pesquisaUsuario(Integer id) {
        Optional<UsuarioModel> optional = usuarioRepository.findById(id);
        if (optional.isEmpty()) {
            throw new UsuarioNotFound("O Usuário que você tentou localizar não existe.");
        }
        return optional.get();
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

   /* private  static String readHTMLFile(String filePath) {
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
*/

    private static String readFile (String filePath) throws IOException {
        File file = new File(filePath);
        BufferedReader bufferedReader = new BufferedReader(new FileReader(file));

        // Lê as linhas do arquivo e junta em uma única string, depois divide em um array
        String valorLido = bufferedReader.lines().collect(Collectors.joining("\n"));

        // Imprime a lista resultante
        System.out.println(valorLido);

        // Fechar o BufferedReader
        bufferedReader.close();

        return valorLido;
    }





}