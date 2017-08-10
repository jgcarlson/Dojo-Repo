package io.jgcarlson.dojoandninjas.services;

import org.springframework.stereotype.Service;

import io.jgcarlson.dojoandninjas.models.Dojo;
import io.jgcarlson.dojoandninjas.repositories.DojoRepo;

@Service
public class DojoService {
	
	private DojoRepo dojoRepo;
	
	public DojoService(DojoRepo dojoRepo) {
		this.dojoRepo = dojoRepo;
	}
	
	public Iterable<Dojo> allDojos() {
		return dojoRepo.findAll();
	}
	
	public void addDojo(Dojo dojo) {
		dojoRepo.save(dojo);
	}
	
	public Dojo findDojo(String dojo) {
		return dojoRepo.findDojoByName(dojo);
	}

}
