package io.jgcarlson.learningplatform.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/m/")
public class IndexCtrlr {
	
	@RequestMapping("/")
	public String index() {
		return "index.jsp";
	}
	
	@RequestMapping("/{chapter}/{template}/{assignment}")
	public String index(@PathVariable("template") String template) {
		if (template.equals("0553")) {
			return "LessonView.jsp";
		} else if (template.equals("0483")) {
			return "AssignmentView.jsp";
		} else {
			System.out.println("Error error error. Self-destructing in 3, 2, 1....");
			return "index.jsp";
		}
	}
}
