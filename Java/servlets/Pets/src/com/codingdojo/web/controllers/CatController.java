package com.codingdojo.web.controllers;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.codingdojo.web.models.Cat;

/**
 * Servlet implementation class CatController
 */
@WebServlet("/cat")
public class CatController extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public CatController() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String catName = request.getParameter("cat-name");
		String catBreed = request.getParameter("cat-breed");
		double catWeight = Double.parseDouble(request.getParameter("cat-weight"));
    
		Cat c = new Cat(catName, catBreed, catWeight);
		
		request.setAttribute("cat", c);
		
		RequestDispatcher view = request.getRequestDispatcher("/WEB-INF/views/Cat.jsp");
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
