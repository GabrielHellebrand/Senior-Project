document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signup-form");
    const loginForm = document.getElementById("login-form");
    const errorMessage = document.getElementById("error-message");
    const signupErrorMessage = document.getElementById("signup-error-message");
    const userInfo = document.getElementById("user-info");

    // This is for signing up to the website
    if (signupForm) {
        signupForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const username = document.getElementById("signup-username").value;
            const password = document.getElementById("signup-password").value;

            // This method checks if the user already exists
            if (localStorage.getItem(username)) {
                signupErrorMessage.textContent = "Username already taken!";
                signupErrorMessage.style.color = "red";
                return;
            }

            // This saves user credentials, could be improved though.
            localStorage.setItem(username, JSON.stringify({ username, password }));
            localStorage.setItem("user", username); // Immediate log in
            window.location.href = "index.html"; // Redirects to the homepage
        });
    }

    // This is the logic to the login including username and password
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            const userData = localStorage.getItem(username);
            if (userData) {
                const user = JSON.parse(userData);
                if (user.password === password) {
                    localStorage.setItem("user", username);
                    window.location.href = "index.html"; // This redirects the user when they enter there username
                    return;
                }
            }
            errorMessage.textContent = "Invalid username or password!";
            errorMessage.style.color = "red";
        });
    }

    // Check if user is logged in
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
        document.querySelector("nav ul").innerHTML += `<li><a href="#" id="logout">Logout</a></li>`;
        userInfo.innerHTML = `<p>Welcome, <strong>${loggedInUser}</strong>!</p>`; // Display username

        // Logout methods
        document.getElementById("logout").addEventListener("click", function () {
            localStorage.removeItem("user");
            window.location.href = "index.html";
        });
    }
});