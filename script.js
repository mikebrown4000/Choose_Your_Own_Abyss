console.log('hi');

//get buttons
//assign event listeners
//remove button


const choiceOne = document.getElementById('choiceOne');
console.log(choiceOne);
const choiceTwo = document.getElementById('choiceTwo');
console.log(choiceTwo);

let newBackground = 'red';

//assign event listenrs:
choiceOne.addEventListener('click', changeBackground);
choiceTwo.addEventListener('click', changeBackground);


function changeBackground(newBackground){
 const bodyEl = document.getElementByTagName('body');
 body.style.background = newBackground;
};
