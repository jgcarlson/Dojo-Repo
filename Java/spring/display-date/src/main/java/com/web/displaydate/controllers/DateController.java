package com.web.displaydate.controllers;

import java.util.Date;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class DateController {
	
	Date date = new Date();
	
	@RequestMapping("/date")
	public String date(Model model) {
		model.addAttribute("date", date);
		return "dateView.jsp";
	}

}
