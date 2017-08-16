package io.jgcarlson.employeesandmanagers.services;

import java.util.List;

import org.springframework.stereotype.Service;

import io.jgcarlson.employeesandmanagers.models.Employee;
import io.jgcarlson.employeesandmanagers.repositories.ManagerRepository;

@Service
public class ManagerService {
	
	private ManagerRepository managerRepository;
	
	public ManagerService(ManagerRepository managerRepository) {
		this.managerRepository = managerRepository;
	}
	
	public List<Employee> findEmployeesByManager(Long id) {
		return managerRepository.findEmployeesByManager(id);
	}
	
}