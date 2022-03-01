package com.recruitment.project;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class RecruitmentManagementWebApplication {

	public static void main(String[] args) {
		SpringApplication.run(RecruitmentManagementWebApplication.class, args);
		System.out.println("Application Started---------------------------RecruitmentManagementWebApplication--------------------");
	}
	

}
