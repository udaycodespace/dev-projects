package com.authapp.controller;

import com.authapp.model.User;
import com.authapp.service.UserService;
import com.authapp.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/register")
    public User register(@RequestBody User user) {
        return userService.register(user);
    }

    @PostMapping("/login")
    public Map<String, String> login(@RequestBody User user) {
        User found = userService.findByUsername(user.getUsername());
        if (found != null && found.getPassword().equals(user.getPassword())) {
            String token = jwtUtil.generateToken(found.getUsername());
            Map<String, String> response = new HashMap<>();
            response.put("token", token);
            return response;
        }
        throw new RuntimeException("Invalid credentials");
    }
}
