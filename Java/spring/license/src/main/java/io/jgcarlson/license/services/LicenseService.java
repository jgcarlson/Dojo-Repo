package io.jgcarlson.license.services;

import org.springframework.stereotype.Service;

import io.jgcarlson.license.models.License;
import io.jgcarlson.license.repos.LicenseRepo;

@Service
public class LicenseService {
	
	private LicenseRepo licenseRepo;
	
	public LicenseService(LicenseRepo licenseRepo) {
		this.licenseRepo = licenseRepo;
	}
	
	private int counter = 1;
	
	public void addLicense(License license) {
		license.setNumber("0000000" + Integer.toString(counter));
		counter++;
		licenseRepo.save(license);
	}

}
