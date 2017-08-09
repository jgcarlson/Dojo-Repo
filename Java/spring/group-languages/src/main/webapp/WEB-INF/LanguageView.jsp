<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
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
	<h1>Language Page</h1>
	<h3>Name:</h3>
	<h4>${ language.name }</h4>
	<h3>Creator:</h3>
	<h4>${ language.creator }</h4>
	<h3>Version:</h3>
	<h4>${ language.version }</h4>
	<h3>Actions:</h3>
	<div class="d-inline-flex">
		<form action="/languages/update/${ id }" method="POST">
			<button type="submit" class="btn btn-info">Update</button>
		</form>
		<form action="/languages/delete/${ id }" method="POST">
			<button type="submit" class="btn btn-danger">Delete</button>
		</form>
	</div>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</body>
</html>