package com.web.models;

import java.util.ArrayList;
import java.util.concurrent.atomic.AtomicInteger;

public class Player implements java.io.Serializable {
	
	private String first_name;
	private String last_name;
	private int age;
	private static ArrayList<Player> player_list = new ArrayList<Player>();
	static AtomicInteger nextId = new AtomicInteger();
    private int id;

	public Player() {
		id = nextId.incrementAndGet();
	};

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
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public static ArrayList<Player> getPlayer_list() {
		return player_list;
	}
	public static void setPlayer_list(Player p) {
		Player.player_list.add(p);
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	
	@Override
    public String toString() {
        return "First name: " + this.first_name + ", Last name: " + this.last_name + ", Age: " + this.age + ", ID: " + this.id;
    }
}
