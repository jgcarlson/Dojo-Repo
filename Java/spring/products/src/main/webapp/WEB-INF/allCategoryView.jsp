<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="x-ua-compatible" content="ie=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>Home Page</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css">
</head>
<body style="text-align:center">
	
	<h4><a href="/products/new">New product....</a></h4>
	<h4><a href="/products/all">All products....</a></h4>
	<h4><a href="/categories/new">New categories....</a></h4>
	<h4><a href="/categories/all">All categories....</a></h4>
	
	<hr>
	
	<h1>All Categories</h1>
	
	<div class="table-responsive">
		<table class="table table-hover table-bordered table-striped">
			<thead>
				<tr>
					<th>ID</th>
					<th>Category</th>
				</tr>
			</thead>
			<tbody>
				<c:forEach items="${ categories }" var="category">
				<tr>
					<td><a href="/categories/${ category.id }">${ category.id }</a></td>
					<td>${ category.name }</td>
				</tr>
				</c:forEach>
			</tbody>
		</table>
	</div>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</body>
</html>