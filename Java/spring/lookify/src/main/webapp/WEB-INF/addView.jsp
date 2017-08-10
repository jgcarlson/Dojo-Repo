<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="x-ua-compatible" content="ie=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>Lookify</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css">
</head>
<body style="text-align:center">
	<div class="container-fluid">
	<h1>Add Page</h1>
	<form:form  method="POST" action="/songs/new" modelAttribute="song" style="width:30vw;margin:3vh auto;">
	
		<fieldset>
		
		<legend>Add a Song!</legend>
			
		<label>Name:</label>
		<form:errors path="name" />
		<form:input path="name" class="form-control" />
		
		<label>Artist:</label>
		<form:errors path="artist" />
		<form:input path="artist" class="form-control" />
		
		<label>Rating:</label>
		<form:errors path="rating" />
		<form:select path="rating" class="form-control">
			<option disabled selected value=null>Choose a rating....</option>
			<option>1</option>
			<option>2</option>
			<option>3</option>
			<option>4</option>
			<option>5</option>
			<option>6</option>
			<option>7</option>
			<option>8</option>
			<option>9</option>
			<option>10</option>
		</form:select>
		
		<button class="btn btn-primary btn-block">Add Song</button>
		
		</fieldset>
		
	</form:form>
		
	</div>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js"></script>
</body>
</html>