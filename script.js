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
let counter = 0;


//*************FUNCTION CITY BABY!!!!***************

function makeGiantDivs(){
  console.log('entered giant divs');
  //comfort giant choice
  const choiceOne = document.createElement('div');
  choiceOne.textContent = 'Comfort';
  document.querySelector('section').appendChild(choiceOne);
  choiceOne.id = "choiceOne";
  //steal giant choice
  const choiceTwo = document.createElement('div');
  choiceTwo.textContent = 'Steal';
  document.querySelector('section').appendChild(choiceTwo);
  choiceTwo.id = "choiceTwo";
  //escape giant choice
  const choiceThree = document.createElement('div');
  choiceThree.textContent = 'Escape';
  document.querySelector('section').appendChild(choiceThree);
  choiceThree.id = "choiceThree";
};

function makeFuzzyDivs(){
  console.log('entered fuzzy divs');
  //pet fuzzys choice
  const choiceOne = document.createElement('div');
  choiceOne.textContent = 'Love';
  document.querySelector('section').appendChild(choiceOne);
  choiceOne.id = "choiceOne";
  //challenge fuzzys choice
  const choiceTwo = document.createElement('div');
  choiceTwo.textContent = 'Challenge';
  document.querySelector('section').appendChild(choiceTwo);
  choiceTwo.id = "choiceTwo";
  //sing fuzzys choice
  const choiceThree = document.createElement('div');
  choiceThree.textContent = 'Sing';
  document.querySelector('section').appendChild(choiceThree);
  choiceThree.id = "choiceThree";

};

function makeSunDivs(){
  console.log('entered sun divs');
  //crash sun choice
  const choiceOne = document.createElement('div');
  choiceOne.textContent = 'Crash';
  document.querySelector('section').appendChild(choiceOne);
  choiceOne.id = "choiceOne";
  //live sun choice
  const choiceTwo = document.createElement('div');
  choiceTwo.textContent = 'Live';
  document.querySelector('section').appendChild(choiceTwo);
  choiceTwo.id = "choiceTwo";
  //explore sun choice
  const choiceThree = document.createElement('div');
  choiceThree.textContent = 'Explore';
  document.querySelector('section').appendChild(choiceThree);
  choiceThree.id = "choiceThree";
};

//evaluates choice with target. calls by make choice
function evalChoice(ev){
  //conditional to change background
  if(newChoice === 'choiceOne'){
    //I think there should be other content here
    newBackground = 'red';
  } else if (newChoice === 'choiceTwo'){
    //I think there should be other content here
    newBackground = 'green';
  } else if (newChoice === 'choiceThree'){
    //I think there should be other content here
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

//changeBackground Declaration:
function changeBackground(){
  console.log('changeBackground called');
  const bodyEl = document.querySelector('body');
  bodyEl.style.background = newBackground;
};

//makeChoice
function makeChoice(){
  //remove divs()
  removeDivs();

  //assign background
  if(counter<1){
  loadNewWorld();
  counter++;
  }
};

function findChoices(){
  const choiceOne = document.getElementById('choiceOne');
  console.log(choiceOne);
  const choiceTwo = document.getElementById('choiceTwo');
  console.log(choiceTwo);
  const choiceThree = document.getElementById('choiceThree');
  console.log(choiceThree);
}


//this is going to be a goddamn mess of a function..


function loadNewWorld(){
  //changeBackground animated
  changeBackground();
  //find text
  //display text (animated)
  //change gamestate (make new divs)
  decideDivs();
  //
  findChoices();
  //give event listeners
  attachListeners();
  //display divs (animated)
  //await response
  //get passed user decision and gamestate
    //// IDEA:  check choice counter?
  //make divs accordingly
  //if statement if first decision:
    //make giant divs,fuzzy divs, or sun divs
  //else make giant endings, fuzzy endings, or sun endings
    //
};


//*********FUNCTION CITY LIMITS***************





//*********Program Start**************
findChoices();
attachListeners();
