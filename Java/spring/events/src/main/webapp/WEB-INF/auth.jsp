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
    						<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}">
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
						<form:input type="text" path="username" class="form-control" placeholder="Email"/>
						<form:input type="text" path="first_name" class="form-control" placeholder="First Name"/>
						<form:input type="text" path="last_name" class="form-control" placeholder="Last Name"/>
						<form:select path="state" class="form-control">
							<option selected disabled>Please select a state....</option>
							<option value="AL">AL</option>
							<option value="AK">AK</option>
							<option value="AR">AR</option>	
							<option value="AZ">AZ</option>
							<option value="CA">CA</option>
							<option value="CO">CO</option>
							<option value="CT">CT</option>
							<option value="DC">DC</option>
							<option value="DE">DE</option>
							<option value="FL">FL</option>
							<option value="GA">GA</option>
							<option value="HI">HI</option>
							<option value="IA">IA</option>	
							<option value="ID">ID</option>
							<option value="IL">IL</option>
							<option value="IN">IN</option>
							<option value="KS">KS</option>
							<option value="KY">KY</option>
							<option value="LA">LA</option>
							<option value="MA">MA</option>
							<option value="MD">MD</option>
							<option value="ME">ME</option>
							<option value="MI">MI</option>
							<option value="MN">MN</option>
							<option value="MO">MO</option>	
							<option value="MS">MS</option>
							<option value="MT">MT</option>
							<option value="NC">NC</option>	
							<option value="NE">NE</option>
							<option value="NH">NH</option>
							<option value="NJ">NJ</option>
							<option value="NM">NM</option>			
							<option value="NV">NV</option>
							<option value="NY">NY</option>
							<option value="ND">ND</option>
							<option value="OH">OH</option>
							<option value="OK">OK</option>
							<option value="OR">OR</option>
							<option value="PA">PA</option>
							<option value="RI">RI</option>
							<option value="SC">SC</option>
							<option value="SD">SD</option>
							<option value="TN">TN</option>
							<option value="TX">TX</option>
							<option value="UT">UT</option>
							<option value="VT">VT</option>
							<option value="VA">VA</option>
							<option value="WA">WA</option>
							<option value="WI">WI</option>	
							<option value="WV">WV</option>
							<option value="WY">WY</option>
						</form:select>
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