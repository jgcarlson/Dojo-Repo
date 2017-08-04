package com.controllers;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet implementation class Home
 */
@WebServlet("/")
public class Home extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Home() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		HttpSession session = request.getSession();
		
		Integer number = (Integer) session.getAttribute("number");
		Integer guess = (Integer) request.getAttribute("guess");
		
		if (number == null) {
			session.setAttribute("correct", false);	
			session.setAttribute("number", (int) Math.floor(Math.random() * 100));	
		}
		
		request.setAttribute("number", session.getAttribute("number"));
		request.setAttribute("ool", "alksdjf;l");
		
		RequestDispatcher view = request.getRequestDispatcher("WEB-INF/views/Home.jsp");
        view.forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session = request.getSession();
		Integer guess = Integer.parseInt(request.getParameter("guess"));
		Integer number = (Integer) session.getAttribute("number");
		boolean correct = (Boolean) session.getAttribute("correct");
		
        if (guess == 0) {
        		request.setAttribute("response", "Take a guess.");
		} else if (guess > number) {
			request.setAttribute("response", "Nope. Too high.");
		} else if (guess < number) {
			request.setAttribute("response", "Nope. Too low.");
		} else {
			request.setAttribute("response", "You guessed it!!!");
			correct = true;
			session.setAttribute("correct", correct);	
		}
        
        if (correct == true) {
			session.setAttribute("correct", false);
			session.setAttribute("number", (int) Math.floor(Math.random() * 100));	
		}
        
        RequestDispatcher view = request.getRequestDispatcher("WEB-INF/views/Home.jsp");
        view.forward(request, response);
	}

}
