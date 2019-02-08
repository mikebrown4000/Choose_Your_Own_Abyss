# Choose_Your_Own_Abyss

Button-based choose your own adventure game with interactive animations, multiple endings, and a dark humorous undertone the whole family can enjoy.

This game incorporates recursive code to manipulate, delete and reproduce DOM elements.

Choose_your_own_abyss.surge.sh

Here is a snippet of code which is vital to its function:

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
    makeFinalButton();
  }
};

As you can see- the code uses many callback functions.
It is a beautiful disaster.
The code runs deep. Feel free to take a look.

Installation instructions:
https://help.github.com/articles/fork-a-repo/
