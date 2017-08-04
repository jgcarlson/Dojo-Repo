<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h1>Pets!</h1>
	<br>
	<hr>
	<br>
	<form action="/Pets/dog">
		<fieldset>
			<legend>Make a Dog!</legend>
			<label>Name:</label>
			<input type="text" name="dog-name">
			<label>Breed:</label>
			<input type="text" name="dog-breed">
			<label>Weight:</label>
			<input type="text" name="dog-weight">
			<input type="submit" value="Submit">
		</fieldset>
	</form>
	<br>
	<hr>
	<br>
	<form action="/Pets/cat">
		<fieldset>
			<legend>Make a Cat!</legend>
			<label>Name:</label>
			<input type="text" name="cat-name">
			<label>Breed:</label>
			<input type="text" name="cat-breed">
			<label>Weight:</label>
			<input type="text" name="cat-weight">
			<input type="submit" value="Submit">
		</fieldset>
	</form>
	<br>
	<hr>
	<br>
</body>
</html>