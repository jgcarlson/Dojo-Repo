package io.jgcarlson.events.services;

import java.util.List;

import org.springframework.stereotype.Service;

import io.jgcarlson.events.models.Comment;
import io.jgcarlson.events.models.Event;
import io.jgcarlson.events.models.User;
import io.jgcarlson.events.repositories.CommentRepository;

@Service
public class CommentService {
	
	private CommentRepository commentRepository;
	
	public CommentService(CommentRepository commentRepository) {
		this.commentRepository = commentRepository;
	}
	
	public List<Comment> findCommentsByEvent(Long id) {
		return commentRepository.findCommentsByEvent(id);
	}
	
	public void saveComment(Comment comment, Event event, User user) {
		comment.setUser(user);
		comment.setEvent(event);
		commentRepository.save(comment);
	}

}
