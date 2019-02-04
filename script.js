console.log('hi');

//*********FLOW*********
//1.PRESENT TEXT
//2.PRESENT CHOICES
//3.REMOVE CHOICES
//4.REPEAT


//FUNCTION CITY BAYBAY!!!!
//removeDivs Declaration
function removeDivs(){
  console.log('entered removeDivs');
  const divParent = document.querySelector('section');
  console.log(divParent);
  /*
  while(divParent.firstChild){
    divParent.removeChild(divParent.firstChild);
  }
  */
};
//changeBackground Declaration
function changeBackground(){
  console.log('changeBackground called');
 const bodyEl = document.querySelector('body');
 bodyEl.style.background = 'red';
};




const choiceOne = document.getElementById('choiceOne');
console.log(choiceOne);
const choiceTwo = document.getElementById('choiceTwo');
console.log(choiceTwo);

let newBackground = 'red';

//assign event listenrs:
choiceOne.addEventListener('click', makeChoice);

choiceTwo.addEventListener('click', makeChoice);



function makeChoice(){
//assign background
changeBackground();
console.log('passed changeBackground');
//remove divs()
removeDivs();
console.log('passed removeDivs');


  //go through main removing divs
  /*
  while(divParent.firstChild){
    divParent.removeChild(divParent.firstChild);
  }
  */
};
//remove (animated)
//find text
//display text (animated)
//change gamestate (make new divs)

  //give event listeners
//display divs (animated)
//await response
