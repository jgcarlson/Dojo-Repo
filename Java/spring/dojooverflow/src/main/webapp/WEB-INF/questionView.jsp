<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="x-ua-compatible" content="ie=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>DojoOverflow</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css">
</head>
<body style="text-align:center">
	<h1>Questions Dashboard</h1>
	<h6><a href="/questions/new">New Question</a></h6>
	
	<hr>
	
	<h3>${ question.question }</h3>
	Tags:
	<c:forEach items="${ question.getTags() }" var="tag">
		<span style="border:1px solid black;border-radius:8px;padding:2px">${ tag.subject }</span>
	</c:forEach>
	
	<h2>Answers</h2>
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-6">
			<label>Answers:</label>
				<div class="card">
					<div class="card-block">
						<c:forEach items="${ answers }" var="answer">
							<td>${ answer.answer }</td>
						</c:forEach>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<form action="/questions/${ question.id }" method="POST">
					<label>Your answer:</label>
					<textarea name="answer" rows="5" class="form-control"></textarea>
					<button class="btn btn-primary btn-block">Add answer....</button>
				</form>
			</div>
		</div>
	</div>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</body>
</html>