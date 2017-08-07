<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Home Page</title>
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
</head>
<body>
<%@ 
	page import="com.web.models.Team" 
%>
	<div class="container-fluid" style="text-align:right">
		<a href="/TeamRoster/team"><h2>New Team</h2></a>
	</div>
	<div class="container-fluid" style="text-align:center">
		<h1>Prototype Roster</h1>
	</div>
	<div class="container-fluid" style="width:60vw;margin:20px auto;">
		<div class="table-responsive">
			<table class="table table-striped table-hover table-bordered">
				<thead>
					<tr>
						<th>Team</th>
						<th>Players</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					<c:forEach items="${team_list}" var="team">
					<tr>
						<td><h4>${team.team_name}</h4></td>
						<td><h4>${fn:length(team.getPlayers())}</h4></td>
						<td>
							<form action="/TeamRoster/teams">
								<button class="btn btn-primary btn-block" name="display" value="${ team.getId() }">Details</button>
							</form>
							<form action="/TeamRoster/teams">
								<button class="btn btn-danger btn-block" name="delete" value="${ team.getId() }">Delete</button>
							</form>
						</td>
					</tr>
					</c:forEach>
				</tbody>
			</table>
		</div>
	</div>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
</body>
</html>