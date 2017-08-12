package io.jgcarlson.dojooverflow.services;

import java.util.List;

import org.springframework.stereotype.Service;

import io.jgcarlson.dojooverflow.models.Question;
import io.jgcarlson.dojooverflow.models.Tag;
import io.jgcarlson.dojooverflow.repositories.TagRepository;

@Service
public class TagService {
	private TagRepository tagRepository;
		
	public TagService(TagRepository tagRepository) {
		this.tagRepository = tagRepository;
	}
	
	public Iterable<Tag> getAllTags() {
		return tagRepository.findAll();
	}
	
	public void saveTag(String tag, Question question) {
		if (tagRepository.findBySubject(tag) == null) {
			Tag t = new Tag(tag);
			tagRepository.save(t);
		}
		Tag t = tagRepository.findBySubject(tag);
		System.out.println(t);
		List<Question> questions = t.getQuestions();
		System.out.println(questions);
		questions.add(question);
		System.out.println(questions);
		t.setQuestions(questions);
		System.out.println(t);
		tagRepository.save(t);
		
	}

}
