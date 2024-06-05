package com.br.aprendamais.service;

import org.springframework.boot.configurationprocessor.json.JSONObject;
import org.springframework.stereotype.Service;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

@Service
public class ChatBotWhatsApp {

    public String gerarToken() {
        try {
            HttpClient httpClient = HttpClient.newHttpClient();

            String url = "https://wpp-api.duckdns.org/api/bot/THISISMYSECURETOKEN/generate-token";

            HttpRequest request = HttpRequest.newBuilder()
                    .uri(new URI(url))
                    .POST(HttpRequest.BodyPublishers.noBody())
                    .header("accept", "*/*")
                    .build();

            HttpResponse<String> response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());

            System.out.println("Response Code: " + response.statusCode());

            JSONObject jsonResponse = new JSONObject(response.body());

            return jsonResponse.getString("token");

        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public void enviarMensagem(String telefone, String mensagem, String session) {

        try {
            HttpClient httpClient = HttpClient.newHttpClient();

            String url = "https://wpp-api.duckdns.org/api/NERDWHATS_AMERICA/send-message";

            HttpRequest request = HttpRequest.newBuilder()
                    .uri(new URI(url))
                    .POST(HttpRequest.BodyPublishers.ofString("phone: " + telefone + ", isGroup: false, isNewsLetter: false, message: " + mensagem))
                    .header("session", session)
                    .build();

            HttpResponse<String> response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());

            System.out.println("Response Code: " + response.statusCode());

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}
