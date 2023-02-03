const charUrl = "https://lotrapi.co/api/v1/characters";

const cityUrl="https://lotrapi.co/api/v1/cities";


function fetchChar() {
    fetch(charUrl)
    .then((response) =>  {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("NETWORK RESPONSE ERROR");
        }
      })
    //.then((data) => console.log(data.results[0]))
    .then((data) => {
        displayChar(data)
    })
};

function displayChar(data) {
    let myChar = data.results[1];
    let tab = 
    `<tr>
      <th>Name</th>
      <th>Eye Color</th>
      <th>Date of Birth</th>
      <th>Eye Color</th>
     </tr>`;
     //@ts-ignore
     const charSpace = document.getElementById('info').innerHTML += tab +=
    `<tr>
    <td>${myChar.name}</td>
    <td>${myChar.eye_color}</td>
    <td>${myChar.date_of_birth}</td> 
    <td>${myChar.eye_color}</td> 
    </tr>`
};
function samFo(event){
    fetchChar();
    event.document
    event.preventDefault();
}
const samButton = document.querySelector('#Sam');
console.log(samButton);
samButton.addEventListener('click', samFo);