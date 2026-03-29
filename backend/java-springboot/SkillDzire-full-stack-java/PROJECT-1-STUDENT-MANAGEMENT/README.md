
# 👨‍🎓 Student Management System – Spring MVC Project

> 🚀 Developed as part of SkillDzire's Full Stack Java Internship Program – May 2025 Batch

## 📌 Project Overview

This is a **Student Management System** built using the **Spring MVC framework**, designed to handle basic operations like viewing and managing student records. It demonstrates a complete full-stack Java web application using industry-standard tools and technologies.

---

## 🧱 Tech Stack

| Layer         | Technology           |
|---------------|----------------------|
| Backend       | Java, Spring MVC     |
| Frontend      | JSP (Java Server Pages) |
| Build Tool    | Maven                |
| Server        | Jetty (via Maven plugin) |
| Database      | MySQL (via XAMPP)    |
| ORM / DB Access | Spring JdbcTemplate |
| IDE Used      | IntelliJ IDEA / VS Code / Eclipse |

---

## 📂 Project Structure

```
Project-1-Student-Management/
├── pom.xml
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/studentapp/
│   │   │       ├── config/
│   │   │       ├── controller/
│   │   │       ├── dao/
│   │   │       └── model/
│   │   └── webapp/
│   │       ├── WEB-INF/
│   │       │   ├── views/
│   │       │   └── web.xml
└── README.md
```

---

## 🎯 Key Features

- View all students from database
- MVC layered structure (Model, View, Controller)
- JDBC-based DAO layer
- Live database connection via MySQL
- JSP frontend rendering using Model data

---

## ⚙️ How to Run the Project

### 1. Setup Database

- Open phpMyAdmin or MySQL CLI
- Run the following SQL:

```sql
CREATE DATABASE student_management;

USE student_management;

CREATE TABLE students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  course VARCHAR(50),
  age INT
);

INSERT INTO students (name, email, course, age) VALUES
('Uday', 'uday@example.com', 'CST', 21),
('Bhavana', 'bhavana@example.com', 'AI', 22);
```

### 2. Configure DB Credentials

Update your `DatabaseConfig.java` with:

```java
dataSource.setUsername("root");
dataSource.setPassword("");
```

> Use your actual MySQL credentials if different.

---

### 3. Run the Project

```bash
cd Project-1-Student-Management
mvn clean install
mvn jetty:run
```

Open your browser at:
```
http://localhost:8080/students/
```

---

## 🔧 Folder Usage

| Folder | Purpose |
|--------|---------|
| `config` | DB and MVC configuration |
| `controller` | Handles HTTP requests |
| `dao` | JDBC Data Access Layer |
| `model` | Java POJO for Student |
| `views` | JSP frontend for display |
| `WEB-INF/web.xml` | DispatcherServlet configuration |

---

## 📌 Screenshots

*(You can add screenshots here of your app and database)*

---

## 👨‍💻 Developer

**Name:** Somapuram Uday  
**Roll No:** 229X1A2856  
**Branch:** Computer Science and Technology  
**Internship:** SkillDzire – Full Stack Java, May 2025

---

## 🏁 Conclusion

This project demonstrates a complete end-to-end Java-based web application using Spring MVC, integrating backend logic with frontend JSP and real-time database access.

> ⭐ This project can be extended to include full CRUD operations, login functionality, and RESTful API endpoints.

---

## 🔗 GitHub Repository

[👉 View Code on GitHub](https://github.com/udaycodespace/SkillDzire-x-ST-Full-Stack-Java-25)
