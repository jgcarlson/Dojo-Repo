package io.jgcarlson.lookify.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import io.jgcarlson.lookify.models.Song;
import io.jgcarlson.lookify.services.SongService;

@Controller
public class Top10Ctrlr {
	
	private SongService songService;
	
	public Top10Ctrlr(SongService songService) {
		this.songService = songService;
	}
	
	@RequestMapping("/songs/top10")
	public String top10(Model model) {
		Iterable<Song> songs = songService.findTop10();
		model.addAttribute("songs", songs);
		return "top10View.jsp";
	}
	
}
