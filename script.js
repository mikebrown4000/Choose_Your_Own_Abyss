console.log('connected');

//*********FLOW*********
//1.PRESENT TEXT
//2.PRESENT CHOICES
//3.REMOVE TEXT
//4.REMOVE CHOICES
//5.MOVE TO NEW AREA
//6.REPEAT

//global variables
let newChoice = '';
let newBackground = 'red';
let counter = 0;
let newText = '';
let firstChoiceMade = false;
let finalChoice = ''
let playAgain = true;

//*************FUNCTION CITY BABY!!!!***************

function makeStartDivs(){
  console.log('making start divs');
  //comfort giant choice
  const choiceOne = document.createElement('div');
  choiceOne.textContent = 'Tall';
  document.getElementById('choices').appendChild(choiceOne);
  choiceOne.id = "choiceOne";
  choiceOne.classList.add('choice');
  //steal giant choice
  const choiceTwo = document.createElement('div');
  choiceTwo.textContent = 'Fuzzy';
  document.getElementById('choices').appendChild(choiceTwo);
  choiceTwo.id = "choiceTwo";
  choiceTwo.classList.add('choice');
  //escape giant choice
  const choiceThree = document.createElement('div');
  choiceThree.textContent = 'Bright';
  document.getElementById('choices').appendChild(choiceThree);
  choiceThree.id = "choiceThree";
  choiceThree.classList.add('choice');
};

function makeGiantDivs(){
  console.log('entered giant divs');
  //comfort giant choice
  const choiceOne = document.createElement('div');
  choiceOne.textContent = 'Comfort';
  document.getElementById('choices').appendChild(choiceOne);
  choiceOne.id = "choiceOne";
  choiceOne.classList.add('choice');
  //steal giant choice
  const choiceTwo = document.createElement('div');
  choiceTwo.textContent = 'Steal';
  document.getElementById('choices').appendChild(choiceTwo);
  choiceTwo.id = "choiceTwo";
  choiceTwo.classList.add('choice');
  //escape giant choice
  const choiceThree = document.createElement('div');
  choiceThree.textContent = 'Escape';
  document.getElementById('choices').appendChild(choiceThree);
  choiceThree.id = "choiceThree";
  choiceThree.classList.add('choice');
};

function makeFuzzyDivs(){
  console.log('entered fuzzy divs');
  //pet fuzzys choice
  const choiceOne = document.createElement('div');
  choiceOne.textContent = 'Pet';
  document.getElementById('choices').appendChild(choiceOne);
  choiceOne.id = "choiceOne";
  choiceOne.classList.add('choice');
  //challenge fuzzys choice
  const choiceTwo = document.createElement('div');
  choiceTwo.textContent = 'Challenge';
  document.getElementById('choices').appendChild(choiceTwo);
  choiceTwo.id = "choiceTwo";
  choiceTwo.classList.add('choice');
  //sing fuzzys choice
  const choiceThree = document.createElement('div');
  choiceThree.textContent = 'Sing';
  document.getElementById('choices').appendChild(choiceThree);
  choiceThree.id = "choiceThree";
  choiceThree.classList.add('choice');
};

function makeSunDivs(){
  console.log('entered sun divs');
  //crash sun choice
  const choiceOne = document.createElement('div');
  choiceOne.textContent = 'Crash';
  document.getElementById('choices').appendChild(choiceOne);
  choiceOne.id = "choiceOne";
  choiceOne.classList.add('choice');
  //live sun choice
  const choiceTwo = document.createElement('div');
  choiceTwo.textContent = 'Live';
  document.getElementById('choices').appendChild(choiceTwo);
  choiceTwo.id = "choiceTwo";
  choiceTwo.classList.add('choice');
  //explore sun choice
  const choiceThree = document.createElement('div');
  choiceThree.textContent = 'Explore';
  document.getElementById('choices').appendChild(choiceThree);
  choiceThree.id = "choiceThree";
  choiceThree.classList.add('choice');
};

