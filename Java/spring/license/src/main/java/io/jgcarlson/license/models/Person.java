package io.jgcarlson.license.models;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
public class Person {

	@Id
	@GeneratedValue
	private Long id;
	private String first_name;
	private String last_name;
	
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private Date created_at;
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private Date updated_at;
	@OneToOne(mappedBy="person", fetch=FetchType.LAZY)
	private License license;
	
	public Person() {}
	
	public Person(String f, String l) {
		first_name = f;
		last_name = l;
	}
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFirst_name() {
		return first_name;
	}

	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}

	public String getLast_name() {
		return last_name;
	}

	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}

	public Date getCreated_at() {
		return created_at;
	}

	public void setCreated_at(Date created_at) {
		this.created_at = created_at;
	}

	public Date getUpdated_at() {
		return updated_at;
	}

	public void setUpdated_at(Date updated_at) {
		this.updated_at = updated_at;
	}

	public License getLicense() {
		return license;
	}

	public void setLicense(License license) {
		this.license = license;
	}

	@PrePersist
    protected void onCreate(){
		this.updated_at = new Date();
        this.created_at = new Date();
    }

    @PreUpdate
    protected void onUpdate(){
        this.updated_at = new Date();
    }
	
	
	
}
