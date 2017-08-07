package com.web.stringassignment;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class StringAssignmentApplication {

	public static void main(String[] args) {
		SpringApplication.run(StringAssignmentApplication.class, args);
	}
	
	@RequestMapping("/")
	public String greeting() {
		return "Hello user. This is so great.";
	}
	
	@RequestMapping("/random")
	public String random() {
		return "Spring is great, I guess?";
	}
}
