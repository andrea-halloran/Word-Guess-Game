window.onload = function () {

  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
  
  var categories;         
  var chosenCategory;     
  var word ;           
  var guess ;             
  var geusses = [ ];      
  var lives ;             
  var counter ;           
  var space;              

  
  var showLives = document.getElementById("mylives");
  var showCatagory = document.getElementById("scatagory");

  
  var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('para');

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('para');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }
    
  
  
  var selectCat = function () {
    if (chosenCategory === categories[0]) {
      catagoryName.innerHTML = "Types of Donuts";
    } else if (chosenCategory === categories[1]) {
      
    }
  }

 
   result = function () {
    wordHolder = document.getElementById('holder');
    correct = document.createElement('para');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('para');
      guess.setAttribute('class', 'guess');
      if (word[i] === "- ") {
        guess.innerHTML = "- ";
        space = 1;
      } else {
        guess.innerHTML = "_ ";
      }

      geusses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }
  
  
   comments = function () {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
    }
    for (var i = 0; i < geusses.length; i++) {
      if (counter + space === geusses.length) {
        showLives.innerHTML = "You Win!";
      }
    }
  }

  
   check = function () {
    list.onclick = function () {
      var geuss = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === geuss) {
          geusses[i].innerHTML = geuss;
          counter += 1;
        } 
      }
      var j = (word.indexOf(geuss));
      if (j === -1) {
        lives -= 1;
        comments();
        animate();
      } else {
        comments();
      }
    }
  }
  
    
  
  play = function () {
    categories = [
        ["blueberry", "sprinkle", "glazed", "jelly", "maple", "strawberry", "chocolate"]
    ];

    chosenCategory = categories[Math.floor(Math.random() * categories.length)];
    word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    word = word.replace(/\s/g, "-");
    console.log(word);
    buttons();

    guesses = [ ];
    lives = 10;
    counter = 0;
    space = 0;
    result();
    comments();
    selectCat();
    canvas();
  }

  play();
  
  function refreshPage(){
    window.location.reload();
} 
  document.getElementById("reset").onclick = function() {
    location.reload(); 
    play();
  }
}


