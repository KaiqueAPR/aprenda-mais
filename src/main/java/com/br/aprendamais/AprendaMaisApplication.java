package com.br.aprendamais;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;

@SpringBootApplication
@EnableAsync
public class AprendaMaisApplication {

	public static void main(String[] args) {
		SpringApplication.run(AprendaMaisApplication.class, args);
	}

}
