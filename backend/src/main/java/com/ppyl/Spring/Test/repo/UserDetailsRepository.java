package com.ppyl.Spring.Test.repo;

import com.ppyl.Spring.Test.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDetailsRepository extends JpaRepository<User, String> {
}
