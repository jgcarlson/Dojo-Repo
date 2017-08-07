package com.web.controllers;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.web.models.Player;
import com.web.models.Team;

/**
 * Servlet implementation class Player
 */
@WebServlet("/addplayer")
public class PlayerController extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public PlayerController() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		RequestDispatcher view = request.getRequestDispatcher("WEB-INF/views/Player.jsp");
        view.forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session = request.getSession();
		
		String first_name = request.getParameter("first_name");
		String last_name = request.getParameter("last_name");
		Integer age = Integer.parseInt(request.getParameter("age"));
		Integer teamId = (int) session.getAttribute("teamId");
		
		if (first_name != "" && last_name != "" && age != null) {
			Player p = new Player();
			p.setFirst_name(first_name);
			p.setLast_name(last_name);
			p.setAge(age);
			Player.setPlayer_list(p);
			ArrayList<Team> tlist = Team.getTeam_list();
			Team[] team_list = tlist.toArray(new Team[tlist.size()]);
			System.out.println("P1 " + team_list[teamId - 1]);
			team_list[teamId - 1].setPlayers(p);
			System.out.println();
		}
		
		RequestDispatcher view = request.getRequestDispatcher("WEB-INF/views/Player.jsp");
        view.forward(request, response);
	}

}
