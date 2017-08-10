package io.jgcarlson.license.services;

import org.springframework.stereotype.Service;

import io.jgcarlson.license.models.Person;
import io.jgcarlson.license.repos.PersonRepo;

@Service
public class PersonService {
	
	private PersonRepo personRepo;
	
	public PersonService(PersonRepo personRepo) {
		this.personRepo = personRepo;
	}
	
	public Iterable<Person> getPeople() {
		return personRepo.findAll();
	}
	
	public void addPerson(Person person) {
		personRepo.save(person);
	}

}
