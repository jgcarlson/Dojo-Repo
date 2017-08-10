package io.jgcarlson.dojoandninjas.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import io.jgcarlson.dojoandninjas.models.Ninja;
import io.jgcarlson.dojoandninjas.services.NinjaService;

@Controller
public class DisplayCtrlr {
	
	private NinjaService ninjaService;
	
	public DisplayCtrlr(NinjaService ninjaService) {
		this.ninjaService = ninjaService;
	}
	
	@RequestMapping("/dojos/{dojo}")
	public String display(@PathVariable("dojo") String d, Model model) {
		Iterable<Ninja> ninjas = ninjaService.findByDojo(d);
		model.addAttribute("ninjas", ninjas);
		return "displayView.jsp";
	}

}
