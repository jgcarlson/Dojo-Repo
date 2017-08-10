package io.jgcarlson.lookify.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import io.jgcarlson.lookify.models.Song;
import io.jgcarlson.lookify.services.SongService;

@Controller
public class SearchCtrlr {
	
	private SongService songService;
	
	public SearchCtrlr(SongService songService) {
		this.songService = songService;
	}

	@RequestMapping("/search")
	public String search(@RequestParam("query") String query, Model model) {
		Iterable<Song> songs = songService.search(query);
		model.addAttribute("songs", songs);
		return "searchView.jsp";
	}
	
	
}
