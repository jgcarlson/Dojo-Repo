package com.web.controllers;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.web.models.Team;

/**
 * Servlet implementation class Home
 */
@WebServlet("/")
public class HomeController extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public HomeController() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		ArrayList<Team> tlist = Team.getTeam_list();
		Team[] team_list = tlist.toArray(new Team[tlist.size()]);
		System.out.println(team_list.getClass());
		System.out.println(tlist.getClass());
		if (team_list.length > 1) {
			System.out.println("Team " + team_list[0].getPlayers());
		}
		
		request.setAttribute("team_list", team_list);
		
		RequestDispatcher view = request.getRequestDispatcher("WEB-INF/views/Home.jsp");
        view.forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		RequestDispatcher view = request.getRequestDispatcher("WEB-INF/views/Home.jsp");
        view.forward(request, response);
	}

}
