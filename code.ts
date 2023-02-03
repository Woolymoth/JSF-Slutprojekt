const charUrl = "https://lotrapi.co/api/v1/characters";

const cityUrl="https://lotrapi.co/api/v1/cities";
let x : Number;

function char() {
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
function displayChar(data : any) {
    char()
    let x = 0;
    let myChar = data.results[x];
    let tab = 
    `<tr>
      <th>Name</th>
      <th>Eye Color</th>
      <th>Date of Birth</th>
      <th>Eye Color</th>
     </tr>`;
     //@ts-ignore
     const charSpace : string = document.getElementById('info').innerHTML += tab +=
    `<tr>
    <td>${myChar.name}</td>
    <td>${myChar.eye_color}</td>
    <td>${myChar.date_of_birth}</td> 
    <td>${myChar.eye_color}</td> 
    </tr>`
    console.log(myChar);
};
function sam(){
    x=1
    displayChar();
}
let samButton: HTMLElement | any = document.getElementById('Sam');
samButton.addEventListener("click", sam (event) {
 event.preventDefault(),
 sam();
});





