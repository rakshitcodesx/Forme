let selectedShape = null;

const cards =
document.querySelectorAll(".shape-card");

cards.forEach(card => {

    card.addEventListener("click", () => {

        cards.forEach(c =>
            c.classList.remove("selected")
        );

        card.classList.add("selected");

        selectedShape =
        card.dataset.shape;

    });

});

document
.getElementById("finishBtn")
.addEventListener("click", () => {

    if(!selectedShape){

        alert(
        "Please select a body shape"
        );

        return;
    }

    localStorage.setItem(
        "bodyShape",
        selectedShape
    );

    const userProfile = {

        gender:
        localStorage.getItem("gender"),

        skinTone:
        localStorage.getItem("skinTone"),

        height:
        localStorage.getItem("height"),

        bodyShape:
        selectedShape

    };

    localStorage.setItem(
        "userProfile",
        JSON.stringify(userProfile)
    );

    console.log(userProfile);

    window.location.href = "home.html";

    // next page
    // home.html

});