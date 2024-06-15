package com.br.aprendamais;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.web.bind.annotation.GetMapping;

@SpringBootApplication
@EnableAsync
public class AprendaMaisApplication {

	public static void main(String[] args) {
		SpringApplication.run(AprendaMaisApplication.class, args);
	}

}
