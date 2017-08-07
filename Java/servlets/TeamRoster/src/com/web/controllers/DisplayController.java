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
 * Servlet implementation class DisplayController
 */
@WebServlet("/teams")
public class DisplayController extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public DisplayController() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session = request.getSession();
		Integer displayById = Integer.parseInt(request.getParameter("display"));
		if (displayById != null) {
			session.setAttribute("teamId", displayById);
		}
		
		ArrayList<Team> tlist = Team.getTeam_list();
		Team[] team_list = tlist.toArray(new Team[tlist.size()]);
		if (team_list[displayById - 1].getPlayers() != null) {
			Player[] player_list = team_list[displayById - 1].getPlayers().toArray(new Player[team_list[displayById - 1].getPlayers().size()]);
			request.setAttribute("player_list", player_list);
		}
		
		RequestDispatcher view = request.getRequestDispatcher("WEB-INF/views/Display.jsp");
        view.forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		RequestDispatcher view = request.getRequestDispatcher("WEB-INF/views/Display.jsp");
        view.forward(request, response);
	}

}
