<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Home Page</title>
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
</head>
<body style="text-align:center">
	<form action="/" method="POST" style="width:40vw;margin:10vh auto;">
		<fieldset>
			<legend>Dojo Survey</legend>
			<label>Your name:</label>
			<input type="text" class="form-control" name="name">
			<label>Dojo location:</label>
			<select class="select form-control" name="location">
				<option selected disabled>Select location...</option>
				<option>San Jose</option>
				<option>Burbank</option>
				<option>Washington DC</option>
				<option>Somewhere in Texas</option>
				<option>Seattle</option>
			</select>
			<label>Favorite language:</label>
			<select class="select form-control" name="language">
				<option selected disabled>Select language...</option>
				<option>Python</option>
				<option>JavaScript</option>
				<option>Java</option>
				<option>PHP</option>
				<option>Ruby</option>
			</select>
			<label>Comments:</label>
			<textarea class="form-control" rows="3" name="comments"></textarea>
			<label> </label>
			<button type="submit" class="btn btn-primary btn-block">Submit Survey</button>
		</fieldset>
	</form>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</body>
</html>