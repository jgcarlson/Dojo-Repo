package io.jgcarlson.thecode.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class CodeCtrlr {
	
	@RequestMapping("/")
	public String index() {
		return "index.jsp";
	}
	
}
