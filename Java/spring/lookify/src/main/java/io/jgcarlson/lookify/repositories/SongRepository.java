package io.jgcarlson.lookify.repositories;

import org.springframework.data.repository.CrudRepository;

import io.jgcarlson.lookify.models.Song;

public interface SongRepository extends CrudRepository<Song, Long> {
	
	Iterable<Song> findByOrderByRatingDesc();
	Iterable<Song> findByNameContaining(String query);
	
}
