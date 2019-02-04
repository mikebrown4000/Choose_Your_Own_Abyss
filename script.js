console.log('connected');

//*********FLOW*********
//1.PRESENT TEXT
//2.PRESENT CHOICES
//3.REMOVE TEXT
//4.REMOVE CHOICES
//5.MOVE TO NEW AREA
//6.REPEAT

//global variables
let userLocation = [5,14];
let newChoice = '';
let newBackground = 'red';


//*************FUNCTION CITY BABY!!!!***************

//evaluates choice with target. calls by make choice
function evalChoice(ev){
  //conditional to change background
  if(newChoice === 'choiceOne'){
    newBackground = 'red';
  } else if (newChoice === 'choiceTwo'){
    newBackground = 'green';
  } else if (newChoice === 'choiceThree'){
    newBackground = 'orange';
  }
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
function decideDivs(){
  if(newChoice === 'choiceOne'){
    makeGiantDivs();
  }else if(newChoice === 'choiceTwo'){
    makeFuzzyDivs();
  }else if(newChoice === 'choiceThree'){
    makeSunDivs();
  }
};

function makeGiantDivs(){
  console.log('entered giant divs');
  //comfort giant choice
  const choiceOne = document.createElement('div');
  choiceOne.textContent = 'Comfort';
  document.querySelector('section').appendChild(choiceOne);

  //steal giant choice
  const choiceTwo = document.createElement('div');
  choiceTwo.textContent = 'Steal';
  document.querySelector('section').appendChild(choiceTwo);
  //escape giant choice
  const choiceThree = document.createElement('div');
  choiceThree.textContent = 'Escape';
  document.querySelector('section').appendChild(choiceThree);
};

function makeFuzzyDivs(){
  console.log('entered fuzzy divs');
  //pet fuzzys choice
  const choiceOne = document.createElement('div');
  choiceOne.textContent = 'Love';
  document.querySelector('section').appendChild(choiceOne);
  //challenge fuzzys choice
  const choiceTwo = document.createElement('div');
  choiceTwo.textContent = 'Challenge';
  document.querySelector('section').appendChild(choiceTwo);
};

function makeSunDivs(){
  console.log('entered sun divs');
  //crash sun choice
  const choiceOne = document.createElement('div');
  choiceOne.textContent = 'Crash';
  document.querySelector('section').appendChild(choiceOne);
  //live sun choice
  const choiceTwo = document.createElement('div');
  choiceTwo.textContent = 'Live';
  document.querySelector('section').appendChild(choiceTwo);
  //explore sun choice
  const choiceThree = document.createElement('div');
  choiceThree.textContent = 'Explore';
  document.querySelector('section').appendChild(choiceThree);
};


//changeBackground Declaration:
function changeBackground(){
  console.log('changeBackground called');
  const bodyEl = document.querySelector('body');
  bodyEl.style.background = newBackground;
};


function makeChoice(){
  //assign background
  changeBackground();
  //remove divs()
  removeDivs();
  //remove (animated)
  //find text
  //display text (animated)
  //change gamestate (make new divs)
  decideDivs();
  //give event listeners
  attachListeners();
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



const choiceOne = document.getElementById('choiceOne');
console.log(choiceOne);
const choiceTwo = document.getElementById('choiceTwo');
console.log(choiceTwo);
const choiceThree = document.getElementById('choiceThree');
console.log(choiceThree);






//*********Program Start**************


function attachListeners(){
//assign event listeners / log new choice / call evalChoice:
  choiceOne.addEventListener('click', function(){
    newChoice = this.getAttribute("id")
    evalChoice();
  });
  choiceTwo.addEventListener('click', function(){
    newChoice = this.getAttribute("id")
    evalChoice();
  });
  choiceThree.addEventListener('click', function(){
    newChoice = this.getAttribute("id")
    evalChoice();
  });
};


attachListeners();
