package io.jgcarlson.dojooverflow.repositories;

import org.springframework.data.repository.CrudRepository;

import io.jgcarlson.dojooverflow.models.Tag;

public interface TagRepository extends CrudRepository<Tag, Long> {
	public boolean findBySubject(String subject);
}
