const password =
document.getElementById("password");

const togglePassword =
document.getElementById("togglePassword");

togglePassword.addEventListener("click", () => {

    password.type =
    password.type === "password"
    ? "text"
    : "password";

});

document
.getElementById("loginForm")
.addEventListener("submit", (e) => {

    e.preventDefault();

    window.location.href = "gender.html";

});