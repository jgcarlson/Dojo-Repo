package io.jgcarlson.grouplanguages2.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import io.jgcarlson.grouplanguages2.models.Language;
import io.jgcarlson.grouplanguages2.services.LanguageService;

@Controller
public class LanguageCtrlr {
	
	private final LanguageService languageService;
	
	public LanguageCtrlr(LanguageService languageService) {
		this.languageService = languageService;
	}
	
	@RequestMapping("/languages/{id}")
	public String index(@PathVariable("id") Long id, Model model) {
		Language language = languageService.findById(id);
		model.addAttribute("language", language);
		model.addAttribute("id", id);
		return "LanguageView.jsp";
	}
}
