const charUrl = "https://lotrapi.co/api/v1/characters";

const cityUrl="https://lotrapi.co/api/v1/cities";

function fetchSelect(thirdUrl : string ,random : number){
    fetch(thirdUrl + random)
    .then((response) =>{
        if (response.ok){
            return response.json();
        } else {
            throw new Error("NETWORK RESPONSE ERROR");
        }
    })
    .then((data) =>{
        displayUserChoice(data)
    })
}

function displayUserChoice(data : any){
    const element = document.querySelector("tbody") as HTMLElement;
    const InfoElement= document.getElementById('info') as HTMLElement;
    element.remove();
    let userChoise = data;
    let tab = `<tr>
    <th>Title:</th>
   </tr>`;
    InfoElement.innerHTML += tab +=
  `<tr>
  <td>${data.title}</td>
  </tr>`
     console.log(userChoise)
};

function selectChoice(event: any){
    var yourSelect = document.getElementById(event.target.id) as HTMLSelectElement;
    let thirdUrl : string = "";
    let random : number = 0;
    switch(yourSelect.options[yourSelect.selectedIndex].id) {
        case "books":
            thirdUrl= "https://lotrapi.co/api/v1/books/";
            random= Math.floor(Math.random() * 4) +1; 
            break; 
        case "films":
           thirdUrl= "https://lotrapi.co/api/v1/films/";
           random= Math.floor(Math.random() * 6) +1;
            break;
    }
    fetchSelect(thirdUrl, random);
    event.document
    event.preventDefault();
};

let select = document.querySelector('#userChoice')as HTMLElement;
select.addEventListener('change', selectChoice);




function fetchChar(charId : number) {
    fetch(charUrl)
    .then((response) =>  {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("NETWORK RESPONSE ERROR");
        }
      })
    .then((data : any) => {
        displayChar(data, charId)
    })
};

function displayChar(data : any, charId : number) {
    const element = document.querySelector("tbody") as HTMLElement;
    const infoSpace = document.getElementById('info') as HTMLElement;
    element.remove();
    let myChar = data.results[charId];
    let tab = 
    `<tr>
      <th>Name:</th>
      <th>Hair color:</th>
      <th>Date of Birth:</th>
      <th>Eye Color:</th>
     </tr>`;
    infoSpace.innerHTML += tab +=
    `<tr>
    <td>${myChar.name}</td>
    <td>${myChar.hair_color}</td>
    <td>${myChar.date_of_birth}</td> 
    <td>${myChar.eye_color}</td> 
    </tr>`
};
function charButton(event : any){
    let charId : number = 12;
    switch(event.target.name){
        case "Frodo":
            charId=0;
            break;
        case "Sam":
            charId=1;
            break;
        case "Gandalf":
            charId=2; 
            break; 
        case "Aragorn":
            charId=4;
            break;
        case "Legolas":
            charId=7;
            break;
        case "Gimli":
            charId=8; 
            break; 
        case "Merry":
            charId=5;
            break;
        case "Pippin":
            charId=6;
            break;
        case "Boromir":
            charId=9; 
            break; 
    }
    fetchChar(charId);
    event.document
    event.preventDefault();
}
let frodo = document.querySelector('#Frodo') as HTMLElement;
frodo.addEventListener('click', charButton);
let sam = document.querySelector('#Sam')as HTMLElement;
sam.addEventListener('click', charButton);
let gandalf =  document.querySelector('#Gandalf')as HTMLElement;
gandalf.addEventListener('click', charButton);
let aragorn = document.querySelector('#Aragorn')as HTMLElement;
aragorn.addEventListener('click', charButton);
let legolas = document.querySelector('#Legolas')as HTMLElement;
legolas.addEventListener('click', charButton);
let gimli = document.querySelector('#Gimli')as HTMLElement;
gimli.addEventListener('click', charButton);
let merry = document.querySelector('#Merry')as HTMLElement;
merry.addEventListener('click', charButton);
let pippin = document.querySelector('#Pippin')as HTMLElement;
pippin.addEventListener('click', charButton);
let boromir = document.querySelector('#Boromir')as HTMLElement;
boromir.addEventListener('click', charButton);

function fetchCity(cityId : number) {
    fetch(cityUrl)
        .then(function (response) {
        if (response.ok) {
            return response.json();
        }
        else {
            throw new Error("NETWORK RESPONSE ERROR");
        }
    })
        .then(function (data) {
        displayCity(data, cityId);
    });
}
;
function displayCity(data : any, cityId : number) {
    const element = document.querySelector("tbody") as HTMLElement;
    const infoSpace = document.getElementById('info') as HTMLElement;
    element.remove();
    var theCity = data.results[cityId];
    var tab = `<tr>
    <th>Name:</th>
    <th>Founding:</th>
    <th>Location:</th>
    <th>Inhabitants:</th>
   </tr>`;
   infoSpace.innerHTML += tab +=
  `<tr>
  <td>${theCity.name}</td>
  <td>${theCity.founded_date}</td>
  <td>${theCity.location}</td> 
  <td>${theCity.inhabitants}</td> 
  </tr>`
}
;
function cityButton(event : any) {
    var cityId = 100;
    switch (event.target.name) {
        case "Minas Tirith":
            cityId = 6;
            break;
        case "Annúminas":
            cityId = 0;
            break;
        case "Fornost":
            cityId = 1;
            break;
        case "Michel Delving":
            cityId = 2;
            break;
        case "Valmar":
            cityId = 3;
            break;
        case "Elvenking's Halls":
            cityId = 4;
            break;
        case "Erebor":
            cityId = 5;
            break;
    }
    fetchCity(cityId);
    event.document;
    event.preventDefault();
}
let MT  = document.querySelector('#MT')as HTMLElement;
MT.addEventListener('click', cityButton);
let annu  = document.querySelector('#Annu')as HTMLElement;
annu.addEventListener('click', cityButton);
let fornost  = document.querySelector('#Fornost')as HTMLElement;
fornost.addEventListener('click', cityButton);
let MD  = document.querySelector('#MD')as HTMLElement;
MD.addEventListener('click', cityButton);
let valmar  = document.querySelector('#Valmar')as HTMLElement;
valmar.addEventListener('click', cityButton);
let EH = document.querySelector('#EH')as HTMLElement;
EH.addEventListener('click', cityButton);
let erebor  = document.querySelector('#Erebor')as HTMLElement;
erebor.addEventListener('click', cityButton);
