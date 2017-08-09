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
	<title>Group Languages</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css">
</head>
<body style="text-align:center">
	<form:form action="/languages/update/${ id }" modelAttribute="language" method="POST" style="width:30vw;margin:auto;">
		<fieldset>
			<legend>Update Language</legend>
			
			<h4 style="color:red">${ errors }</h4>
			
			<label>Name</label>
			<form:errors path="name" />
			<form:input class="form-control" path="name" />
			
			<label>Creator</label>
			<form:errors path="creator" />
			<form:input class="form-control" path="creator" />
			
			<label>Version</label>
			<form:errors path="version" />
			<form:input class="form-control" path="version" />
			
			<button type="submit" class="btn btn-primary btn-block">Update Language</button>
		</fieldset>
	</form:form>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</body>
</html>