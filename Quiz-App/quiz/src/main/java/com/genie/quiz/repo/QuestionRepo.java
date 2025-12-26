package com.genie.quiz.repo;

import com.genie.quiz.entity.QuizQuestion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuestionRepo extends JpaRepository<QuizQuestion, Long> {

    List<QuizQuestion> findBySubject(String subject);

}
