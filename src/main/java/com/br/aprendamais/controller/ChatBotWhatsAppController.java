package com.br.aprendamais.controller;

import com.br.aprendamais.bean.ChatBotWhatsAppBean;
import com.br.aprendamais.service.ChatBotWhatsApp;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/chat")
public class ChatBotWhatsAppController {

    @Autowired
    private ChatBotWhatsApp chatBotWhatsApp;

    @PostMapping("/token")
    public String gerarToken(){
        return chatBotWhatsApp.gerarToken();
    }

    @PostMapping("/enviarMensagem")
    public void enviarMensagem(@RequestBody @Valid ChatBotWhatsAppBean chatBotWhatsAppBean){
        chatBotWhatsApp.enviarMensagem(chatBotWhatsAppBean.getTelefone(), chatBotWhatsAppBean.getMensagem(), chatBotWhatsAppBean.getSession());
    }

}
