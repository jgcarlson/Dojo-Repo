<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Home Page</title>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css">
</head>
<body style="text-align:center">
	<br>
	<h1>Ninja Gold</h1>
	<hr>
	<h3>Your gold: <span style="color:gold">${ gold }</span></h3>
	<hr>
	<div class="row">
		<div class="col"></div>
		<div class="col">
			<div class="container-fluid">
				<div class="card">
					<div class="card-block">
						<h3>Farm</h3>
						<p>(earns 10-20 gold)</p>
						<form action="/" method="POST">
							<button type="submit" class="btn btn-primary" name="action" value="farm">Find Gold!</button>
						</form>
					</div>
				</div>
			</div>
		</div>
		<div class="col">
			<div class="container-fluid">
				<div class="card">
					<div class="card-block">
						<h3>Cave</h3>
						<p>(earns 5-10 gold)</p>
						<form action="/" method="POST">
							<button type="submit" class="btn btn-primary" name="action" value="cave">Find Gold!</button>
						</form>
					</div>
				</div>
			</div>
		</div>
		<div class="col">
			<div class="container-fluid">
				<div class="card">
					<div class="card-block">
						<h3>House</h3>
						<p>(earns 2-5 gold)</p>
						<form action="/" method="POST">
							<button type="submit" class="btn btn-primary" name="action" value="house">Find Gold!</button>
						</form>
					</div>
				</div>
			</div>
		</div>
		<div class="col">
			<div class="container-fluid">
				<div class="card">
					<div class="card-block">
						<h3>Casino!</h3>
						<p>(risk 0-50 gold)</p>
						<form action="/" method="POST">
							<button type="submit" class="btn btn-primary" name="action" value="casino">Find Gold!</button>
						</form>
					</div>
				</div>
			</div>
		</div>
		<div class="col"></div>
	</div>
	<hr>
	<c:forEach items="${ notes }" var="note">
		<p><c:out value="${ note }" /></p>
	</c:forEach>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</body>
</html>