// 1. Kreiptis į HTML'e sukurta div wrapper'į bei į jį įdėti savo vardą;

const element = document.getElementById("wrapper")
element.innerHTML = 'Paulius'

// 2. Gauti wrpper'į pagal klasę naudojant querySelector bei pakeisti fono spalvą;

const divElement = document.querySelector("#wrapper");
      divElement.classList.add("background")


const backgrounds = document.querySelector('.background')
    backgrounds.style.backgroundColor = 'yellow'


// 3. Duoti buttonui onclick funkciją. Paspaudus ant button'o turi pasikeist jau egzistuojančio puslapyje teksto spalva;

const onClickButton = () => {
    document.getElementById("wrapper").style.color = 'red'
}

// 4. Gauti visus elementus pagal klasę tokiu butu, kad butu gaunamas masyvas, o jame elementai. Vėliau norimiems masyvo elementams  priskirt skirtingą spalvą bei skirtingą background spalvą;


    const allElements = document.getElementsByClassName("color");
    allElements[0].style.backgroundColor = "green";
    allElements[1].style.backgroundColor = "red";

// 5. Paselectint html tagą bei naudojant classList pridėt papildomų stilių; 
const htmlElement = document.documentElement;
htmlElement.classList.add("background-color");

const moreStylesAdd = document.querySelector(".background-color")
    moreStylesAdd.style.backgroundColor = 'blue'
    moreStylesAdd.style.color = 'white'

    

// EXTRA: Iš skirtingu text wrapperiu gaut elementus pagal klasę bei atvaizduot jų texto contentą consolėj for ciklo pagalba;