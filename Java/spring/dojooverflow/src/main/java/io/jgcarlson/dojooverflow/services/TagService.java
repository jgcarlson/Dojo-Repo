package io.jgcarlson.dojooverflow.services;

import org.springframework.stereotype.Service;

import io.jgcarlson.dojooverflow.models.Tag;
import io.jgcarlson.dojooverflow.repositories.TagRepository;

@Service
public class TagService {
	
	private TagRepository tagRepository;
	
	public TagService() {}
	
	public TagService(TagRepository tagRepository) {
		this.tagRepository = tagRepository;
	}
	
	public Iterable<Tag> getAllTags() {
		return tagRepository.findAll();
	}
	
	public void saveTag(Tag tag) {
		tagRepository.save(tag);
	}
	
	public void saveTag(String tag) {
		Tag t = new Tag();
		t.setSubject(tag);
		tagRepository.save(t);
	}
	
	public boolean tagExists(String tag) {
		return tagRepository.findBySubject(tag);
	}

}
