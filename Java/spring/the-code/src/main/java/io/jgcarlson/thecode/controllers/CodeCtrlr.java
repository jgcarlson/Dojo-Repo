package io.jgcarlson.thecode.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
public class CodeCtrlr {
	
	@RequestMapping("/")
	public String index() {
		return "index.jsp";
	}
	
	@RequestMapping(path="/", method=RequestMethod.POST)
	public String index(@RequestParam("code") String code, RedirectAttributes r) {
		if (code.equals("bushido")) {
			return "redirect:/code";
		} else {
			r.addFlashAttribute("error", "Try again, padawan.");
			return "redirect:/";
		}
	}
	
	@RequestMapping("/code")
	public String code() {
		return "CodeView.jsp";
	}
	
}
