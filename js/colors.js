// console.log("Hello from Script!");
const myButton = document.querySelector('button');
const myBox = document.querySelector('.box');
const colors = ['red', 'green', 'blue', 'yellow'];
// console.log(myButton);

myButton.addEventListener('click', ChangeColor);

function ChangeColor(){
    let rnd = math.floor(math.random() * colors.length);
    console.log(rnd);
    myBox.style.backgroundColor = colors[rnd];
}