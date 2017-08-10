package io.jgcarlson.dojoandninjas.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import io.jgcarlson.dojoandninjas.models.Dojo;
import io.jgcarlson.dojoandninjas.services.DojoService;;

@Controller
public class NewDojoCtrlr {
	
	private DojoService dojoService;
	
	public NewDojoCtrlr(DojoService dojoService) {
		this.dojoService = dojoService;
	}

	@RequestMapping("/")
	public String index(Model model) {
		Iterable<Dojo> dojos = dojoService.allDojos();
		model.addAttribute("dojos", dojos);
		return "index.jsp";
	}
	
	@RequestMapping("/dojos/new")
	public String newDojoView(@ModelAttribute("dojo") Dojo dojo) {
		return "newDojoView.jsp";
	}
	
	@PostMapping("/dojos/new")
	public String newDojo(@ModelAttribute("dojo") Dojo dojo, BindingResult result) {
		if (result.hasErrors()) {
			return "newDojoView.jsp";
		} else {
			dojoService.addDojo(dojo);
			return "redirect:/";
		}
	}
}
