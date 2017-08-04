package com.zookeeper.partone;

class Dragon extends Mammal {
	
	this.setEnergyLevel(300);
	this.energyLevel = this.getEnergyLevel();
	
	public void fly() {
		this.energyLevel -= 50;
		System.out.println("The dragon started flying.");
	}
	
	public void eatHumans() {
		this.energyLevel += 25;
		System.out.println("Arrrrrgh!!!");
	}
	
	public void attackTown() {
		this.energyLevel -= 100;
		System.out.println("Burn burn burn.");
	}
	
}
