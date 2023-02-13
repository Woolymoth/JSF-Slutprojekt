//Comment

const charUrl = "https://lotrapi.co/api/v1/characters";

const cityUrl="https://lotrapi.co/api/v1/cities";

function fetchSelect(thirdUrl : any,random : number){
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

function displayUserChoice(data :any){
    const element : any = document.querySelector("tbody");
    element.remove();
    let userChoise = data;
    let tab = `<tr>
    <th>Title</th>
   </tr>`;
   // @ts-ignore
   const infoSpace = document.getElementById('info')!.innerHTML += tab +=
  `<tr>
  <td>${data.title}</td>
  </tr>`
     console.log(userChoise)
};

function selectChoice(event: any){
    var yourSelect = document.getElementById(event.target.id) as HTMLSelectElement;
    let thirdUrl;
    let random : any;
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

let select = document.querySelector('#userChoice')!;
select.addEventListener('change', selectChoice);




function fetchChar(charId : any) {
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

function displayChar(data : any, charId : any) {
    const element : any = document.querySelector("tbody");
    element.remove();
    let myChar = data.results[charId];
    let tab = 
    `<tr>
      <th>Name</th>
      <th>Hair color</th>
      <th>Date of Birth</th>
      <th>Eye Color</th>
     </tr>`;
     // @ts-ignore
     const infoSpace = document.getElementById('info')!.innerHTML += tab +=
    `<tr>
    <td>${myChar.name}</td>
    <td>${myChar.hair_color}</td>
    <td>${myChar.date_of_birth}</td> 
    <td>${myChar.eye_color}</td> 
    </tr>`
};
function charButton(event : any){
    let charId;
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
let frodo : any = document.querySelector('#Frodo');
frodo.addEventListener('click', charButton);
let sam : any = document.querySelector('#Sam');
sam.addEventListener('click', charButton);
let gandalf : any=  document.querySelector('#Gandalf');
gandalf.addEventListener('click', charButton);
let aragorn : any = document.querySelector('#Aragorn');
aragorn.addEventListener('click', charButton);
let legolas : any = document.querySelector('#Legolas');
legolas.addEventListener('click', charButton);
let gimli : any = document.querySelector('#Gimli');
gimli.addEventListener('click', charButton);
let merry : any = document.querySelector('#Merry');
merry.addEventListener('click', charButton);
let pippin : any = document.querySelector('#Pippin');
pippin.addEventListener('click', charButton);
let boromir  : any = document.querySelector('#Boromir');
boromir.addEventListener('click', charButton);

function fetchCity(cityId : any) {
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
function displayCity(data : any, cityId : any) {
    const element : any= document.querySelector("tbody");
    element.remove();
    var theCity = data.results[cityId];
    var tab = `<tr>
    <th>Name</th>
    <th>Founding</th>
    <th>Location</th>
    <th>Inhabitants</th>
   </tr>`;
   let info: HTMLElement  = document.getElementById('info')!;
   // @ts-ignore
   const infoSpace = info.innerHTML += tab +=
  `<tr>
  <td>${theCity.name}</td>
  <td>${theCity.founded_date}</td>
  <td>${theCity.location}</td> 
  <td>${theCity.inhabitants}</td> 
  </tr>`
}
;
function cityButton(event : any) {
    var cityId;
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
let MT : any  = document.querySelector('#MT');
MT.addEventListener('click', cityButton);
let annu : any  = document.querySelector('#Annu');
annu.addEventListener('click', cityButton);
let fornost  : any  = document.querySelector('#Fornost');
fornost.addEventListener('click', cityButton);
let MD : any  = document.querySelector('#MD');
MD.addEventListener('click', cityButton);
let valmar : any  = document.querySelector('#Valmar');
valmar.addEventListener('click', cityButton);
let EH : any  = document.querySelector('#EH');
EH.addEventListener('click', cityButton);
let erebor : any  = document.querySelector('#Erebor');
erebor.addEventListener('click', cityButton);
