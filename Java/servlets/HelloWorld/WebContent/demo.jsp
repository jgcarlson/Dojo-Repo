<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<link type="text/css" rel="stylesheet" href="demo.css">
</head>
<body>
	<% if (request.getParameter("width") != null && request.getParameter("height") != null) { %>
		<% int h = Integer.parseInt(request.getParameter("height")); %>
		<% int w = Integer.parseInt(request.getParameter("width")); %>
	
		<% for (int j = h; j > 0; j--)  { %>
			<% for (int i = w; i > 0; i--)  { %>
				<div class="square <% if (i % 2 == 0) { %> black <% } %>"></div>
			<% } %>
			<br>
			<br>
			<br>
			<br>
			<br>	
		<% } %>
	
	<% } %>
</body>
</html>