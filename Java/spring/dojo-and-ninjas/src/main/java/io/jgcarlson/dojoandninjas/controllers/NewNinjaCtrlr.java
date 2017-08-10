package io.jgcarlson.dojoandninjas.controllers;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import io.jgcarlson.dojoandninjas.models.Dojo;
import io.jgcarlson.dojoandninjas.models.Ninja;
import io.jgcarlson.dojoandninjas.services.DojoService;
import io.jgcarlson.dojoandninjas.services.NinjaService;

@Controller
public class NewNinjaCtrlr {
	
	private NinjaService ninjaService;
	private DojoService dojoService;
	
	public NewNinjaCtrlr(NinjaService ninjaService, DojoService dojoService) {
		this.ninjaService = ninjaService;
		this.dojoService = dojoService;
	}
	
	@RequestMapping("/ninjas/new")
	public String ninja(@ModelAttribute("ninja") Ninja ninja, Model model) {
		Iterable<Dojo> dojos = dojoService.allDojos();
		model.addAttribute("dojos", dojos);
		return "newNinjaView.jsp";
	}
	
	@PostMapping("/ninjas/new")
	public String newNinja(@Valid @ModelAttribute("ninja") Ninja ninja, BindingResult result) {
		if (result.hasErrors()) {
			return "newNinjaView.jsp";
		} else {
			ninjaService.addNinja(ninja);
			return "redirect:/ninjas/new";
		}
	}

}
