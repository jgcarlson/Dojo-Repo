package io.jgcarlson.events.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import io.jgcarlson.events.models.Event;

@Repository
public interface EventRepository extends CrudRepository<Event, Long> {
	
	@Query("SELECT e FROM Event e JOIN e.host h WHERE e.state = ?1")
	List<Event> getEventsByState(String state);
	
	@Query("SELECT e FROM Event e JOIN e.host h WHERE e.state != ?1")
	List<Event> getEventsOutOfState(String state);
	
}
