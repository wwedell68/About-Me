'use strict';

function questionOne () {
  var muscle = prompt('Have I ever torn a muscle?').toLowerCase();
  console.log(muscle);

  if (muscle === 'yes' || muscle === 'y') {
    alert('You are correct');
  } else {
    alert('Sorry but that isn\'t correct');
  }
}

function questionTwo () {

  var state = prompt('Was I born in the state of Washington?').toLowerCase();
  console.log(state);

  if (state === 'no' || state === 'n') {
    alert('Correct');
  } else {
    alert('You are inccorect I was actually born in Iowa');
  }
}

function questionThree () {

  var cars = prompt('Do I drive a stickshift?').toLowerCase();
  console.log(cars);

  if (cars === 'yes' || cars === 'y') {
    alert('StickShift is life!');
  } else {
    alert('HAHA nope love driving stick to much');
  }
}

function questionFour () {

  var siblings = prompt('Do I have any siblings?').toLowerCase();
  console.log(siblings);

  if (siblings === 'no' || siblings === 'n') {
    alert('Congrats you were right');
  } else {
    alert('I kind of wish that I did have some');
  }
}

function questionFive () {

  var travel = prompt('Have I ever left the country?').toLowerCase();
  console.log(travel);

  if (travel === 'yes' || travel === 'y') {
    alert('Yes I have. I went to Victoria Canada');
  } else {
    alert('Sorry! But I actually have left the country');
  }
}

//  for(var i=0; i<4; i ++) { - try using something like this for the counter//

function questionSix () {

  var favNumber = prompt('What is my favorite number?');
  console.log(favNumber);

  // if / else statement here

  for(var i=0; i<5; i++) {
    var total = prompt('What is my favorite number? I\'ll give you 5 chances!');
    console.log ('What is my favoite number? I\'ll give you 5 chances!',total);

    if (total ==='17') {
      alert('Correct, you got the right answer');
    } else if(total >'17') {
      alert('Too high, try again!');
    }else if (total <'17') {
      alert('Too low, try again!');
    }
  }
  alert('The Correct answer is 17');
}

function questionSeven () {

  var movies = prompt('What is my favorite movie? The Sandlot, Terminator, Predator, We Were Soldiers, Remember the Titans?').toUpperCase();
  console.log ('What is my favorite movie?',movies);

  if(movies === 'We Were Soldiers'|| movies=== 'We Were Soldiers'|| movies==='We Were Soldiers') {
    alert('Correct');
  } else if(movies === 'The Sandlot' || movies=== 'The Sandlot'|| movies==='The Sandlot') {
    alert('Incorrect');
  } else if(movies === 'Terminator'|| movies==='Terminator'||movies==='Terminator') {
    alert('Incorrect');
  } else if(movies === 'Predator'|| movies==='Predator'||movies==='Predator') {
    alert('Incorrect');
  } else if(movies === 'Remember the Titans'|| movies==='Remember the Titans'|| movies==='Remember the Titans') {
    alert('Incorrect');
  }
  alert('The Correct answer is We Were Soldiers');
}


questionOne ();
questionTwo ();
questionThree ();
questionFour ();
questionFive ();
questionSix ();
questionSeven ();
