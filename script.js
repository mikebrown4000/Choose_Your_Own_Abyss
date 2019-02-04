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
choiceOne.addEventListener('click', makeChoice);
choiceOne.addEventListener('hover', changeBackground);
choiceTwo.addEventListener('click', makeChoice);
choiceTwo.addEventListener('hover', changeBackground);


function makeChoice(){
//assign background
//remove divs()
//remove (animated)
//find text
//display text (animated)
//change gamestate (make new divs)

  //give event listeners
//display divs (animated)
//await response

};



function changeBackground(){
 const bodyEl = document.querySelector('body');
 bodyEl.style.background = 'red';
};

//remove divs called in choice made and background change
function removeDivs(){
  const divParent = document.querySelector('main');
  //go through main removing divs
  while(divParent.firstChild){
    divParent.removeChild(divParent.firstChild);
  }
};
