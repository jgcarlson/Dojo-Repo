package io.jgcarlson.lookify.controllers;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import io.jgcarlson.lookify.models.Song;
import io.jgcarlson.lookify.services.SongService;

@Controller
public class AddCtrlr {
	
	private final SongService songService;
	
	public AddCtrlr(SongService songService) {
		this.songService = songService;
	}
	
	@RequestMapping("/songs/new")
	public String addView(@ModelAttribute("song") Song song) {
		return "addView.jsp";
	}
	
	@PostMapping("/songs/new")
	public String add(@Valid @ModelAttribute("song") Song song, BindingResult result) {
		if (result.hasErrors()) {
			return "addView.jsp";
		} else {
			songService.addSong(song);
			return "redirect:/dashboard";
		}
	}
	
}
