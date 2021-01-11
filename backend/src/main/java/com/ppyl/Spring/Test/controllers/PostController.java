package com.ppyl.Spring.Test.controllers;

import com.ppyl.Spring.Test.Models.Post;
import com.ppyl.Spring.Test.repo.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
    public class PostController {

    @Autowired
    public PostRepository postRepository;

    @GetMapping("/all-apps")
    public Iterable<Post> getApps() {
        return postRepository.findAll();
     }

    @PostMapping("/app")
    public Post createApp(@RequestBody Post post) {
        return postRepository.save(post);
    }
    @PutMapping("/app")
    public void changeAppStatus(@RequestBody Post post) {
        postRepository.save(post);
    }

    @DeleteMapping("/app")
        public void deleteApp(@RequestBody Long id) {
        postRepository.deleteById(id);
        }

    }


          


