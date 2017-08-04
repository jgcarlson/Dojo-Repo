package com.zookeeper.partone;

class Gorilla extends Mammal {
	public void throwStuff() {
		this.setEnergyLevel(this.getEnergyLevel() - 5);
		System.out.println("Watch out!");
	}
	
	public void eatBananas() {
		this.setEnergyLevel(this.getEnergyLevel() + 10);
		System.out.println("Yum.");
	}
	
	public void climb() {
		this.setEnergyLevel(this.getEnergyLevel() - 10);
		System.out.println("The gorilla is climbing a tree.");
	}
}
