package io.jgcarlson.events.controllers;

import org.springframework.stereotype.Controller;

import io.jgcarlson.events.services.CommentService;

@Controller
public class CommentController {
	
	private CommentService commentService;
	
	public CommentController(CommentService commentService) {
		this.commentService = commentService;
	}

}
