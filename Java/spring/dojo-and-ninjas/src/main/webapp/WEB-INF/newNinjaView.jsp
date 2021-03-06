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
	<title>Home Page</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css">
</head>
<body style="text-align:center">
	
	<form:form action="/ninjas/new" method="POST" modelAttribute="ninja" style="width:15vw;margin:2vh auto;">
		<fieldset>
			<legend>Add a Ninja</legend>
			
			<label>Ninja first name:</label>
			<form:input type="text" path="first_name" class="form-control" />
			
			<label>Ninja last name:</label>
			<form:input type="text" path="last_name" class="form-control" />
			
			<label>Ninja age:</label>
			<form:input type="number" path="age" class="form-control" />
			
			<label>Ninja's dojo:</label>
			<form:select class="form-control" path="dojo">
				<option disabled selected>Please select a dojo....</option>
				<c:forEach items="${ dojos }" var="dojo">
					<option value="${ dojo.id }">${ dojo.name }</option>
				</c:forEach>
			</form:select>
			
			<button class="btn btn-block btn-primary" type="submit">Add!</button>
			
		</fieldset>
	</form:form>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</body>
</html>