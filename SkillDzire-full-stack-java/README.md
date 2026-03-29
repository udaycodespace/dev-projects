# 👨‍💻 SkillDzire x ST – Full Stack Java Internship 2025

Welcome to my repository for the **SkillDzire Technologies x ST Full Stack Java Internship (May–June 2025)**.  
This repository showcases all the major work completed during the internship — including backend development, REST APIs, secure authentication, and full-stack implementation using modern Java technologies.

> 🎓 This internship was part of my Summer Training from **G. Pulla Reddy Engineering College**, Department of Computer Science and Engineering.  
> I'm currently a final-year undergraduate passionate about backend systems and Java development.

---

## 🧑‍🎓 Intern Details

- **Name:** Somapuram Uday  
- **Roll No:** 229X1A2856  
- **Branch:** Computer Science and Technology  
- **Department:** Computer Science and Engineering  
- **Organization:** SkillDzire Technologies Pvt. Ltd.  
- **Internship Title:** Full Stack Java Training  
- **Batch:** May 2025

---

## 📁 Project 1: Student Management System (Spring MVC + MySQL + React)

### 📌 Description

This is the **primary full-stack project** developed during the internship. It is a complete **Student Management System**, featuring:
- Spring Boot backend with RESTful APIs
- MySQL database
- React frontend (forms, tables)
- JWT-based authentication and role-based access control

> ✅ This is the **main standalone project** of the internship.

🔗 [GitHub Source – Student Management System](https://github.com/udaycodespace/SkillDzire-x-ST-Full-Stack-Java-25/tree/main/PROJECT-1-STUDENT-MANAGEMENT)

---

### 🧱 Tech Stack

| Layer       | Technology                                 |
|-------------|---------------------------------------------|
| 🧠 Backend   | Java, Spring Boot, Spring MVC, JdbcTemplate |
| 🔐 Security | JWT, Spring Security                         |
| 🎨 Frontend | ReactJS, HTML, CSS                          |
| 🧰 Build    | Maven                                       |
| 💾 Database | MySQL (via XAMPP)                           |

---

### 📌 Features

- Full CRUD functionality for managing students
- Login & signup with JWT
- Role-based dashboard for Admin and Student users
- Form validation and error handling
- MVC architecture with REST API structure

---

## 📁 Project Module: Authentication System with JWT

### 📌 Description

This **Authentication Module** is a **sub-component** of the Student Management System project. It demonstrates secure user login, registration, and token-based access using **JWT**.

> ⚠️ Note: This is **not a standalone project**, but an essential module from Project 1.

---

### 🧱 Tech Stack

| Component   | Technology                  |
|------------|------------------------------|
| 🧠 Backend   | Java, Spring Boot            |
| 🔐 Auth     | JWT (JSON Web Tokens)        |
| 🧰 Build    | Maven                        |
| 💾 Database | MySQL (via XAMPP)            |
| 🔬 Testing  | Postman                      |

---

### 📂 Project Structure

```
PROJECT-2-AUTH-SYSTEM-JWT/
├── pom.xml
├── README.md
├── src/
│   └── main/
│       ├── java/
│       │   └── com/authapp/
│       │       ├── config/        # JWT & Security config
│       │       ├── controller/    # Auth endpoints
│       │       ├── dto/           # Request & response objects
│       │       ├── model/         # User entity
│       │       ├── repo/          # User JPA repository
│       │       └── service/       # Auth and user services
│       └── resources/
│           └── application.properties
```

---

### 🔐 Key Endpoints

- `POST /api/auth/register` – User registration  
- `POST /api/auth/login` – Login with JWT generation  
- `GET /api/protected` – Sample protected resource

---

## 🧪 How to Run (Both Projects)

> 💡 Requirements: Java, Maven, XAMPP, Postman or Browser

### For Student Management System
```bash
cd student-management
mvn clean install
mvn jetty:run
# Access at http://localhost:8080/students/
```

### For Auth Module
```bash
cd Project-2-Auth-System-JWT
mvn clean install
mvn spring-boot:run
# Access at http://localhost:8080/
```

---

## 🏁 Internship Summary

This internship provided:
- Hands-on training in Spring Boot, MVC, React, and REST APIs
- Real-world project development with role-based access
- Strong understanding of backend architecture and security principles

👨‍🏫 **Instructor**: Mr. Abhishek Garg  
👨‍💼 **Founder**: Mr. Srikanth Muppala, SkillDzire Technologies

---

## 📬 Contact

**Somapuram Uday**  
📧 Email: 229x1a2856@gmail.com  
🔗 GitHub: [github.com/udaycodespace](https://github.com/udaycodespace)  
🔗 LinkedIn: [linkedin.com/in/somapuramuday](https://www.linkedin.com/in/somapuramuday/)

---

> Thanks for reading! Feel free to explore the code or connect with me.
