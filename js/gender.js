let selectedGender = null;

const cards =
document.querySelectorAll(".gender-card");

cards.forEach(card => {

    card.addEventListener("click", () => {

        cards.forEach(c =>
            c.classList.remove("selected")
        );

        card.classList.add("selected");

        selectedGender =
        card.dataset.gender;

    });

});

document
.getElementById("continueBtn")
.addEventListener("click", () => {

    if(!selectedGender){

        alert(
        "Please select a gender"
        );

        return;
    }

    localStorage.setItem(
        "gender",
        selectedGender
    );

    window.location.href =
    "skintone.html";

});