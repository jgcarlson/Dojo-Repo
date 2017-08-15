package io.jgcarlson.countries.controllers;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import io.jgcarlson.countries.models.Country;
import io.jgcarlson.countries.models.Language;
import io.jgcarlson.countries.services.ApiService;

@Controller
public class IndexController {
	
	private ApiService api;
	
	public IndexController(ApiService api) {
		this.api = api;
	}
	
	@RequestMapping("/")
	public String index(Model model) {
		List<Object[]> stuffs = api.getRegionCountryCount();
		model.addAttribute("stuffs", stuffs);
		return "index.jsp";
	}

}
