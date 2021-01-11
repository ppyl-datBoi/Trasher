package com.ppyl.Spring.Test.controllers;

import com.ppyl.Spring.Test.Models.User;
import com.ppyl.Spring.Test.repo.UserDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

import java.util.HashMap;

@RestController
public class UserController {
    @Autowired
    public UserDetailsRepository userDetailsRepository;

    @GetMapping("/profile")
    public HashMap<Object, Object> main (@AuthenticationPrincipal User user) {
        HashMap<Object, Object> data = new HashMap<>();
        data.put("profile", user);
        return data;
    }

    @GetMapping("/users")
    public Iterable<User> getUsers() {
        return userDetailsRepository.findAll();
    }

    @GetMapping("/signin")
    public RedirectView handleFoo() {
        return new RedirectView("http://localhost:8080");
    }

}
