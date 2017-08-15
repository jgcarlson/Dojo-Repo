package io.jgcarlson.countries.services;

import java.util.List;

import org.springframework.stereotype.Service;

import io.jgcarlson.countries.models.Country;
import io.jgcarlson.countries.models.Language;
import io.jgcarlson.countries.repositories.CityRepository;
import io.jgcarlson.countries.repositories.CountryRepository;
import io.jgcarlson.countries.repositories.LanguageRepository;

@Service
public class ApiService {
	
	private CityRepository cityRepository;
	private CountryRepository countryRepository;
	private LanguageRepository languageRepository;
	
	public ApiService(CityRepository cityRepository, CountryRepository countryRepository, LanguageRepository languageRepository) {
		this.cityRepository = cityRepository;
		this.countryRepository = countryRepository;
		this.languageRepository = languageRepository;
	}
	
	public List<Country> getAllCountries() {
		return countryRepository.findAll();
	}
	
	public List<Object[]> getAllLanguagesAndCountries() {
		return languageRepository.findAllLanguagesNames();
	}
	
	public List<Object[]> getCitiesAndCountries() {
		return countryRepository.getCitiesAndCountries();
	}
	
	public List<Object[]> getMexicanCities() {
		return cityRepository.getMexicanCities();
	}
	
	public List<Object[]> getLanguagesAndCountries() {
		return countryRepository.getLanguagesAndCountries();
	}
	
	public List<Object[]> getCountriesByPopAndSA() {
		return countryRepository.getCountriesByPopAndSA();
	}
	
	public List<Object[]> getCountriesByGovFormAndLifeExpectancy() {
		return countryRepository.getCountriesByGovFormAndLifeExpectancy();
	}
	
	public List<Object[]> getBuenosAires() {
		return cityRepository.getBuenosAires();
	}
	
	public List<Object[]> getRegionCountryCount() {
		return countryRepository.getRegionCountryCount();
	}

}
