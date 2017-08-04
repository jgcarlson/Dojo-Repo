package com.zookeeper.partone;

class DragonTest {

	public static void main(String[] args) {
		
		Dragon d = new Dragon();
		d.attackTown();
		d.attackTown();
		d.attackTown();
		d.eatHumans();
		d.eatHumans();
		d.fly();
		d.fly();
		System.out.println(d.getEnergyLevel());

	}

}
