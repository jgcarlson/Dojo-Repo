package io.jgcarlson.countries.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import io.jgcarlson.countries.models.Country;

@Repository
public interface CountryRepository extends CrudRepository<Country, Long> {

	List<Country> findAll();
	
	@Query("SELECT c, count(n) AS num FROM Country c JOIN c.cities n GROUP BY c ORDER BY num DESC")
	List<Object[]> getCitiesAndCountries();
	
	@Query("SELECT c.name, l FROM Country c JOIN c.languages l WHERE l.percentage > 89")
	List<Object[]> getLanguagesAndCountries();
	
	@Query("SELECT c FROM Country c WHERE c.population > 100000 AND c.surface_area < 501")
	List<Object[]> getCountriesByPopAndSA();
	
	@Query("SELECT c.name FROM Country c WHERE c.government_form = 'Constitutional Monarchy' AND life_expectancy > 75")
	List<Object[]> getCountriesByGovFormAndLifeExpectancy();
	
	@Query("SELECT c.region, count(c) FROM Country c GROUP BY region ORDER BY count(c) DESC")
	List<Object[]> getRegionCountryCount();
	

}
