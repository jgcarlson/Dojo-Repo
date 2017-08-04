<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h1>Welcome to the Great Number Game!</h1>
	<h3>Guess a number between 1 and 100.</h3>
	<hr>
	${ response }
	<form action="/GreatNumberGame/" method="POST">
		<label>Your guess:</label>
		<input type="text" name="guess">
		<input type="submit" value="Guess">
	</form>
	<hr>
</body>
</html>