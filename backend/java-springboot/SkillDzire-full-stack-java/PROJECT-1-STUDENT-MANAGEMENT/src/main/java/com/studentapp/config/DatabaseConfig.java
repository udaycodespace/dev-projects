package com.studentapp.config;

import javax.sql.DataSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

@Configuration
public class DatabaseConfig {

    @Bean
    public DataSource dataSource() {
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        
        // ✅ MySQL JDBC driver
        dataSource.setDriverClassName("com.mysql.cj.jdbc.Driver");

        // ✅ JDBC URL - change "student_management" only if your DB name is different
        dataSource.setUrl("jdbc:mysql://localhost:3306/student_management");

        // ✅ MySQL username - default is "root" for XAMPP
        dataSource.setUsername("root");

        // ✅ MySQL password - empty string if you didn’t set one
        dataSource.setPassword("");

        return dataSource;
    }

    @Bean
    public JdbcTemplate jdbcTemplate() {
        return new JdbcTemplate(dataSource());
    }
}
