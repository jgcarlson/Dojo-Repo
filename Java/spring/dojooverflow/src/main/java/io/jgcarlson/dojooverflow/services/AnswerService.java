package io.jgcarlson.dojooverflow.services;

import org.springframework.stereotype.Service;

import io.jgcarlson.dojooverflow.models.Answer;
import io.jgcarlson.dojooverflow.repositories.AnswerRepository;

@Service
public class AnswerService {
	
	private AnswerRepository answerRepository;
	
	public AnswerService(AnswerRepository answerRepository) {
		this.answerRepository = answerRepository;
	}
	
	public Iterable<Answer> allAnswers() {
		return answerRepository.findAll();
	}
	
	public Iterable<Answer> allAnswersForQuestion(Long id) {
		return answerRepository.findAnswersByQuestionId(id);
	}
	
	public Answer addAnswer(String answer) {
		Answer a = new Answer(answer);
		return answerRepository.save(a);
	}
	
	public void saveAnswer(Answer answer) {
		answerRepository.save(answer);
	}

}
