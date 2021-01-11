package com.ppyl.Spring.Test.repo;

import com.ppyl.Spring.Test.Models.Post;
import org.springframework.data.repository.CrudRepository;

public interface PostRepository extends CrudRepository<Post, Long> {
}
