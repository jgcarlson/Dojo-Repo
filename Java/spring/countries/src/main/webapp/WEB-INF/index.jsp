<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en">
<head>
	<meta http-equiv="x-ua-compatible" content="ie=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>Queries and Joins</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css">
</head>
<body style="text-align:center">
	<h1>Queries and Joins</h1>
	
	<c:forEach items="${ stuffs }" var="stuff">
		<p>${ stuff[0] }, ${ stuff[1] }</p>
	</c:forEach>
	
	<ol>
		<li>@Query("SELECT l, c FROM Language l JOIN l.country c WHERE l.language = 'SLOVENE'")</li>
		<li>@Query("SELECT c, count(n) AS num FROM Country c JOIN c.cities n GROUP BY c ORDER BY num DESC")</li>
		<li>@Query("SELECT count(c) FROM City c JOIN c.country n WHERE c.population > 500000 AND n.name = 'MEXICO'")</li>
		<li>@Query("SELECT c.name, l FROM Country c JOIN c.languages l WHERE l.percentage > 89")</li>
		<li>@Query("SELECT c FROM Country c WHERE c.population > 100000 AND c.surface_area < 501")</li>
		<li>@Query("SELECT c.name FROM Country c WHERE c.government_form = 'Constitutional Monarchy' AND life_expectancy > 75")</li>
		<li>@Query("SELECT n, c.name, c.district, c.population FROM City c JOIN c.country n WHERE c.district = 'Buenos Aires' AND c.population > 500000")</li>
		<li>@Query("SELECT c.region, count(c) FROM Country c GROUP BY region ORDER BY count(c) DESC")</li>
	</ol>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</body>
</html>