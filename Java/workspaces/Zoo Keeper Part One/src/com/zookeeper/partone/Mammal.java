package com.zookeeper.partone;

class Mammal {
	private int energyLevel = 100;

	public int getEnergyLevel() {
		System.out.println(this.energyLevel);
		return energyLevel;
	}

	public void setEnergyLevel(int energyLevel) {
		this.energyLevel = energyLevel;
	}
}
