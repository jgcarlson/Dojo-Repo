package io.jgcarlson.grouplanguages.services;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Service;

import io.jgcarlson.grouplanguages.models.Language;

@Service
public class LanguageService {
	
	private List<Language> languages = new ArrayList<Language>(Arrays.asList(
			new Language("Example Language", "Jonathan", 1.0)
			));
	
	public List<Language> allLanguages() {
		return languages;
	}
	
	public void addLanguage(Language l) {
		languages.add(l);
	}
	
	public Language findByIndex(int index) {
		if (index < languages.size()) {
			return languages.get(index);
		} else {
			return null;
		}
	}
	
	public void update(int id, Language l) {
		if (id < languages.size()) {
			languages.set(id, l);
		}
	}
}
