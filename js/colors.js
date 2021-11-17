// console.log("Hello from Script!");
const myButton = document.querySelector('button');
const myBox = document.querySelector('.box');
const colors = ['red', 'green', 'blue', 'yellow'];
// console.log(myButton);
let randomValues = [];

let name = `HarryPotter`;

console.log(`Hello ${name}`)

myButton.addEventListener('click', ChangeColor);

function ChangeColor(){
    if(randomValues.length === 0) {
        for(let i = 0; i < colors; i++){
            randomValues.push(i);
            console.log(`${i} added`);
        }
    }
    let RandomIndex = math.floor(math.random() * randomValues.length);
    let indexFromMyarray = 
    myBox.style.backgroundColor = colors[indexFromMyarray];
}