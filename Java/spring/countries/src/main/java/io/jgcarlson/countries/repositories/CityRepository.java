package io.jgcarlson.countries.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import io.jgcarlson.countries.models.City;

@Repository
public interface CityRepository extends CrudRepository<City, Long> {
	
	@Query("SELECT count(c) FROM City c JOIN c.country n WHERE c.population > 500000 AND n.name = 'MEXICO'")
	List<Object[]> getMexicanCities();
	
	@Query("SELECT n, c.name, c.district, c.population FROM City c JOIN c.country n WHERE c.district = 'Buenos Aires' AND c.population > 500000")
	List<Object[]> getBuenosAires();

}
