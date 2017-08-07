package io.jgcarlson.counter.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class CounterCtrl {

	@RequestMapping("/counter")
	public String counter(HttpSession session, Model model) {
		if (session.getAttribute("counter") == null) {
			session.setAttribute("counter", 0);
		}
		model.addAttribute("counter", session.getAttribute("counter"));
		return "counterView.jsp";
	}
}
