package io.jgcarlson.countries.models;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="countries")
public class Country {
	
	@Id
	@GeneratedValue
	private Long id;
	private String code;
	private String name;
	private String continent;
	private String region;
	private Long surface_area;
	private Integer indep_year;
	private Integer population;
	private Double life_expectancy;
	private Long gnp;
	private Long gnp_old;
	private String local_name;
	private String government_form;
	private String head_of_state;
	private String code2;
	@OneToMany(mappedBy="country", fetch = FetchType.LAZY)
    private List<City> cities;
	@OneToMany(mappedBy="country", fetch = FetchType.LAZY)
    private List<Language> languages;
	
	public Country() {}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getContinent() {
		return continent;
	}
	public void setContinent(String continent) {
		this.continent = continent;
	}
	public String getRegion() {
		return region;
	}
	public void setRegion(String region) {
		this.region = region;
	}
	public Long getSurface_area() {
		return surface_area;
	}
	public void setSurface_area(Long surface_area) {
		this.surface_area = surface_area;
	}
	public int getIndep_year() {
		return indep_year;
	}
	public void setIndep_year(int indep_year) {
		this.indep_year = indep_year;
	}
	public int getPopulation() {
		return population;
	}
	public void setPopulation(int population) {
		this.population = population;
	}
	public double getLife_expectancy() {
		return life_expectancy;
	}
	public void setLife_expectancy(double life_expectancy) {
		this.life_expectancy = life_expectancy;
	}
	public Long getGnp() {
		return gnp;
	}
	public void setGnp(Long gnp) {
		this.gnp = gnp;
	}
	public Long getGnp_old() {
		return gnp_old;
	}
	public void setGnp_old(Long gnp_old) {
		this.gnp_old = gnp_old;
	}
	public String getLocal_name() {
		return local_name;
	}
	public void setLocal_name(String local_name) {
		this.local_name = local_name;
	}
	public String getGovernment_form() {
		return government_form;
	}
	public void setGovernment_form(String government_form) {
		this.government_form = government_form;
	}
	public String getHead_of_state() {
		return head_of_state;
	}
	public void setHead_of_state(String head_of_state) {
		this.head_of_state = head_of_state;
	}
	public String getCode2() {
		return code2;
	}
	public void setCode2(String code2) {
		this.code2 = code2;
	}
	public List<City> getCities() {
		return cities;
	}
	public void setCities(List<City> cities) {
		this.cities = cities;
	}
	public List<Language> getLanguages() {
		return languages;
	}
	public void setLanguages(List<Language> languages) {
		this.languages = languages;
	}
	
	
	
	

}
