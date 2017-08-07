package io.jgcarlson.hellohuman.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class NameCtrl {

	@RequestMapping("/")
	public String index(@RequestParam(value="q", required=false) String searchQuery, Model model) {
		if (searchQuery != null) {
			model.addAttribute("name", searchQuery);
		} else {
			model.addAttribute("name", "human");
		}
		return "index.jsp";
	}
	
}
