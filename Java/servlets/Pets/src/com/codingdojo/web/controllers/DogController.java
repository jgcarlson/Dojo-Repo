package com.codingdojo.web.controllers;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.codingdojo.web.models.Dog;

/**
 * Servlet implementation class DogController
 */
@WebServlet("/dog")
public class DogController extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public DogController() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    		String dogName = request.getParameter("dog-name");
    		String dogBreed = request.getParameter("dog-breed");
    		Double dogWeight = Double.parseDouble(request.getParameter("dog-weight"));
        
    		Dog d = new Dog(dogName, dogBreed, dogWeight);
    		
    		request.setAttribute("dog", d);
    		
        RequestDispatcher view = request.getRequestDispatcher("WEB-INF/views/Dog.jsp");
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
