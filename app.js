'use strict';

var muscle = prompt('Have I ever torn a muscle?').toLowerCase();
console.log(muscle);

if (muscle === 'yes' || muscle === 'y') {
  alert('You are correct');
} else {
  alert('Sorry but that isn\'t correct');
}


var state = prompt('Was I born in the state of Washington?').toLowerCase();
console.log(state);

if (state === 'no' || state === 'n') {
  alert('Correct');
} else {
  alert('You are inccorect I was actually born in Iowa');
}


var cars = prompt('Do I drive a stickshift?').toLowerCase();
console.log(cars);

if (cars === 'yes' || cars === 'y') {
  alert('StickShift is life!');
} else {
  alert('HAHA nope love driving stick to much');
}

var siblings = prompt('Do I have any siblings?').toLowerCase();
console.log(siblings);

if (siblings === 'no' || siblings === 'n') {
  alert('Congrats you were right');
} else {
  alert('I kind of wish that I did have some');
}

var travel = prompt('Have I ever left the country?').toLowerCase();
console.log(travel);

if (travel === 'yes' || travel === 'y') {
  alert('Yes I have. I went to Victoria Canada');
} else {
  alert('Sorry! But I actually have left the country');
}


var favNumber = prompt('What is my favorite number?');
console.log(favNumber);
