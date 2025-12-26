function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const error = document.getElementById("error");

    fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
    .then(res => res.text())
    .then(data => {
        console.log("SERVER RESPONSE:", data);

        if (data === "SUCCESS") {
            localStorage.setItem("isLoggedIn", "true");
            window.location.href = "index.html";
        } else {
            error.innerText = "Invalid username or password";
        }
    })
    .catch(err => {
        console.error(err);
        error.innerText = "Server error";
    });
}
