package io.jgcarlson.grouplanguages.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class LanguageCtrlr {
	@RequestMapping("/languages/edit/{id}")
	public String index(@PathVariable("id") int id) {
		return "LanguageView.jsp";
	}
}
