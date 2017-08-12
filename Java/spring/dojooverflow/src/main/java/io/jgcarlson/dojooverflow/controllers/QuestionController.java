package io.jgcarlson.dojooverflow.controllers;

import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import io.jgcarlson.dojooverflow.models.Answer;
import io.jgcarlson.dojooverflow.models.Question;
import io.jgcarlson.dojooverflow.services.AnswerService;
import io.jgcarlson.dojooverflow.services.QuestionService;
import io.jgcarlson.dojooverflow.services.TagService;

@Controller
public class QuestionController {
	
	private TagService tagService;
	private QuestionService questionService;
	private AnswerService answerService;
	
	public QuestionController(TagService tagService, QuestionService questionService, AnswerService answerService) {
		this.tagService = tagService;
		this.questionService = questionService;
		this.answerService = answerService;
	}
	
	@RequestMapping("/")
	public String index() {
		return "redirect:/questions";
	}
	
	@RequestMapping("/questions")
	public String questions(Model model) {
		Iterable<Question> questions = questionService.getAllQuestions();
		model.addAttribute("questions", questions);
		return "questionsView.jsp";
	}
	
	@RequestMapping("/questions/new")
	public String newQuestion(@ModelAttribute("question") Question question) {
		return "newQuestionView.jsp";
	}
	
	@PostMapping("/questions/new")
	public String newQuestion(@RequestParam("question") String question, @RequestParam("tags") String tag_string) {
		Question q = questionService.saveQuestion(question);
		List<String> tags = Arrays.asList(tag_string.split("\\s*,\\s*"));
		for (String t : tags) {
			tagService.saveTag(t, q);
		}
		
		return "redirect:/";
	}
	
	@RequestMapping("/questions/{id}")
	public String questionView(Model model, @PathVariable("id") Long id) {
		Question question = questionService.findById(id);
		Iterable<Answer> answers = answerService.allAnswersForQuestion(id);
		model.addAttribute("question", question);
		model.addAttribute("answers", answers);
		return "questionView.jsp";
	}
	
	@PostMapping("/questions/{id}")
	public String questionView(@PathVariable("id") Long id, @RequestParam("answer") String answer) {
		Answer a = answerService.addAnswer(answer);
		Question q = questionService.findById(id);
		a.setQuestion(q);
		return "redirect:/questions/" + id;
	}

}
