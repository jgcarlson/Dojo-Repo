package io.jgcarlson.lookify.services;

import org.springframework.stereotype.Service;

import io.jgcarlson.lookify.models.Song;
import io.jgcarlson.lookify.repositories.SongRepository;

@Service
public class SongService {
	
	private SongRepository songRepository;
	
	public SongService(SongRepository songRepository) {
		this.songRepository = songRepository;
	}
	
	public Iterable<Song> allSongs() {
		return songRepository.findAll();
	}
	
	public void addSong(Song song) {
		songRepository.save(song);
	}
	
	public void deleteSong(Long id) {
		songRepository.delete(id);
	}
	
	public Iterable<Song> findTop10() {
		return songRepository.findByOrderByRatingDesc();
	}
	
	public Iterable<Song> search(String query) {
		return songRepository.findByNameContaining(query);
	}

}
