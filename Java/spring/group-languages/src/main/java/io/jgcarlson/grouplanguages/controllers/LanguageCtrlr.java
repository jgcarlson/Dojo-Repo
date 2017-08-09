package io.jgcarlson.grouplanguages.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import io.jgcarlson.grouplanguages.models.Language;
import io.jgcarlson.grouplanguages.services.LanguageService;

@Controller
public class LanguageCtrlr {
	
	private final LanguageService languageService;
	
	public LanguageCtrlr(LanguageService languageService) {
		this.languageService = languageService;
	}
	
	@RequestMapping("/languages/{id}")
	public String index(@PathVariable("id") int id, Model model) {
		Language language = languageService.findByIndex(id);
		model.addAttribute("language", language);
		model.addAttribute("id", id);
		return "LanguageView.jsp";
	}
}
