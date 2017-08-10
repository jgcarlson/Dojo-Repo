package io.jgcarlson.license.repos;

import org.springframework.data.repository.CrudRepository;

import io.jgcarlson.license.models.License;

public interface LicenseRepo extends CrudRepository<License, Long> {

}
