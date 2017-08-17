package io.jgcarlson.events.controllers;

import java.security.Principal;
import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import io.jgcarlson.events.models.Comment;
import io.jgcarlson.events.models.Event;
import io.jgcarlson.events.models.User;
import io.jgcarlson.events.services.CommentService;
import io.jgcarlson.events.services.EventService;
import io.jgcarlson.events.services.UserService;

@Controller
public class EventController {
	
	private EventService eventService;
	private CommentService commentService;
	private UserService userService;
	
	public EventController(EventService eventService, CommentService commentService, UserService userService) {
		this.eventService = eventService;
		this.commentService = commentService;
		this.userService = userService;
	}
	
	@RequestMapping("/events/{id}")
	public String eventView(@PathVariable("id") Long id, Model model, @Valid @ModelAttribute("comment") Comment comment) {
		Event event = eventService.findEvent(id);
		model.addAttribute("event", event);
		List<Comment> comments = commentService.findCommentsByEvent(id);
		model.addAttribute("comments", comments);
		return "event-view.jsp";
	}
	
	@PostMapping("/events/{id}/comment")
	public String addComment(@PathVariable("id") Long id, @Valid @ModelAttribute("comment") Comment comment, BindingResult result, Principal principal) {
		if (result.hasErrors()) {
			return "event-view.jsp";
		} else {
			Event event = eventService.findEvent(id);
			String username = principal.getName();
			User user = userService.findByUsername(username);
			commentService.saveComment(comment, event, user);
		}
		return "redirect:/events/" + id;
	}
	
	@PostMapping("/events/{id}/join")
	public String joinEvent(@PathVariable("id") Long id, Principal principal) {
		String username = principal.getName();
		User user = userService.findByUsername(username);
		Event event = eventService.findEvent(id);
		eventService.joinEvent(event, user);
		return "redirect:/dashboard";
	}
	
	@PostMapping("/events/{id}/unjoin")
	public String unjoinEvent(@PathVariable("id") Long id, Principal principal) {
		String username = principal.getName();
		User user = userService.findByUsername(username);
		Event event = eventService.findEvent(id);
		eventService.unjoinEvent(event, user);
		return "redirect:/dashboard";
	}
	
	@RequestMapping("/events/{id}/edit")
	public String editEventView(@PathVariable("id") Long id, @Valid @ModelAttribute("event") Event editEvent, Principal principal, Model model) {
		String username = principal.getName();
		User user = userService.findByUsername(username);
		model.addAttribute("user", user);
		Event event = eventService.findEvent(id);
		model.addAttribute("event", event);
		return "edit-event-view.jsp";
	}
	
	@PostMapping("/events/{id}/edit")
	public String editEvent(@PathVariable("id") Long id, @Valid @ModelAttribute("event") Event editEvent, Principal principal) {
		String username = principal.getName();
		User user = userService.findByUsername(username);
		editEvent.setHost(user);
		eventService.saveEvent(editEvent);
		return "redirect:/dashboard";
	}
	
	@PostMapping("/events/{id}/delete")
	public String deleteEvent(@PathVariable("id") Long id) {
		Event event = eventService.findEvent(id);
		eventService.deleteEvent(event);
		return "redirect:/dashboard";
	}

}
