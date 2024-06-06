package com.br.aprendamais.bean;

import lombok.Data;

@Data
public class ChatBotWhatsAppBean {
    private String telefone;
    private String mensagem;
    private String session;
}
