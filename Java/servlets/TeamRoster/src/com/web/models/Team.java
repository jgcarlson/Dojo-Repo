package com.web.models;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

public class Team {
	
	private String team_name;
	private List<Player> players;
	private static ArrayList<Team> team_list = new ArrayList<Team>();
	static AtomicInteger nextId = new AtomicInteger();
    public int id;

	public Team(String n) {
		team_name = n;
		id = nextId.incrementAndGet();
	}
	
	public String getTeam_name() {
		return team_name;
	}
	public void setTeam_name(String team_name) {
		this.team_name = team_name;
	}
	public List<Player> getPlayers() {
		return players;
	}
	public void setPlayers(final List<Player> players) {
		this.players = players;
	}
	public static ArrayList<Team> getTeam_list() {
		return team_list;
	}
	public static void setTeam_list(Team t) {
		Team.team_list.add(t);
	}
	
	@Override
    public String toString() {
        return "Team name: " + this.team_name + ", Players: " + this.players;
    }

	
}
