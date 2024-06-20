package com.br.aprendamais.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.stereotype.Service;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.text.MessageFormat;
import java.util.concurrent.CompletableFuture;

import com.br.aprendamais.bean.WppMessageModel;
import org.springframework.scheduling.annotation.Async;

@Configuration
@EnableAsync

@Service
public class ChatBotWhatsApp {
    private String session = "prod";
    private String apiKey = "test";

    @Async
    public void enviarMensagem(String telefone, String mensagem) {

        ObjectMapper mapeadorObjeto = new ObjectMapper();
        WppMessageModel wppObjeto = new WppMessageModel();
        WppMessageModel.TextMessage wppTexto = new WppMessageModel.TextMessage();

        // Definindo os valores
        wppTexto.setText(mensagem);
        wppObjeto.setTextMessage(wppTexto);
        wppObjeto.setNumber(telefone);

        try {

//            String body = "{\n" +
//                    "    \"number\": \"" + telefone + "\",\n" +
//                    "    \"textMessage\": {\n" +
//                    "\n        \"text\":  " +
//                    "           \"" + mensagem + "\"" +
//                    "\n}" +
//                    "\n}";

            String body = mapeadorObjeto.writeValueAsString(wppObjeto);

            HttpClient httpClient = HttpClient.newHttpClient();

            String url = "https://whatsapp.aprenda-mais.cloud/message/sendText/{0}";
            url = MessageFormat.format(url, session);

            HttpRequest request = HttpRequest.newBuilder()
                    .header("apiKey", apiKey)
                    .headers("Content-Type", "application/json")
                    .uri(new URI(url))
                    .POST(HttpRequest.BodyPublishers.ofString(body))
                    .build();

            CompletableFuture<HttpResponse<String>> futureResponse = httpClient.sendAsync(request, HttpResponse.BodyHandlers.ofString());

            //HttpResponse<String> response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());

            HttpResponse<String> response = futureResponse.join();

            System.out.println("Response Code: " + response.statusCode());
            //return null;
        } catch (Exception e) {
            System.out.println(e.getMessage());
            e.printStackTrace();
            //return null;
        }
    }

}
