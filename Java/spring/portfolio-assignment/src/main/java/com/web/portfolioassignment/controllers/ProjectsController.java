package com.web.portfolioassignment.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ProjectsController {
	@RequestMapping("/myprojects")
	public String projects() {
		return "forward:/projects.html";
	}
}
