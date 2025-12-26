package com.genie.quiz.controller;

import com.genie.quiz.dto.LoginRequest;
import com.genie.quiz.entity.QuizQuestion;
import com.genie.quiz.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("/api")
public class LoginController {


    @Autowired
    QuestionService questionService;

    // Hardcoded credentials for now
    private final String USERNAME = "user";
    private final String PASSWORD = "password";

    @PostMapping("/login")
    public String login(@RequestBody LoginRequest loginRequest) {

        System.out.println("USERNAME = " + loginRequest.getUsername());
        System.out.println("PASSWORD = " + loginRequest.getPassword());

        if ("user".equals(loginRequest.getUsername()) &&
                "password".equals(loginRequest.getPassword())) {
            return "SUCCESS";
        }
        return "FAIL";
    }

    @GetMapping("/questions/{subject}")
    public List<QuizQuestion> getQuestions(@PathVariable String subject) {
        return questionService.getQuestionsBySubject(subject.toUpperCase());
    }


    @PostMapping(value = "/save", consumes = "application/json", produces = "application/json")
    public QuizQuestion saveQuestion(@RequestBody QuizQuestion question) {
        return questionService.saveQuestion(question);
    }

}
