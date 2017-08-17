package io.jgcarlson.events.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import io.jgcarlson.events.models.Comment;

@Repository
public interface CommentRepository extends CrudRepository<Comment, Long> {
	
	@Query("SELECT c FROM Comment c JOIN c.event AS event WHERE event.id = ?1")
	List<Comment> findCommentsByEvent(Long id);

}
