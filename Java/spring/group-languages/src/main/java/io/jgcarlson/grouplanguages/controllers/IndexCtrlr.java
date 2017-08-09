package io.jgcarlson.grouplanguages.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import io.jgcarlson.grouplanguages.models.Language;
import io.jgcarlson.grouplanguages.services.LanguageService;

@Controller
public class IndexCtrlr {
	
	private final LanguageService languageService;
	
	public IndexCtrlr(LanguageService languageService) {
		this.languageService = languageService;
	}
	
	@RequestMapping("/")
	public String index(@ModelAttribute("language") Language language, Model model) {
		List<Language> languages = languageService.allLanguages();
		model.addAttribute("languages", languages);
		return "index.jsp";
	}
	
	@PostMapping("/add")
	public String add(@Valid @ModelAttribute("language") Language language, BindingResult result, RedirectAttributes r) {
		if (result.hasErrors()) {
			r.addFlashAttribute("errors", "Nope. Try again.");
			return "redirect:/";
		} else {
			languageService.addLanguage(language);
			return "redirect:/";
		}
	}
	
	
	
	
}
