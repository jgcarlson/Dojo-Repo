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
				<h1>Home Page</h1>
			</div>
			<div class="col-md=3">
				<form id="logoutForm" method="POST" action="/logout">
			        <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
			        <button type="submit" class="btn btn-outline-danger">Logout</button>
	    			</form>
			</div>
		</div>
	</div>
	
	<hr>
	
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-3">
				<form:form action="/events/add" method="POST" modelAttribute="event">
					<fieldset>
						<legend>Create an Event</legend>
						<form:input path="name" type="text" class="form-control" placeholder="Event Name" />
						<form:input path="city" type="text" class="form-control" placeholder="City" />
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
						<form:input path="date" placeholder="Date of Event" type="text" onfocus="(this.type='date')" onblur="(this.type='text')" class="form-control" />
						<button type="submit" class="btn btn-primary btn-block">Create event!</button>
						</fieldset>
					</form:form>
				</div>
				<div class="col-md-9">
					<h3>Events in Your State</h3>
					<div class="table-responsive">
						<table class="table table-striped table-bordered table-hover">
							<thead>
								<tr>	
									<th>Event Name</th>
									<th>Date</th>
									<th>Location</th>
									<th>Host</th>
									<th>Options</th>
								</tr>
							</thead>
							<tbody>
								<c:forEach items="${ instate }" var="event">
								<tr>
									<td><a href="/events/${ event.id }">${ event.name }</a></td>
									<td>${ event.date }</td>
									<td>${ event.city }</td>
									<td>${ event.host.first_name } ${ event.host.last_name }</td>
									<td>
										<div class="d-inline-flex">
											<c:choose>
												<c:when test="${ event.host.equals(user) }">
													<form action="/events/${ event.id }/edit">
														<button type="submit" class="btn btn-warning">Edit</button>
													</form>
													<form action="/events/${ event.id }/delete" method="POST">
														<button type="submit" class="btn btn-danger">Delete</button>
														<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
													</form>
												</c:when>
												<c:otherwise>
													<c:choose>
														<c:when test="${ event.users.contains(user) }">
															<!-- if (going to event) { include cancel button } -->
															<form action="/events/${ event.id }/unjoin" method="POST">
																<button type="submit" class="btn btn-warning">Not going, actually.</button>
																<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
															</form>
														</c:when>
														<c:otherwise>
															<form action="/events/${ event.id }/join" method="POST">
																<button type="submit" class="btn btn-success">Join</button>
																<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
															</form>
														</c:otherwise>
													</c:choose>
												</c:otherwise>
											</c:choose>
										</div>
									</td>
								</tr>
								</c:forEach>
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-3"></div>
				<div class="col-md-9">
					<h3>Events Out of Your State</h3>
					<div class="table-responsive">
						<table class="table table-striped table-bordered table-hover">
							<thead>
								<tr>	
									<th>Event Name</th>
									<th>Date</th>
									<th>Location</th>
									<th>Host</th>
									<th>Options</th>
								</tr>
							</thead>
							<tbody>
								<c:forEach items="${ outstate }" var="event">
								<tr>
									<td><a href="/events/${ event.id }">${ event.name }</a></td>
									<td>${ event.date }</td>
									<td>${ event.city }, ${ event.state }</td>
									<td>${ event.host.first_name } ${ event.host.last_name }</td>
									<td>
										<div class="d-inline-flex">
											<c:choose>
												<c:when test="${ event.host.equals(user) }">
													<form action="/events/${ event.id }/edit">
														<button type="submit" class="btn btn-warning">Edit</button>
													</form>
													<form action="/events/${ event.id }/delete" method="POST">
														<button type="submit" class="btn btn-danger">Delete</button>
														<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
													</form>
												</c:when>
												<c:otherwise>
													<c:choose>
														<c:when test="${ event.users.contains(user) }">
															<!-- if (going to event) { include cancel button } -->
															<form action="/events/${ event.id }/unjoin" method="POST">
																<button type="submit" class="btn btn-warning">Not going, actually.</button>
																<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
															</form>
														</c:when>
														<c:otherwise>
															<form action="/events/${ event.id }/join" method="POST">
																<button type="submit" class="btn btn-success">Join</button>
																<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
															</form>
														</c:otherwise>
													</c:choose>
												</c:otherwise>
											</c:choose>
										</div>
									</td>
								</tr>
								</c:forEach>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
		
		
		
	
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</body>
</html>