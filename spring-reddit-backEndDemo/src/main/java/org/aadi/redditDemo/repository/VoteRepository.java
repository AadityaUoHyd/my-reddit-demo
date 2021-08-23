package org.aadi.redditDemo.repository;

import org.aadi.redditDemo.model.Post;
import org.aadi.redditDemo.model.User;
import org.aadi.redditDemo.model.Vote;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface VoteRepository extends JpaRepository<Vote, Long> {
    Optional<Vote> findTopByPostAndUserOrderByVoteIdDesc(Post post, User currentUser);
}
