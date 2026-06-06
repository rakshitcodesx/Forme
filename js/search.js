/* =========================
   STYLE TAG SYSTEM
========================= */


const styles = {


    aesthetic: [

        "Old Money",
        "Streetwear",
        "Minimal",
        "Y2K",
        "Vintage",
        "Dark Academia",
        "Coquette",
        "Cottagecore",
        "Grunge",
        "Goth",
        "Techwear",
        "Preppy",
        "Punk",
        "Alt Fashion",
        "Biker",
        "Romantic",
        "Floral",
        "Chic"

    ],



    lifestyle: [

        "Athleisure",
        "Loungewear",
        "Basic",
        "Oversized",
        "Slim Fit",
        "Relaxed",
        "Unisex"

    ],




    occasion: [

        "Business Casual",
        "Professional",
        "Black Tie",
        "Eveningwear",
        "Suiting",
        "Festival",
        "Wedding",
        "Vacation",
        "Workwear"

    ]


};







function createTags(){


    Object.keys(styles).forEach(category=>{


        const container =
        document.getElementById(
            `${category}-tags`
        );



        styles[category].forEach(style=>{


            const button =
            document.createElement("button");



            button.className =
            "vibe-chip";



            button.innerText =
            style;





            button.onclick=()=>{


                button.classList.toggle(
                    "active"
                );


            };



            container.appendChild(button);



        });



    });



}



createTags();










/* =========================
   CREATOR SEARCH
========================= */


const creators = [


    {
        name:"oldmoneyclub",
        style:"Old Money"
    },


    {
        name:"streetwearking",
        style:"Streetwear"
    },


    {
        name:"miafits",
        style:"Minimal"
    },


    {
        name:"alexstyle",
        style:"Y2K"
    },


    {
        name:"formegirl",
        style:"Coquette"
    }


];





const creatorList =
document.getElementById(
    "creator-list"
);




const searchInput =
document.getElementById(
    "creatorSearch"
);









function showCreators(list){



    creatorList.innerHTML="";



    list.forEach(creator=>{


        const card =
        document.createElement(
            "div"
        );



        card.className =
        "creator-card";



        card.innerHTML = `


        <strong>
        @${creator.name}
        </strong>


        <br>


        <small>
        ${creator.style}
        </small>


        `;



        creatorList.appendChild(card);



    });




}









function openCreators(){


    creatorList.style.display =
    "grid";


    showCreators(creators);


}









searchInput.addEventListener(
    "focus",
    openCreators
);






searchInput.addEventListener(
    "input",
    ()=>{


        const value =
        searchInput.value
        .toLowerCase();




        const filtered =
        creators.filter(
            creator=>

            creator.name
            .toLowerCase()
            .includes(value)

        );



        openCreators();



        showCreators(filtered);



    }

);