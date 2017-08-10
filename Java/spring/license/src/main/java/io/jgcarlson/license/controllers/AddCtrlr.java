package io.jgcarlson.license.controllers;

import java.util.concurrent.atomic.AtomicInteger;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import io.jgcarlson.license.models.License;
import io.jgcarlson.license.models.Person;
import io.jgcarlson.license.services.LicenseService;
import io.jgcarlson.license.services.PersonService;

@Controller
public class AddCtrlr {
	
	private PersonService personService;
	private LicenseService licenseService;
	
	public AddCtrlr(PersonService personService, LicenseService licenseService) {
		this.personService = personService;
		this.licenseService = licenseService;
	}
	
	@RequestMapping("/person/new")
	public String person(@ModelAttribute("person") Person person) {
		return "index.jsp";
	}
	
	@PostMapping("/person/new")
	public String addPerson(@Valid @ModelAttribute Person person, BindingResult result) {
		if (result.hasErrors()) {
			return "index.jsp";
		} else {
			personService.addPerson(person);
			return "redirect:/license/new";
		}
	}
	
	@RequestMapping("/license/new")
	public String license(@ModelAttribute("license") License license, Model model) {
		Iterable<Person> people = personService.getPeople();
		model.addAttribute("people", people);
		return "licenseView.jsp";
	}
	
	@PostMapping("/license/new")
	public String addLicense(@Valid @ModelAttribute("license") License license, BindingResult result, Model model) {
		if (result.hasErrors()) {
			return "licenseView.jsp";
		} else {
			licenseService.addLicense(license);
			return "redirect:/person/view";
		}
	}
}
