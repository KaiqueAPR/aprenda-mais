package com.br.aprendamais.controller;

import com.br.aprendamais.request.UsuarioRequest;
import com.br.aprendamais.response.CodigoResponse;
import com.br.aprendamais.response.UsuarioResponse;
import com.br.aprendamais.service.CadastroUsuario;
import com.br.aprendamais.service.CadastroCodigoUsuario;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.Base64;

@RestController
@RequestMapping("/usuario")
@CrossOrigin("*")
public class CadastroUsuarioController {

    private final CadastroUsuario cadastroUsuarioService;
    private final CadastroCodigoUsuario cadastroCodigoUsuarioService;

    public CadastroUsuarioController(CadastroUsuario cadastroUsuarioService,CadastroCodigoUsuario cadastroCodigoUsuarioService) {
        this.cadastroUsuarioService = cadastroUsuarioService;
        this.cadastroCodigoUsuarioService = cadastroCodigoUsuarioService;
    }


    @RequestMapping("")
    public void login() {
    }

    @PostMapping("/novo")
    public UsuarioResponse novoUsuario(@RequestBody @Valid UsuarioRequest usuarioRequest) {
        return cadastroUsuarioService.novoUsuario(usuarioRequest);
    }

    @PostMapping("/autenticar/{id}")
    public UsuarioResponse autenticarUsuario (@RequestHeader @Valid Integer id){
        return cadastroUsuarioService.autenticarUsuario(id);
    }

    @GetMapping("/validaconta/consulta/{codigo}")
    public CodigoResponse cadastroCodigoUsuario (@PathVariable String codigo){
        // Decodifica de Base64
        byte[] decodeByte = Base64.getDecoder().decode(codigo);
        String decodeValue = new String(decodeByte);

        String[] test = decodeValue.split(";");
        Integer numCodigo = Integer.valueOf(test[0].replace("codigo=",""));
        String email = test[1].replace("email=","");

        return cadastroCodigoUsuarioService.verificaCodigo(numCodigo,email);
    }
}
