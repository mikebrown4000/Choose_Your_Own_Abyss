console.log('connected');

//*********FLOW*********
//1.PRESENT TEXT
//2.PRESENT CHOICES
//3.REMOVE TEXT
//4.REMOVE CHOICES
//5.MOVE TO NEW AREA
//6.REPEAT

//global variable that evaluates player position:
let userLocation = [5,14];





//*************FUNCTION CITY BABY!!!!***************

//evaluates choice with target. calls by make choice
function evalChoice(ev){
  //conditional to change background
  /*
  if(ev.target.classList === "choiceTwo"){
    newBackground = 'red';
    userLocation[0] = 1;
  } else if (ev.target.classList === 'choiceTwo'){
    newBackground = 'green';
    userLocation[0] = 2;
  } else if (ev.target.classList === 'choiceThree'){
    newBackground = 'orange';
    userLocation[0] = 3;
  }
  */
  //call make choice
  makeChoice();
}


//removeDivs Declaration
function removeDivs(){
  console.log('entered removeDivs');
  const divParent = document.querySelector('section');
  console.log(divParent);
  while(divParent.firstChild){
    //add to fade away CSS class?
    divParent.removeChild(divParent.firstChild);
  }
  console.log('passed while loop');
};

//make new divs function (very under construction)(should respond to first choice)
function makeDivs(){
  console.log('entered make divs');
  for (var i = 0; i < 3; i++) {
  const newChoice = document.createElement('div');
  newChoice.textContent = 'New Choice';
  document.querySelector('section').appendChild(newChoice);
  }
};


//changeBackground Declaration
function changeBackground(){
  console.log('changeBackground called');
  const bodyEl = document.querySelector('body');
  bodyEl.style.background = newBackground;
};


function makeChoice(){
  console.log('makeChoice called');
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
  makeDivs();
  console.log('passed makeDivs');
  //give event listeners
  //display divs (animated)
  //await response
};



//this is going to be a goddamn mess of a function..


function loadNewWorld(){

  //get passed user decision and gamestate
    //// IDEA:  check choice counter?

  //make divs accordingly
  //if statement if first decision:
    //make giant divs,fuzzy divs, or sun divs
  //else make giant endings, fuzzy endings, or sun endings
    //
};


//*********FUNCTION CITY LIMITS***************


//finds divs or chocies
const choiceOne = document.getElementById('choiceOne');
console.log(choiceOne);
const choiceTwo = document.getElementById('choiceTwo');
console.log(choiceTwo);
const choiceThree = document.getElementById('choiceThree');
console.log(choiceThree);

let newBackground = 'red';

//assign event listenrs:
choiceOne.addEventListener('click', evalChoice);
choiceTwo.addEventListener('click', evalChoice);
choiceThree.addEventListener('click', evalChoice);
