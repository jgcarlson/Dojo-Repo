package io.jgcarlson.events.services;

import java.util.List;

import org.springframework.stereotype.Service;

import io.jgcarlson.events.models.Event;
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
	
	public void saveEvent(Event event) {
		eventRepository.save(event);
	}
	
	public List<Event> getEventsByState(String state) {
		return eventRepository.getEventsByState(state);
	}
	
	public List<Event> getEventsOutOfState(String state) {
		return eventRepository.getEventsOutOfState(state);
	}

}