//removeDivs Declaration
function removeDivs(){
  console.log('entered removeDivs');
  const divParent = document.getElementById('choices');
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

/*
findEndingText(){
  //evaluates final ending selection and passes displayEndingText the ending text.
}
*/

function findChoices(){
  const choiceOne = document.getElementById('choiceOne');
  console.log(choiceOne);
  const choiceTwo = document.getElementById('choiceTwo');
  console.log(choiceTwo);
  const choiceThree = document.getElementById('choiceThree');
  console.log(choiceThree);
};

function findChoiceText(userChoice){
  //evaluates user selection and passes RETURNED VALUE (choiceText) to displayBodyText.
  let choiceText = '';
  if(userChoice === 'choiceOne'){
    //result of selecting the tall door
    choiceText = `You find yourself in an enormous chamber too large for any normal human.
    Soon enough you start to hear the wailing of an enormous creature.
    You gaze upon a giant. You've never seen one before, or perhaps you have,
    but he does not appear to notice you. He is incredibly upset,
    sobbing rather uncoothly at his gargantuan kitchen table
    You must act quickly before he takes you for vermin.
    You may either comfort the pitiful brute in his time of need,
    attempt to steal his food because you have suddenly noticed how hungry you are,
    or attempt to escape by going back the way you came..
    What will you do?`;
  }else if(userChoice === 'choiceTwo'){
    //result of selecting the fuzzy door
    choiceText = `You find yourself in a chamber of an uncountable amount of small, redicously
    fuzzy creatures of all shapes and sizes though most of them are not much
    larger than (what you would call in your world) a basketball.
    You may pet them, sing to them, or challenge the largest amongst them to assert
    your dominance as alpha of the alien-like species.
    What will you do?`;
  }else if(userChoice === 'choiceThree'){
    //result ofd selecting the bright door
    choiceText = `You are now the sun.
    You are flooded with new sensations and knowlege from your planetary life up
    until this point, but still, inexpicably, remember your momentary experiences
    as a human, however insignificant they may seem now in conjunction with your
    newfound perspective.
    You may explore the galaxy, crash into the earth, or live out your exceptionally
    long life as sustainer and arbiter of this planetary system.
    What will you do?`;
  }
  return choiceText;
};

function findEndingText(firstChoice,finalChoice){
  console.log('entered find final text');
  console.log(`first choice was ${firstChoice}`);
  let endingText = '';
  //giant door endings
  if(firstChoice === 'choiceOne' && finalChoice === 'choiceOne'){
      endingText = `You waddle, terrified, up to the distraught beast, and pet his monstrously large foot.
      He is immidiately taken aback by your kindness and tells you everything.
      He is so appreciative of your ability to listen and your palpable concern for his distress,
      he keeps you as his loyal pet. You die peacefully in your keeper's arms 4 giant-years later without regrets.`;

  }else if (firstChoice==='choiceOne' && finalChoice === 'choiceTwo') {
      endingText = `You attempt quite enthusiastically to burgle a single crumb from the fantastically full pantry.
      You have a mountain of a pastry crumb in your arms, but before you know it
      you are lifted into the air and placed rather unpleasantly into a jar.
      The giant, distracted by his personal tragedy, has forgotten the addition
      of air holes for your new glass prison, and you sufficate in minutes.`;

  }else if (firstChoice==='choiceOne' && finalChoice === 'choiceThree') {
      endingText = `You sprint backwards in the direction you entered, just barely crossing the
      threshold of the place from which you came. Alas, out of the corner of your eye, you see
      the door through which you entered being slammed at an ungodly velocity. You attempt to escape
      its path but fail miserably. It obliterates you in the same way that the windshiled of a car, traveling
      on the auto-bahn, would decimate a fly; you and your corporal body are irreperably
      devasteated by the unwavering force of its swing.
      Pity..`;

  //fuzzy door endings
  }else if(firstChoice === 'choiceTwo' && finalChoice === 'choiceOne') {
      endingText = `You are immidiately overcome by your pet owner instincts, and politely pet
      every creature that you can. All the creatures rejoice in their newfound
      domestication. You spend what seems like hours naming and appreciating them and their
      subtle nuances. You inevitably fall asleep. They naturally curl up next to you, peacefully
      covering you to keep you warm... All of them.
      You sufficate in your sleep, but it was undoubtedly a wonderful day.`;

  }else if (firstChoice === 'choiceTwo' && finalChoice === 'choiceTwo') {
      endingText = `You decide that you must assert your dominance in order to preside and live
      in both harmony and fear with these newfound creatures.
      Out of nowhere, a shadow the size of a trailer truck seems to blanket you.
      The other creatures scurry away in understandable terror of the bulldozer-esque,
      fluffy creature that is now towering over you.
      Despite your feeble attempts to apologize, you are demolished in one swift stomp,
      but your body serves as nourishment to the colony for a brief blip in time.`;

  }else if (firstChoice === 'choiceTwo' && finalChoice === 'choiceThree') {
      endingText = `You arrive, strangely if I may add, at the idea of singing to the creatures.
      As you begin your song- the creatures are instinctively overcome with a preternatural
      rage, and devour you like pirannas would a rotisserie chicken.
      Pity..`;

  //sun door endings
  }else if(firstChoice === 'choiceThree' && finalChoice === 'choiceOne') {
      endingText = `You decide to test yourself to see whether or not you are dreaming by crashing
      into the earth. With a subtle shift of your gasseous composure, you careen
      into your old home consuming the other planets between you and it as well.
      You feel, what you would have previously conceived in your human
      venacular, the sensation of a single raindrop falling on your face.
      You are not dreaming. The human race and everything it has ever accomplished
      is erased from the cosmic canvas of the universe.
      You are unphased, after all, there is much to be done.`;

  }else if (firstChoice === 'choiceThree' && finalChoice === 'choiceTwo') {
      endingText = `Despite your newfound and overwhelming knowlege of the universe and its machinations,
      You cannot shake your responsibility to the earth. You live out your years sustaining your old home,
      hoping that your planet makes a significant shift towards solar power. You're
      quite fond of solar power these 'days'. The world and your view of it slowly, over the course of millions of years,
      grows dark. Your time is nearing its end. You supernova, in such an extravagent fasion,
      the surrounding stars in your galaxy for lightyears around take brief notice.
      Satisfied, Your last thought is of humans and the other
      life forms in the universe created, sustained, and destroyed by stars like you.`;

  }else if (firstChoice === 'choiceThree' && finalChoice === 'choiceThree') {
      endingText = `You spend the rest of your years making new friends in other systems, taking
      exceptional precaution not to collide or linger in orbit for too long.
      It is an wonderful, wonderful life.`;

  }
  return endingText;
};

//display text
//this should be called after findChoiceText and pass it the choice selection.
function displayText(text){
  console.log('Entered Display Text');
  let newBody = document.createElement('p');
  newBody.textContent = text;
  document.querySelector('h2').appendChild(newBody);
};

function removeChoiceText(){
  console.log('Entered Remove Body Text');
  const textToRemove = document.querySelector('h2');
  textToRemove.removeChild(textToRemove.firstChild);
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
  removeChoiceText();
  //assign background
  if(counter<1){
    loadNewWorld();
    counter++;
  }else{
    let finalText = ''
    finalText = findEndingText(newText,finalChoice);
    displayText(finalText);
  }
  //findEndingText();
  //displayText();
  };

//evaluates choice with target. calls by make choice
function evalChoice(ev){
  //conditional to change background
  if(firstChoiceMade===false){
    if(newChoice === 'choiceOne'){
      newText = 'choiceOne';
      newBackground = 'url(./images/giants-bkg.jpg)';
    } else if (newChoice === 'choiceTwo'){
      //I think there should be other content here
      newText = 'choiceTwo';
      newBackground = 'url(./images/fuzzy-bkg.jpg)';
      //assign text?
    } else if (newChoice === 'choiceThree'){
      //I think there should be other content here
      newText = 'choiceThree';
      newBackground = 'url(./images/sun-bkg.jpg)';
      //assign text?
    }
  //if firstChoiceMade is true, we keep newChoice the same so we can find the
  //final text with reference to the users first decision.
  } else if (firstChoiceMade === true) {
    if(newChoice === 'choiceOne'){
      finalChoice = 'choiceOne';
    } else if (newChoice === 'choiceTwo'){
      finalChoice = 'choiceTwo';
    } else if (newChoice === 'choiceThree'){
      finalChoice = 'choiceThree';
    }
  };
  //call make choice
  firstChoiceMade = true;
  makeChoice();
}

//this is going to be a goddamn mess of a function..
function loadNewWorld(){
  console.log('enetered load new world');
  //changeBackground animated
  changeBackground();
  //***find and displayText*** (hopefully animated)
  let text = findChoiceText(newText);
  displayText(text);
  //change gamestate (make new divs)
  decideDivs();
  //make divs
  findChoices();
  //give event listeners
  attachListeners();
  //display divs (animated)
  //await response
  //get passed user decision and gamestate
    //// IDEA:  check choice counter
};

function resetGame(){
  let newChoice = '';
  let newBackground = 'red';
  let counter = 0;
  let newText = '';
  let firstChoiceMade = false;
  let finalChoice = ''
  let playAgain = true;
}


//*********FUNCTION CITY LIMITS***************

//*********TEXT-OPOLIS************************
  // introduction:
  /* Why hello, tiny wanderer!
  I must say you surprised me!
  I'm not sure how you arrived here.. You must be terrible at directions
  Ahh, forgive me, I forgot to introduce myself...
  I am the void.
  ... It's been quite some time since I have had a visitor,
  and I am not usually one for pleasantries ... perhaps you would like to play a game?
  Of course you do! Before you appear three doors.
  One is very tall, one is very fluffy, and one is very bright.
  Which one do you enter?

  //Tall door
  You find yourself in an enormous chamber too large for any normal human.
  Soon enough you start to hear the wailing of an enormous creature.
  You gaze upon a giant. You've never seen one before, or perhaps you have,
  but he does not appear to notice you. He is incredibly upset,
  sobbing rather uncoothly at his gargantuan kitchen table
  You must act quickly before he takes you for vermin.
  You may either comfort the pitiful brute in his time of need,
  attempt to steal his food because you have suddenly noticed how hungry you are,
  or attempt to escape the way you came..
  What will you do?
    //Comfort
    You waddle, terrified, up to the distraught beast, and pet his monstrously large foot.
    He is immidiately taken aback by your kindness and tells you everything.
    He is so appreciative of your ability to listen and your palpable concern for his distress,
    he keeps you as his loyal pet. You die peacefully in your keeper's arms 4 giant-years later without regrets.
    //Steal
    You attempt quite enthusiastically to burgle a single crumb from the fantastically full pantry.
    You have a mountain of a pastry crumb in your arms, but before you know it
    you are lifted into the air and placed rather unpleasantly into a jar.
    The giant, distracted by his personal tragedy, has forgotten the addition
    of air holes for your new glass prison, and you sufficate in minutes.
    //Escape
    You sprint backwards in the direction you entered, just barely entering the
    threshold of the place from which you came. Alas, the door is slammed with such force that you
    and your corporal body are irreperably devasteated by its unwavering swing.
    Pity..

  //Fuzzy Door
  You find yourself in a chamber of an uncountable amount of small, redicously
  fuzzy creatures of all shapes and sizes though most of them are not much
  larger than (what you would call in your world) a basketball.
  You may pet them, sing to them, or challenge the largest amongst them to assert
  your dominance as alpha of the alien-like species.
  What will you do?
    //Pet
    You are immidiately overcome by your pet owner instincts, and politely pet
    every creature that you can. All the creatures rejoice in their newfound
    domestication. You spend what seems like hours naming and appreciating them and their
    subtle nuances. You inevitably fall asleep. They naturally curl up next to you, peacefully
    covering you to keep you warm... All of them.
    You sufficate in your sleep, but it was undoubtedly a wonderful day.
    //Sing
    You arrive, strangely if I may add, at the idea of singing to the creatures.
    As you begin your song- the creatures are instinctively overcome with a preternatural
    rage, and devour you like pirannas would a rotisserie chicken.
    Pity..
    //Challenge
    You decide that you must assert your dominance in order to preside and live
    in harmony and fear with these creatures.
    Out of nowhere, a shadow the size of a trailer truck seems to blanket you.
    The other creatures scurry away in understandable fear of the bulldozer-esque,
    fluffy creature.
    You are demolished in one swift stomp, but your body serves as nourishment
    to the colony for a brief blip in time.

  //Bright Door
  You are now the sun.
  You are flooded with new sensations and knowlege from your planetary life up
  until this point, but still, inexpicably, remember your momentary experiences
  as a human, however insignificant they may seem now in conjunction with your
  newfound perspective.
  You may explore the galaxy, crash into the earth, or live out your exceptionally
  long life as sustainer and arbiter of this planetary system.
  What will you do?
    //Explore
    You spend the rest of your years making new friends in other systems, taking
    exceptional precautions not to collide or linger in orbit for too long.
    It is an wonderful, wonderful life.
    //Crash
    You decide to test yourself to see whether or not you are dreaming by crashing
    into the earth. With a subtle shift of your gasseous composure, you careen
    into your old home consuming the other planets between you and it as well.
    You feel, what you would have previously conceived in your human
    venacular, the sensation of a single raindrop falling on your face.
    You are not dreaming. The human race and everything it has ever accomplished
    is erased from the cosmic canvas of the universe.
    You are unphased, there is much to be done after all.
    //Live
    Despite your newfound and overwhelming knowlege of the universe and its machinations,
    You cannot shake your responsibility to the earth. You live out your years sustaining your home,
    hoping that your planet makes a significant shift towards solar power. You're
    quite fond of solar power. The world and your view of it slowly, over the course of millions of years,
    grow dark. You supernova, in such an extravagent fasion, the surrounding planets for
    lightyears take notice. Satisfied, Your last thought is of humans and the other
    life forms in the universe sustained by stars like you.

  */


//*********Program Start**************
//introduction
//
const introText1 = `Why hello, tiny wanderer! I must say! You surprised me!`
const introText2 = `I'm not sure how you arrived here.. You must be terrible at directions!`
const introText3 = `Ahh, forgive me, I forgot to introduce myself...`
const introText4 = `I AM THE VOID...`
const introText5 = `Let's play a game...`
const introText6 = `Before you appear three doors.. One is very tall, one is very fluffy, and one is very bright. Which one do you enter?;`

//fucntion that takes the intro array, takes the first element,
//adds it to the intro css class animates it until the arrays is empty.
//enter first choice state.

/*
let i = 0;
let newLine = document.getElementById('titleText');
newLine.classList.add('introduction');

const introTextSlide = function(){
  textInterval  = setInterval(function(){
     if(i === testArray.length){
        clearInterval(textInterval);
     }
     newLine.textContent = testArray[i];
     console.log(i)
     i++;
  }, 1000);
}
*/
function introTextSlideshow(){
//find h1 give it animation and text
const introTextLoc = document.getElementById('silkscreenInner');
const introText1dom = document.createElement('h2');
introText1dom.textContent = introText1;
introText1dom.classList.add('introText1class');
introTextLoc.appendChild(introText1dom);

const introText2dom = document.createElement('h2');
introText2dom.textContent = introText2;
introText2dom.classList.add('introText2class');
introTextLoc.appendChild(introText2dom);

const introText3dom = document.createElement('h2');
introText3dom.textContent = introText3;
introText3dom.classList.add('introText3class');
introTextLoc.appendChild(introText3dom);

//remove intro texts 1-3
setTimeout(function () {
  while(introTextLoc.firstChild){
  console.log('removingchild');
  introTextLoc.removeChild(introTextLoc.firstChild);
  }
}, 8000);

//reveal animation 4 remove animation 4
setTimeout(function(){
const introText4dom = document.createElement('h1');
introText4dom.textContent = introText4;
introText4dom.classList.add('introText4class');
introTextLoc.appendChild(introText4dom);
console.log('appended i am void');
}, 9000);


setTimeout(function(){
  const introText5dom = document.createElement('h2');
  introText5dom.textContent = introText5;
  introText5dom.classList.add('introText5class');
  introTextLoc.appendChild(introText5dom);
  console.log('appended lets play a game');
}, 17000);

//reduce silkscreen opacity, delete items & to reveal the game.
setTimeout(function(){
  while(introTextLoc.firstChild){
  console.log('removingchild');
  introTextLoc.removeChild(introTextLoc.firstChild);
  }
  const silkscreenLoc = document.getElementById('silkscreen');
  silkscreenLoc.parentNode.removeChild(silkscreenLoc);
}, 28000);


}


introTextSlideshow();
findChoices();
attachListeners();
