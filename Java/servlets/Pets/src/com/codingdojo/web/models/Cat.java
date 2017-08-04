package com.codingdojo.web.models;

public class Cat extends Animal implements Pet {
	
	public Cat(String n, String b, double w) {
		name = n;
		breed = b;
		weight = w;
	}
	
	@Override
	public String showAffection() {
		return "Your " + breed + " cat, " + name + ", looked at you coldly.";
	}

}
