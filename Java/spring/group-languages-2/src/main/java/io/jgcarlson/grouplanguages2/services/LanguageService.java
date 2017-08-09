package io.jgcarlson.grouplanguages2.services;

import org.springframework.stereotype.Service;

import io.jgcarlson.grouplanguages2.models.Language;
import io.jgcarlson.grouplanguages2.repositories.LanguageRepository;

@Service
public class LanguageService {
	
	private LanguageRepository languageRepository;
	
	public LanguageService(LanguageRepository languageRepository) {
		this.languageRepository = languageRepository;
	}
	
	public Iterable<Language> allLanguages() {
		return languageRepository.findAll();
	}
	
	public void addLanguage(Language l) {
		languageRepository.save(l);
	}
	
	public Language findById(Long id) {
		if (id < languageRepository.count()) {
			return languageRepository.findOne(id);
		} else {
			return null;
		}
	}
	
	public void update(Language l) {
		languageRepository.save(l);
	}
	
	public void delete(Long id) {
		if (id < languageRepository.count()) {
			languageRepository.delete(id);
		}
	}
}
