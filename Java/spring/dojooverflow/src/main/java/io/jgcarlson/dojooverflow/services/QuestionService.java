package io.jgcarlson.dojooverflow.services;

import org.springframework.stereotype.Service;

import io.jgcarlson.dojooverflow.models.Question;
import io.jgcarlson.dojooverflow.repositories.QuestionRepository;

@Service
public class QuestionService {
	
	private QuestionRepository questionRepository;
	
	public QuestionService(QuestionRepository questionRepository) {
		this.questionRepository = questionRepository;
	}
	
	public Iterable<Question> getAllQuestions() {
		return questionRepository.findAll();
	}
	
	public void saveQuestion(Question question) {
		questionRepository.save(question);
	}
	
	public Question saveQuestion(String question) {
		Question q = new Question();
		q.setQuestion(question);
		return questionRepository.save(q);
	}
	
	public Question findById(Long id) {
		return questionRepository.findOne(id);
	}

}
