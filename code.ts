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
   //const infoSpace = document.getElementById('info').innerHTML += tab +=
  `<tr>
  <td>${data.title}</td>
  </tr>`
     console.log(userChoise)
};


//function selectChoice(event :any){
    //var yourSelect = document.getElementById(event.target.id);
    //let thirdUrl;
    //let random : any;
    //switch(yourSelect.options[yourSelect.selectedIndex].id){
        //case "books":
           // thirdUrl= "https://lotrapi.co/api/v1/books/";
            //random= Math.floor(Math.random() * 4) +1; 
            //break; 
        //case "films":
           //thirdUrl= "https://lotrapi.co/api/v1/films/";
           //random= Math.floor(Math.random() * 6) +1;
           // break;
    //}
    //fetchSelect(thirdUrl, random);
    //event.document
   // event.preventDefault();
//};

//let select = document.querySelector('#userChoice');
//select.addEventListener('change', selectChoice);



/////////////////////////////////////////////////////////////////////////////////7



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
     //const infoSpace = document.getElementById('info').innerHTML += tab +=
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
//document.querySelector('#Frodo').addEventListener('click', charButton);
//document.querySelector('#Sam').addEventListener('click', charButton);
//document.querySelector('#Gandalf').addEventListener('click', charButton);
//document.querySelector('#Aragorn').addEventListener('click', charButton);
//document.querySelector('#Legolas').addEventListener('click', charButton);
//document.querySelector('#Gimli').addEventListener('click', charButton);
//document.querySelector('#Merry').addEventListener('click', charButton);
//document.querySelector('#Pippin').addEventListener('click', charButton);
//document.querySelector('#Boromir').addEventListener('click', charButton);
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
   //const infoSpace = document.getElementById('info').innerHTML += tab +=
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
//document.querySelector('#MT').addEventListener('click', cityButton);
//document.querySelector('#Annu').addEventListener('click', cityButton);
//document.querySelector('#Fornost').addEventListener('click', cityButton);
//document.querySelector('#MD').addEventListener('click', cityButton);
//document.querySelector('#Valmar').addEventListener('click', cityButton);
//document.querySelector('#EH').addEventListener('click', cityButton);
//document.querySelector('#Erebor').addEventListener('click', cityButton);
