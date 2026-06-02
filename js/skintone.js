let selectedTone = null;

const tones =
document.querySelectorAll(".tone");

tones.forEach(tone => {

    tone.addEventListener("click", () => {

        tones.forEach(t =>
            t.classList.remove("selected")
        );

        tone.classList.add("selected");

        selectedTone =
        tone.dataset.tone;

    });

});

document
.getElementById("continueBtn")
.addEventListener("click", () => {

    if(!selectedTone){

        alert(
        "Please select a skin tone"
        );

        return;
    }

    localStorage.setItem(
        "skinTone",
        selectedTone
    );

    window.location.href =
    "height.html";

});