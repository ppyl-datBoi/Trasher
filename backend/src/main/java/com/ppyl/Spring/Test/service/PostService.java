package com.ppyl.Spring.Test.service;

import com.ppyl.Spring.Test.Models.Post;
import com.ppyl.Spring.Test.repo.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {

    @Autowired
    private PostRepository repository;

    public List<Post> getProducts() {
        return (List<Post>) repository.findAll();
    }
}
