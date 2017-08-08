package io.jgcarlson.ninjagold.controllers;

import java.util.ArrayList;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class IndexCtrl {
	
	ArrayList<String> notes = new ArrayList<String>();
	
	@RequestMapping("/")
	public String index(HttpSession session, Model model) {
		if (session.getAttribute("gold") == null) {
			session.setAttribute("gold", 0);
		}
		int gold = (int) session.getAttribute("gold");
		model.addAttribute("gold", gold);
		model.addAttribute("notes", notes);
		return "index.jsp";
	}
	
	@RequestMapping(path="/", method=RequestMethod.POST)
	public String login(HttpSession session, @RequestParam(value="action") String name) {
		int gold = (int) session.getAttribute("gold");
		if (name.equals("farm")) {
			int add = (int) Math.floor(Math.random() * 10) + 10;
			session.setAttribute("gold", gold + add);
			notes.add(0, "You got " + add + " gold!");
		} else if (name.equals("cave")) {
			int add = (int) Math.floor(Math.random() * 5) + 5;
			session.setAttribute("gold", gold + add);
			notes.add(0, "You got " + add + " gold!");
		} else if (name.equals("house")) {
			int add = (int) Math.floor(Math.random() * 3) + 2;
			session.setAttribute("gold", gold + add);
			notes.add(0, "You got " + add + " gold!");
		} else if (name.equals("casino")) {
			int add = (int) Math.floor(Math.random() * 51);
			int pos = (int) Math.floor(Math.random() * 2);
			if (pos == 0) {
				add -= (add * 2);
			}
			notes.add(0, "You got " + add + " gold!");
			session.setAttribute("gold", gold + add);
		}
		return "redirect:/";
	}

}
