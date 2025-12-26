package com.genie.quiz.service;

import com.genie.quiz.entity.QuizQuestion;
import com.genie.quiz.repo.QuestionRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionService {

    @Autowired
    private QuestionRepo questionRepo;

    public QuizQuestion saveQuestion(QuizQuestion question) {
        return questionRepo.save(question);
    }

    public List<QuizQuestion> getQuestionsBySubject(String subject) {
        return questionRepo.findBySubject(subject);
    }
}
