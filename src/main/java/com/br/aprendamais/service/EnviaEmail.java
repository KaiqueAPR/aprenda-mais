package com.br.aprendamais.service;

import com.br.aprendamais.model.UsuarioModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Properties;
import javax.mail.Address;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

@Service
public class EnviaEmail {

    @Autowired
    private static UsuarioModel usuarioModel;

    public static void enviarEmail(String emailDestinatario, String tituloEmail, String corpoEmail) {
        Properties props = new Properties();

        /* Parâmetros de conexão com servidor Outlook */
        props.put("mail.smtp.host", "smtp-mail.outlook.com");
        props.put("mail.smtp.socketFactory.port", "587");
        props.put("mail.smtp.socketFactory.class",
                "javax.net.ssl.SSLSocketFactory");
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.sendpartial", "true");
        props.put("mail.smtp.port", "587");

        Session session = Session.getDefaultInstance(props,
                new javax.mail.Authenticator() {
                    protected PasswordAuthentication getPasswordAuthentication()
                    {
                        return new PasswordAuthentication(
                                "aprenda_mais_@hotmail.com",
                                "Aprenda+123");
                    }
                });

        /* Ativa Debug para sessão */
        session.setDebug(true);

        try {
            Message message = new MimeMessage(session);
            message.setFrom(new InternetAddress("aprenda_mais_@hotmail.com"));
            message.setContent(corpoEmail, "text/html"); // Configura o conteúdo como HTML
            Address[] toUser = InternetAddress.parse(emailDestinatario);
            message.setRecipients(Message.RecipientType.TO, toUser);
            message.setSubject(tituloEmail);

            /* Método para enviar a mensagem criada */
            Transport.send(message);

            System.out.println("E-mail enviado com sucesso!");
        } catch (MessagingException e) {
            System.out.println("Erro ao enviar e-mail: " + e.getMessage());
            throw new RuntimeException(e);
        }

    }

}
