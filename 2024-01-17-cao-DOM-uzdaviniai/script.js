// DOM užduotys
// Teksto elemento kūrimas
// LENGVAS

// Susikurkite projektą, be jokių HTML elementų <body> viduje. 

// Sukurkite funkciją createTextElement, kuri sukuria ir grąžina naują DOM elementą p su pateiktu tekstu  ir pridėkite į <body>.


// function createTextElement(text) {
//     const p = document.createElement('p')
//     p.textContent = text
//     return p
// }
// document.body.appendChild(createTextElement('Ger dein!'))








// Elemento atnaujinimas
// LENGVAS

// Sukurkite HTML faile <h1> žymą su id="name" ir tekstu "unknown". Naudodami JavaScript pakeiskite šio elemento tekstą į savo vardą .

// const name = 'Paulius'
// document.getElementById('name').textContent = name









// Klaida DOM’e
// LENGVAS

// Nusikopijuokite apačioje esantį kodą ir su JavaScript pasikeiskite antrame paragrafe esantčio <span> tekstą - iš 'red' į 'blue':




// document.querySelector('.bluetext > span').textContent = 'blue'





// Automobilių gamintojų sąrašas
// VIDUTINIS

// Sukurkite ordered list su trimis list item duota eilės tvarka: "BMW group", "VW group" ir "GE".


// <ol>
//   <li>BMW group</li>
//   <li>VW group</li>
//   <li>GE</li>
// </ol>
// Naudodami JavaScript apkeiskite pirmus du sąrašo elementus vietomis. Tačiau, kabliukas - negalima JavaScript įrašyti testo (kitaip tariant hard-codinti). Pirma, Jūs turite pasiimt pirmo ir antro sąrašo elemento reikšmes ir jas išsisaugoti į kintamuosius.


// const firstListItem = document.querySelector('li:first-child');
// const secondListItem = document.querySelector('li:nth-child(2)');

// const bmw_group = firstListItem.textContent;
// const vw_group = secondListItem.textContent;

// firstListItem.textContent = vw_group;
// secondListItem.textContent = bmw_group;










// Prekių sąrašas
// VIDUTINIS

// Sukurkite funkciją createList, kuri priima masyvą su tekstu ir sukuria DOM ul elementą su li vaikais, atitinkančiais masyvo elementus.

// Pavyzdys, kaip galime naudoti šią funkciją:

// function createList(items) {
//     const ul = document.createElement('ul');
//     items.forEach(item => {
//         const li = document.createElement('li');
//         li.textContent = item;
//         ul.appendChild(li);
//     });
//     return ul;
// }

// document.body.appendChild(createList(["Pienas", "Duona", "Kiaušiniai"]))









