package com.br.aprendamais.service;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.br.aprendamais.configs.exceptions.UsuarioNotFound;
import com.br.aprendamais.model.UsuarioModel;
import com.br.aprendamais.repository.UsuarioRepository;
import com.br.aprendamais.request.UsuarioRequest;
import com.br.aprendamais.response.UsuarioResponse;

import jakarta.validation.Valid;


@Service
public class CadastroUsuario {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private CadastroCodigoUsuario cadastroCodigoUsuario;

    @Autowired
    private ChatBotWhatsApp chatBotWhatsApp;

    @Autowired
    private EnviaEmail enviaEmail;

    public CadastroUsuario(UsuarioRepository usuarioRepository, EnviaEmail enviaEmail) {
        this.usuarioRepository = usuarioRepository;
        this.enviaEmail = enviaEmail;
    }

    public CadastroUsuario() {
        super();
    }

    /* Método responsável por criar um novo Usuário */
    public UsuarioResponse novoUsuario(UsuarioRequest usuarioRequest) {
        UsuarioModel usuarioModel = new UsuarioModel();
        usuarioModel.setCkAutenticacao(false);
        BeanUtils.copyProperties(usuarioRequest, usuarioModel);
        usuarioModel = usuarioRepository.save(usuarioModel);

        // Caminho do arquivo HTML
        String filePath = "src/main/java/com/br/aprendamais/templates/EmailAutenticacao.html";
        String corpoEmail = "";

        /*Gera Codigo*/
        String codigo = cadastroCodigoUsuario.salvaCodigo(usuarioModel.getId(), usuarioModel.getDtNascimento());


        /*
         * OBS: Como a rotina de Whatsapp ainda nao esta 100% mapeada ,
         * eu trato ela de forma assincrona
         * */
        try {
            /* Whatsapp */
            String wppMessage = "Olá! *#nome* \\nBem-vindo(a) à Aprenda ➕\\nEstamos aqui para ajudar você a adquirir as habilidades necessárias \\npara avançar na sua carreira profissional \uD83C\uDF93\uD83D\uDCA1 \\nSeu código de validação é *#codigo*. Ele expira em 30 minutos.\\r \\nCaso ele venha a expirar voce pode solicitar um novo no link \n#link  \\nSe precisar de ajuda, conte conosco. Vamos juntos rumo ao sucesso! \uD83D\uDE80";
            wppMessage = wppMessage.replace("#nome", usuarioModel.getNome());
            wppMessage = wppMessage.replace("#codigo", codigo);
            wppMessage = wppMessage.replace("#link", "https://app.aprenda-mais.cloud/recuperar-senha");
            chatBotWhatsApp.enviarMensagem(String.valueOf("55" + usuarioModel.getDdd() + usuarioModel.getTelefone()), wppMessage);
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }

        // Tenta ler o arquivo html que tem o email
        try {
            /* Email*/
            corpoEmail = readFile(filePath);
            corpoEmail = corpoEmail.replace("#codigo", codigo);
            corpoEmail = corpoEmail.replace("#nome", usuarioModel.getNome());

        } catch (Exception ex) {
            System.out.println(ex.getMessage());

            // Caso não consiga ler o arquivo html , manda um texto simples por email
            corpoEmail = "<p>Ola #nome ,</p><br><p>O seu codigo e #codigo</p>";

            // Rescrevo a tag #codigo
            corpoEmail = corpoEmail.replace("#codigo", cadastroCodigoUsuario.salvaCodigo(usuarioModel.getId(), usuarioModel.getDtNascimento()));

            // Rescrevo a tag #nome para o nome do aluno cadastrado , que vai ser enviado por email
            corpoEmail = corpoEmail.replace("#nome", usuarioModel.getNome());
        }

        String tituloEmail = "Aprenda + - Código de Autenticação";

        // Envio de autenticação de e-mail
        enviaEmail.enviarEmail(usuarioModel.getEmail(), tituloEmail, corpoEmail);

        return converteParaDto(usuarioModel);
    }

    public UsuarioResponse autenticarUsuario(Integer id) {
        UsuarioModel usuario = pesquisaUsuario(id);
        if (!usuario.isCkAutenticacao()) {
            usuario.setCkAutenticacao(true);
            usuarioRepository.save(usuario);
        }
        return converteParaDto(usuario);
    }

    /* Método responsável por localizar um Usuário através do seu ID */
    public UsuarioModel pesquisaUsuario(Integer id) {
        Optional<UsuarioModel> optional = usuarioRepository.findById(id);
        if (optional.isEmpty()) {
            throw new UsuarioNotFound("O Usuário que você tentou localizar não existe.");
        }
        return optional.get();
    }

    /* Método responsável por converter um objeto para DTO */
    public UsuarioResponse converteParaDto(@RequestBody @Valid UsuarioModel usuarioModel) {
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
*/

    private static String readFile(String filePath) throws IOException {
        File file = new File(filePath);
        BufferedReader bufferedReader = new BufferedReader(new FileReader(file));

        // Lê as linhas do arquivo e junta em uma única string, depois divide em um array
        String valorLido = bufferedReader.lines().collect(Collectors.joining("\n"));

        // Imprime a lista resultante
        //System.out.println(valorLido);

        // Fechar o BufferedReader
        bufferedReader.close();

        return valorLido;
    }


}