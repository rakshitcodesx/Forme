const heightSelect =
document.getElementById("heightSelect");

for(let feet = 4; feet <= 7; feet++){

    for(let inches = 0; inches < 12; inches++){

        const option =
        document.createElement("option");

        option.value =
        `${feet}'${inches}"`;

        option.textContent =
        `${feet}'${inches}"`;

        heightSelect.appendChild(option);

    }
}

document
.getElementById("continueBtn")
.addEventListener("click",()=>{

    if(heightSelect.value === ""){

        alert(
        "Please select your height"
        );

        return;
    }

    localStorage.setItem(
        "height",
        heightSelect.value
    );

    window.location.href =
    "bodyshape.html";

});