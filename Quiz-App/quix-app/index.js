if (localStorage.getItem("isLoggedIn") !== "true") {
    window.location.href = "login.html";
}
function logout() {
    localStorage.clear();
    window.location.href = "login.html";
}

function startQuiz(quizType) {
    window.location.href = `${quizType}-quiz.html`;
}
