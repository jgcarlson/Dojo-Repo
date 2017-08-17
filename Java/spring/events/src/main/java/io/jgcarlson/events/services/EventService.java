package io.jgcarlson.events.services;

import java.util.List;

import org.springframework.stereotype.Service;

import io.jgcarlson.events.models.Event;
import io.jgcarlson.events.models.User;
import io.jgcarlson.events.repositories.EventRepository;

@Service
public class EventService {
	
	private EventRepository eventRepository;
	
	public EventService(EventRepository eventRepository) {
		this.eventRepository = eventRepository;
	}
	
	public Iterable<Event> getEvents() {
		return eventRepository.findAll();
	}
	
	public Event findEvent(Long id) {
		return eventRepository.findOne(id);
	}
	
	public void saveEvent(Event event) {
		eventRepository.save(event);
	}
	
	public List<Event> getEventsByState(String state) {
		return eventRepository.getEventsByState(state);
	}
	
	public List<Event> getEventsOutOfState(String state) {
		return eventRepository.getEventsOutOfState(state);
	}
	
	public void joinEvent(Event event, User user) {
		List<User> users = event.getUsers();
		if (!users.contains(user)) {
			users.add(user);
		}
		eventRepository.save(event);
	}
	
	public void unjoinEvent(Event event, User user) {
		List<User> users = event.getUsers();
		users.remove(user);
		eventRepository.save(event);
	}
	
	public void deleteEvent(Event event) {
		eventRepository.delete(event);
	}

}
