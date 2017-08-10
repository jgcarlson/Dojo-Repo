package io.jgcarlson.dojoandninjas.services;

import org.springframework.stereotype.Service;

import io.jgcarlson.dojoandninjas.models.Dojo;
import io.jgcarlson.dojoandninjas.models.Ninja;
import io.jgcarlson.dojoandninjas.repositories.DojoRepo;
import io.jgcarlson.dojoandninjas.repositories.NinjaRepo;

@Service
public class NinjaService {
	
	private NinjaRepo ninjaRepo;
	private DojoRepo dojoRepo;
	
	public NinjaService(NinjaRepo ninjaRepo, DojoRepo dojoRepo) {
		this.ninjaRepo = ninjaRepo;
		this.dojoRepo = dojoRepo;
	}
	
	public Iterable<Ninja> allNinjas() {
		return ninjaRepo.findAll();
	}
	
	public void addNinja(Ninja ninja) {
		ninjaRepo.save(ninja);
	}
	
	public Iterable<Ninja> findByDojo(String dojo) {
		Dojo x = dojoRepo.findDojoByName(dojo);
		Long id =  x.getId();
		return ninjaRepo.findNinjaByDojoId(id);
	}

}
