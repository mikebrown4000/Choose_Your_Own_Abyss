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
  while(divParent.firstChild){
    divParent.removeChild(divParent.firstChild);
  }
  console.log('passed while loop');
};
//changeBackground Declaration
function changeBackground(){
  console.log('changeBackground called');
 const bodyEl = document.querySelector('body');
 bodyEl.style.background = 'red';
};

function makeDivs(){

  //get passed user decision and gamestate
    //// IDEA:  check choice counter?

  //make divs accordingly
  //if statement if first decision:
    //make giant divs,fuzzy divs, or sun divs
  //else make giant endings, fuzzy endings, or sun endings
    //
}




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
//remove (animated)
//find text
//display text (animated)
//change gamestate (make new divs)

  //give event listeners
//display divs (animated)
//await response
};
