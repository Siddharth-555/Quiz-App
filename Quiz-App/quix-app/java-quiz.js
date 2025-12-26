let currentQuestionIndex = 0;
let score = 0;
let questions = [];

// Fetch questions from backend
async function fetchQuestions() {
    try {
        const response = await fetch(
            'http://localhost:8080/api/questions/JAVA' 
        );
        questions = await response.json();

        document.getElementById('total-questions').textContent = questions.length;
        displayQuestion();
    } catch (error) {
        console.error('Error fetching questions:', error);
        document.getElementById('question-text').textContent =
            "Failed to load questions. Please try again.";
    }
}


function displayQuestion() {
    if (questions.length === 0) return;

    const currentQuestion = questions[currentQuestionIndex];

    document.getElementById('question-text').textContent =
        currentQuestion.questionText;

    document.getElementById('current-question').textContent =
        currentQuestionIndex + 1;

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.className = 'option';
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
    });
}


function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;

    if (selectedOption === correctAnswer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        // Save score & redirect
        localStorage.setItem("score", score);
        localStorage.setItem("total", questions.length);
        window.location.href = "result.html";
    }
}

window.onload = fetchQuestions;
