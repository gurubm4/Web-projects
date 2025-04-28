document.getElementById("signin-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("message");

    // Simple validation example
    if (username === "admin" && password === "password") {
        message.style.color = "green";
        message.textContent = "Sign in successful!";
    } else {
        message.style.color = "red";
        message.textContent = "Invalid username or password.";
    }
});
