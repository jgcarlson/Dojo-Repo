package com.web.displaydate.controllers;

import java.util.Date;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class TimeController {
	
	Date time = new Date();
	
	@RequestMapping("/time")
	public String time(Model model) {
		model.addAttribute("time", time);
		return "timeView.jsp";
	}
	
}
