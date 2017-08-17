<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en">
<head>
	<meta http-equiv="x-ua-compatible" content="ie=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>Home Page</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css">
</head>
<body style="text-align:center">
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-3"></div>
			<div class="col-md-6">
				<h1>Event Page</h1>
			</div>
			<div class="col-md=3">
				<form id="logoutForm" method="POST" action="/logout">
			        <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
			        <button type="submit" class="btn btn-outline-danger">Logout</button>
	    			</form>
	    			<form action="/dashboard">
	    				<button type="submit" class="btn btn-outline-success">Dashboard</button>
	    			</form>
			</div>
		</div>
	</div>
	
	<hr>
	
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-1"></div>
			<div class="col-md-6">
				<h3 style="text-decoration:underline;">${ event.name }</h3>
				<h4>${ event.host.first_name } ${ event.host.last_name }</h4>
				<h4>${ event.date }</h4>
				<h4>${ event.city }, ${ event.state }</h4>
				<h4>Number of people attending: ${ event.users.size() }</h4>
			</div>
			<div class="col-md-4">
				<div class="container-fluid">
					<div class="card">
						<div class="card-block">
							<h2>Comments</h2>
							<hr>
							<c:choose>
								<c:when test="${ comments.size() == 0 }">
									<h3>No comments yet.</h3>
								</c:when>
								<c:otherwise>
									<c:forEach items="${ comments }" var="comment">
										<h5>${ comment.message }</h5>
										<h6>- ${ comment.user.first_name } ${ comment.user.last_name }</h6>
									</c:forEach>
								</c:otherwise>
							</c:choose>
							<hr>
							<form:form action="/events/${ event.id }/comment" method="POST" modelAttribute="comment">
								<form:textarea path="message" class="form-control" />
								<button class="btn btn-primary btn-block">Add Comment</button>
								<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
							</form:form>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-1"></div>
		</div>
	</div>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</body>
</html>