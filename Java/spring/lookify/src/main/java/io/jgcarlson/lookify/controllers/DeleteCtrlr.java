package io.jgcarlson.lookify.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import io.jgcarlson.lookify.services.SongService;

@Controller
public class DeleteCtrlr {
	
	private SongService songService;
	
	public DeleteCtrlr(SongService songService) {
		this.songService = songService;
	}

	@PostMapping("/songs/delete/{id}")
	public String delete(@PathVariable("id") Long id) {
		songService.deleteSong(id);
		return "redirect:/dashboard";
	}
	
	
}
