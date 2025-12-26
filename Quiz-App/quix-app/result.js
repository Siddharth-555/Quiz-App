window.onload = function () {
    const score = localStorage.getItem("score");
    const total = localStorage.getItem("total");

    console.log("Score:", score, "Total:", total); // DEBUG

    if (score !== null && total !== null) {
        document.getElementById("final-score").textContent =
            `Your Score: ${score} / ${total}`;
    } else {
        document.getElementById("final-score").textContent =
            "Score not available";
    }
};

function goBack() {
    window.location.href = "index.html";
}
