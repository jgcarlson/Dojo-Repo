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

	<c:if test="${logoutMessage != null}">
		<div class="alert alert-success alert-dismissable">
   			<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
   			<c:out value="${logoutMessage}"></c:out>
		</div>
    </c:if>

	<h1>Admin Dashboard</h1>

	<hr>

	<div class="container-fluid" style="width:40vw">
		<div class="card">
			<div class="card-block">
				<form method="POST" action="/login">
					<fieldset>
						<legend>Login</legend>
						<c:if test="${errorMessage != null}">
							<div class="alert alert-danger alert-dismissable">
	   							<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
	   							<c:out value="${errorMessage}"></c:out>
							</div>
    						</c:if>
    						<input type="text" class="form-control" name="username" placeholder="Email">
    						<input type="password" class="form-control" name="password" placeholder="Password">
    						<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
    						<button type="submit" class="btn btn-primary btn-block">Login!</button>
					</fieldset>
				</form>
			</div>
		</div>
	</div>
	
	<hr>
	
	<div class="container-fluid" style="width:40vw">
		<div class="card">
			<div class="card-block">
				<form:form method="POST" modelAttribute="user" action="/register">  
					<fieldset>
						<legend>Register</legend>
						<%-- <div class="alert alert-danger alert-dismissable">
   							<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
   							<form:errors path="user.*"/>
						</div> --%>
						<form:errors element="div" cssClass="alert alert-danger alert-dismissable" delimiter='</div><div class="alert alert-danger alert-dismissable">' path="*" />
						<form:input type="text" path="username" class="form-control" placeholder="Username"/>
						<form:input type="text" path="email" class="form-control" placeholder="Email"/>
						<form:input type="text" path="first_name" class="form-control" placeholder="First Name"/>
						<form:input type="text" path="last_name" class="form-control" placeholder="Last Name"/>
						<form:input type="password" path="password" class="form-control" placeholder="Password"/>
						<form:input type="password" path="passwordConfirmation" class="form-control" placeholder="Confirm Password"/>
						<button type="submit" class="btn btn-primary btn-block">Register!</button>
					</fieldset>
				</form:form>
			</div>
		</div>
	</div>
	
	<hr>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</body>
</html>