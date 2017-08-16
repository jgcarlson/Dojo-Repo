package io.jgcarlson.employeesandmanagers.controllers;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import io.jgcarlson.employeesandmanagers.models.Employee;
import io.jgcarlson.employeesandmanagers.models.Manager;
import io.jgcarlson.employeesandmanagers.services.EmployeeService;
import io.jgcarlson.employeesandmanagers.services.ManagerService;

@Controller
public class MainController {
	
	private ManagerService managerService;
	private EmployeeService employeeService;
	
	public MainController(ManagerService managerService, EmployeeService employeeService) {
		this.managerService = managerService;
		this.employeeService = employeeService;
	}
	
	@RequestMapping("/")
	public String index(Model model) {
		Integer i = 2;
		List<Employee> employees = managerService.findEmployeesByManager(Long.valueOf(i.longValue()));
		model.addAttribute("employees", employees);
		Integer t = 1;
		Manager manager = employeeService.findManagerByEmployee(Long.valueOf(t.longValue()));
		model.addAttribute("manager", manager);
		return "index.jsp";
	}

}
