package org.aadi.redditDemo.repository;

import org.aadi.redditDemo.model.Post;
import org.aadi.redditDemo.model.Community;
import org.aadi.redditDemo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
    List<Post> findAllByCommunity(Community community);

    List<Post> findByUser(User user);
}
