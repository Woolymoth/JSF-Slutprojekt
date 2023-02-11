var charUrl = "https://lotrapi.co/api/v1/characters";
var cityUrl = "https://lotrapi.co/api/v1/cities";
function fetchSelect(thirdUrl, random) {
    fetch(thirdUrl + random)
        .then(function (response) {
        if (response.ok) {
            return response.json();
        }
        else {
            throw new Error("NETWORK RESPONSE ERROR");
        }
    })
        .then(function (data) {
        displayUserChoice(data);
    });
}
function displayUserChoice(data) {
    var element = document.querySelector("tbody");
    element.remove();
    var userChoise = data;
    var tab = "<tr>\n    <th>Title</th>\n   </tr>";
    const infoSpace = document.getElementById('info').innerHTML += tab +=
    "<tr>\n  <td>".concat(data.title, "</td>\n  </tr>");
    console.log(userChoise);
}
;
function selectChoice(event){
    var yourSelect = document.getElementById(event.target.id);
    let thirdUrl;
    let random;
    switch(yourSelect.options[yourSelect.selectedIndex].id){
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
let select = document.querySelector('#userChoice');
select.addEventListener('change', selectChoice);

function fetchChar(charId) {
    fetch(charUrl)
        .then(function (response) {
        if (response.ok) {
            return response.json();
        }
        else {
            throw new Error("NETWORK RESPONSE ERROR");
        }
    })
        .then(function (data) {
        displayChar(data, charId);
    });
}
;
function displayChar(data, charId) {
    var element = document.querySelector("tbody");
    element.remove();
    var myChar = data.results[charId];
    var tab = "<tr>\n      <th>Name</th>\n      <th>Hair color</th>\n      <th>Date of Birth</th>\n      <th>Eye Color</th>\n     </tr>";
    const infoSpace = document.getElementById('info').innerHTML += tab +=
    "<tr>\n    <td>".concat(myChar.name, "</td>\n    <td>").concat(myChar.hair_color, "</td>\n    <td>").concat(myChar.date_of_birth, "</td> \n    <td>").concat(myChar.eye_color, "</td> \n    </tr>");
}
;
function charButton(event) {
    var charId;
    switch (event.target.name) {
        case "Frodo":
            charId = 0;
            break;
        case "Sam":
            charId = 1;
            break;
        case "Gandalf":
            charId = 2;
            break;
        case "Aragorn":
            charId = 4;
            break;
        case "Legolas":
            charId = 7;
            break;
        case "Gimli":
            charId = 8;
            break;
        case "Merry":
            charId = 5;
            break;
        case "Pippin":
            charId = 6;
            break;
        case "Boromir":
            charId = 9;
            break;
    }
    fetchChar(charId);
    event.document;
    event.preventDefault();
}
document.querySelector('#Frodo').addEventListener('click', charButton);
document.querySelector('#Sam').addEventListener('click', charButton);
document.querySelector('#Gandalf').addEventListener('click', charButton);
document.querySelector('#Aragorn').addEventListener('click', charButton);
document.querySelector('#Legolas').addEventListener('click', charButton);
document.querySelector('#Gimli').addEventListener('click', charButton);
document.querySelector('#Merry').addEventListener('click', charButton);
document.querySelector('#Pippin').addEventListener('click', charButton);
document.querySelector('#Boromir').addEventListener('click', charButton);
function fetchCity(cityId) {
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
function displayCity(data, cityId) {
    var element = document.querySelector("tbody");
    element.remove();
    var theCity = data.results[cityId];
    var tab = "<tr>\n    <th>Name</th>\n    <th>Founding</th>\n    <th>Location</th>\n    <th>Inhabitants</th>\n   </tr>";
    const infoSpace = document.getElementById('info').innerHTML += tab +=
    "<tr>\n  <td>".concat(theCity.name, "</td>\n  <td>").concat(theCity.founded_date, "</td>\n  <td>").concat(theCity.location, "</td> \n  <td>").concat(theCity.inhabitants, "</td> \n  </tr>");
}
;
function cityButton(event) {
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
document.querySelector('#MT').addEventListener('click', cityButton);
document.querySelector('#Annu').addEventListener('click', cityButton);
document.querySelector('#Fornost').addEventListener('click', cityButton);
document.querySelector('#MD').addEventListener('click', cityButton);
document.querySelector('#Valmar').addEventListener('click', cityButton);
document.querySelector('#EH').addEventListener('click', cityButton);
document.querySelector('#Erebor').addEventListener('click', cityButton);
