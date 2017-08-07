package io.jgcarlson.hellohuman.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class NameCtrl {
	
	@RequestMapping("/")
	public String index(Model model) {
		model.addAttribute("data", "human");
		return "index.jsp";
	}
	
	@RequestMapping("/")
	public String index(@RequestParam(value="q", required=false) String searchQuery) {
		return "working";
	}
	
}
