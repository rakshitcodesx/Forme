const password =
document.getElementById("password");

const confirmPassword =
document.getElementById("confirmPassword");

const togglePassword =
document.getElementById("togglePassword");

const toggleConfirm =
document.getElementById("toggleConfirm");

togglePassword.addEventListener("click",()=>{

    password.type =
    password.type === "password"
    ? "text"
    : "password";

});

toggleConfirm.addEventListener("click",()=>{

    confirmPassword.type =
    confirmPassword.type === "password"
    ? "text"
    : "password";

});

document
.getElementById("signupForm")
.addEventListener("submit",(e)=>{

    e.preventDefault();

    if(
        password.value !==
        confirmPassword.value
    ){

        alert("Passwords do not match");

        return;
    }
     window.location.href = "gender.html";
});