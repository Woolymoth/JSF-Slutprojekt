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
    // @ts-ignore
    var infoSpace = document.getElementById('info').innerHTML += tab +=
        "<tr>\n  <td>".concat(data.title, "</td>\n  </tr>");
    console.log(userChoise);
}
;
function selectChoice(event) {
    var yourSelect = document.getElementById(event.target.id);
    var thirdUrl;
    var random;
    switch (yourSelect.options[yourSelect.selectedIndex].id) {
        case "books":
            thirdUrl = "https://lotrapi.co/api/v1/books/";
            random = Math.floor(Math.random() * 4) + 1;
            break;
        case "films":
            thirdUrl = "https://lotrapi.co/api/v1/films/";
            random = Math.floor(Math.random() * 6) + 1;
            break;
    }
    fetchSelect(thirdUrl, random);
    event.document;
    event.preventDefault();
}
;
var select = document.querySelector('#userChoice');
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
    // @ts-ignore
    var infoSpace = document.getElementById('info').innerHTML += tab +=
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
var frodo = document.querySelector('#Frodo');
frodo.addEventListener('click', charButton);
var sam = document.querySelector('#Sam');
sam.addEventListener('click', charButton);
var gandalf;
gandalf.document.querySelector('#Gandalf').addEventListener('click', charButton);
var aragorn = document.querySelector('#Aragorn');
aragorn.addEventListener('click', charButton);
var legolas = document.querySelector('#Legolas');
legolas.addEventListener('click', charButton);
var gimli = document.querySelector('#Gimli');
gimli.addEventListener('click', charButton);
var merry = document.querySelector('#Merry');
merry.addEventListener('click', charButton);
var pippin = document.querySelector('#Pippin');
pippin.addEventListener('click', charButton);
var boromir = document.querySelector('#Boromir');
boromir.addEventListener('click', charButton);
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
    var info = document.getElementById('info');
    // @ts-ignore
    var infoSpace = info.innerHTML += tab +=
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
var MT = document.querySelector('#MT');
MT.addEventListener('click', cityButton);
var annu = document.querySelector('#Annu');
annu.addEventListener('click', cityButton);
var fornost = document.querySelector('#Fornost');
fornost.addEventListener('click', cityButton);
var MD = document.querySelector('#MD');
MD.addEventListener('click', cityButton);
var valmar = document.querySelector('#Valmar');
valmar.addEventListener('click', cityButton);
var EH = document.querySelector('#EH');
EH.addEventListener('click', cityButton);
var erebor = document.querySelector('#Erebor');
erebor.addEventListener('click', cityButton);
