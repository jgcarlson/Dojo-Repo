package io.jgcarlson.lookify.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;

import io.jgcarlson.lookify.models.Song;
import io.jgcarlson.lookify.services.SongService;

@Controller
public class DashCtrlr {
	
	private final SongService songService;
	
	public DashCtrlr(SongService songService) {
		this.songService = songService;
	}
	
	@RequestMapping("/")
	public String index() {
		return "index.jsp";
	}
	
	@RequestMapping("/dashboard")
	public String dasboard(Model model, @ModelAttribute("song") Song song) {
		Iterable<Song> songs = songService.allSongs();
		model.addAttribute("songs", songs);
		return "dashboardView.jsp";
	}

}
