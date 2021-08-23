package org.aadi.redditDemo.repository;

import org.aadi.redditDemo.model.Comment;
import org.aadi.redditDemo.model.Post;
import org.aadi.redditDemo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
    List<Comment> findByPost(Post post);

    List<Comment> findAllByUser(User user);
}
