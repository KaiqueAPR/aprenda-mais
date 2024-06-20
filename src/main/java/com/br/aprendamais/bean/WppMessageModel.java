package com.br.aprendamais.model;

import lombok.Data;

@Data
public class WppMessageModel {
    private String number;
    private TextMessage textMessage;

    @Data
    public static class TextMessage {
        private String text;
    }

}


