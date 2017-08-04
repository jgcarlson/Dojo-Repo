package com.controllers;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;

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
		String opts = "abcdefghijklmnopqrstuvwxyz1234567890";
		ArrayList<String> listArr = new ArrayList<String>(Arrays.asList("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"));
		String[] arr = listArr.toArray(new String[listArr.size()]);
		String word = null;
		int len = (int) (Math.random() * 20) + 10;
		while (len > 0) {
			word += arr[(int) Math.floor(Math.random() * arr.length)];
			len--;
		}
		
		request.setAttribute("word", word);
		request.setAttribute("now", new Date());
		
		HttpSession session = request.getSession();
		if (session.getAttribute("time") == null) {
			request.setAttribute("time", "You're new to this.");
		} else {
			request.setAttribute("time", session.getAttribute("time"));
		}
		session.setAttribute("time", new Date());
		
		RequestDispatcher view = request.getRequestDispatcher("WEB-INF/views/generate.jsp");
        view.forward(request, response);
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
