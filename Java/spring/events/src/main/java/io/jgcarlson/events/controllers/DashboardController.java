package io.jgcarlson.events.controllers;

import java.security.Principal;
import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import io.jgcarlson.events.models.Event;
import io.jgcarlson.events.models.User;
import io.jgcarlson.events.services.EventService;
import io.jgcarlson.events.services.UserService;

@Controller
public class DashboardController {
	
	private UserService userService;
	private EventService eventService;
	
	private DashboardController(UserService userService, EventService eventService) {
		this.userService = userService;
		this.eventService = eventService;
	}
	
	@RequestMapping("/")
	public String index() {
		return "redirect:/dashboard";
	}
	
	@RequestMapping("/dashboard")
	public String dashboard(Principal principal, Model model, @ModelAttribute("event") Event event) {
        String username = principal.getName();
        User user = userService.findByUsername(username);
        model.addAttribute("user", user);
        List<Event> instate = eventService.getEventsByState(user.getState());
        model.addAttribute("instate", instate);
        List<Event> outstate = eventService.getEventsOutOfState(user.getState());
        model.addAttribute("outstate", outstate);
		return "index.jsp";
	}
	
	@PostMapping("/events/add")
	public String addEvent(Principal principal, @Valid @ModelAttribute("event") Event event, BindingResult result) {
		if (result.hasErrors()) {
			System.out.println("Errors.");
		} else {
			String username = principal.getName();
			User user = userService.findByUsername(username);
			event.setHost(user);
			eventService.saveEvent(event);
		}
		return "redirect:/dashboard";
	}

}
