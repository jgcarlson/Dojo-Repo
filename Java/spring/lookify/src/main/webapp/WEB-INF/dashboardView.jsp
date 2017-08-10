<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
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
	
	<div class="d-inline-flex flex-row align-self-center">
		<h2 class="mr-auto"><a href="/songs/new" class="mr-auto">Add New</a></h2><h2>|</h2>
		<h2 class="mr-auto"><a href="/songs/top10" class="mr-auto"> Top 10 Songs</a></h2><h2>|</h2>
		<form class="ml-auto form-inline" action="/search">
			<input type="text" class="form-control" name="query">
			<button type="submit" class="btn btn-primary">Search</button>
		</form>
	</div>
	
	<div class="table-responsive" style="width:60vw;margin:5vh auto;">
		<table class="table table-hover table-bordered table-striped">
			<thead>
				<tr>
					<th style="text-align:center">Name</th>
					<th style="text-align:center">Artist</th>
					<th style="text-align:center">Rating</th>
					<th style="text-align:center">Action</th>
				</tr>
			</thead>
			<tbody>
				<c:forEach items="${ songs }" var="song">
				<tr>
					<td>${ song.name }</td>
					<td>${ song.artist }</td>
					<td>${ song.rating }</td>
					<td>
						<form action="/songs/delete/${ song.id }" method="POST">
							<button type="submit" class="btn btn-danger">Delete</button>
						</form>
					</td>
				</tr>
				</c:forEach>
			</tbody>
		</table>
	</div>
		
	</div>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js"></script>
</body>
</html>