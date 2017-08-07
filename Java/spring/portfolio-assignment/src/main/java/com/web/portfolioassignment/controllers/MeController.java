package com.web.portfolioassignment.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MeController {
	@RequestMapping("/aboutme")
	public String me() {
		return "forward:/me.html";
	}
}
