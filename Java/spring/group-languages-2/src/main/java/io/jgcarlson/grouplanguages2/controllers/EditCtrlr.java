package io.jgcarlson.grouplanguages2.controllers;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import io.jgcarlson.grouplanguages2.models.Language;
import io.jgcarlson.grouplanguages2.services.LanguageService;

@Controller
	public class EditCtrlr {
	
	private final LanguageService languageService;
	
	public EditCtrlr(LanguageService languageService) {
		this.languageService = languageService;
	}
	
	@RequestMapping("/languages/update/{id}")
	public String edit(@PathVariable("id") Long id, Model model) {
		Language language = languageService.findById(id);
		if (language != null) {
			model.addAttribute("language", language);
			model.addAttribute("id", id);
			return "EditView.jsp";
		} else {
			return "redirect:/";
		}
	}
	
	@PostMapping("/languages/update/{id}")
	public String edit(@PathVariable("id") Long id, @Valid @ModelAttribute("language") Language language, BindingResult result) {
		if (result.hasErrors()) {
			return "EditView.jsp";
		} else {
			languageService.update(language);
			return "redirect:/";
		}
	}
	
}
