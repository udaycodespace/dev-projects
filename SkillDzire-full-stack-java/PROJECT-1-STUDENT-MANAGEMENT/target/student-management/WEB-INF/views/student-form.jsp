<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head><title>Student Form</title></head>
<body>
    <h1><c:choose><c:when test="${student.id == 0}">Add New</c:when><c:otherwise>Edit</c:otherwise></c:choose> Student</h1>
    <form action="${pageContext.request.contextPath}/students/save" method="post">
        <input type="hidden" name="id" value="${student.id}" />
        Name: <input type="text" name="name" value="${student.name}" /><br/>
        Email: <input type="email" name="email" value="${student.email}" /><br/>
        Course: <input type="text" name="course" value="${student.course}" /><br/>
        Age: <input type="number" name="age" value="${student.age}" /><br/>
        <button type="submit">Save</button>
    </form>
</body>
</html>
