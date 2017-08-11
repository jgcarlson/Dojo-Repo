package io.jgcarlson.dojooverflow.controllers;

import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import io.jgcarlson.dojooverflow.models.Question;
import io.jgcarlson.dojooverflow.services.QuestionService;
import io.jgcarlson.dojooverflow.services.TagService;

@Controller
public class QuestionController {
	
	private TagService tagService;
	private QuestionService questionService;
	
	public QuestionController(TagService tagService, QuestionService questionService) {
		this.tagService = tagService;
		this.questionService = questionService;
	}
	
	@RequestMapping("/")
	public String index() {
		return "redirect:/questions";
	}
	
	@RequestMapping("/questions")
	public String questions() {
		return "questionsView.jsp";
	}
	
	@RequestMapping("/questions/new")
	public String newQuestion(@ModelAttribute("question") Question question) {
		return "newQuestionView.jsp";
	}
	
	@PostMapping("/questions/new")
	public String newQuestion(@RequestParam("question") String question, @RequestParam("tags") String tag_string) {
		questionService.saveQuestion(question);
		List<String> tags = Arrays.asList(tag_string.split("\\s*,\\s*"));
		for (String t : tags) {
			if (tagService.tagExists(t)) {
				System.out.println("Tag " + t + " exists.");
			} else {
				tagService.saveTag(t);
			}
		}
		return "redirect:/";
	}

}
