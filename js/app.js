'use strict';

//console.log('hello world');

// Global Variables
const allItems = [];

let counter = 0;
let MAX_COUNTER = 3;

// Window into the DOM
let myContainer = document.getElementById("container");


//accessing Dom images
let imageOne = document.getElementById("image-one");
let imageTwo = document.getElementById("image-two");
let imageThree = document.getElementById("image-three");

// shows results button
let showResults = document.getElementById("show-results");

// displays results list
let displayResults = document.getElementById("display-results");



function Item(name, fileExtension = 'jpg') {

  this.name = name;
  this.src = `img/${name}.${fileExtension}`;
  this.views = 0;
  this.votes = 0;
  allItems.push(this);

}

//console.log(allItems)

new Item('bag');
new Item('banana');
new Item('bathroom');
new Item('boots');
new Item('breakfast');
new Item('bubblegum');
new Item('chair');
new Item('cthulhu');
new Item('dog-duck');
new Item('dragon');
new Item('pen');
new Item('pet-sweep');
new Item('scissors');
new Item('shark');
new Item('sweep', 'png');
new Item('tauntaun');
new Item('unicorn');
new Item('water-can');
new Item('wine-glass');


// function getRandomIndex() {
//   return Math.floor(Math.random() * allItems.length);
// }

Array.prototype.sample = function(){
  return this[Math.floor(Math.random()*allItems.length)];
};

// shelf analogy for what can be picked
let theShelf = [];

//number used for array
let number = 0;


for (let i = 0; i < allItems.length; i++) {
  theShelf.push(number);
  number = number + 1;
}


// let itemOneIndex = theShelf.sample();
// //console.log(itemOneIndex);
// theShelf.splice(itemOneIndex,1);
// //console.log(theShelf);


// let itemTwoIndex = theShelf.sample();
// //console.log(itemTwoIndex);
// theShelf.splice(itemTwoIndex,1);
// //console.log(theShelf);

// let itemThreeIndex = theShelf.sample();
// console.log(itemThreeIndex);
// theShelf.splice(itemThreeIndex,1);
// console.log(theShelf);





//console.log(itemOneIndex, itemTwoIndex, itemThreeIndex);


function renderImages() {
  
  counter++;

  let theShelf = [];

  //number used for array
  let number = 0;
  
  for (let i = 0; i < allItems.length; i++) {
    theShelf.push(number);
    number = number + 1;
  }
  
  //console.log(theShelf);
  
  
  let itemOneIndex = theShelf.sample();
  //console.log(itemOneIndex);
  theShelf.splice(itemOneIndex,1);
  //console.log(theShelf);
  
  
  let itemTwoIndex = theShelf.sample();
  //console.log(itemTwoIndex);
  theShelf.splice(itemTwoIndex,1);
  //console.log(theShelf);
  
  let itemThreeIndex = theShelf.sample();
  //console.log(itemThreeIndex);
  theShelf.splice(itemThreeIndex,1);
  //console.log(theShelf);

  
  imageOne.src = allItems[itemOneIndex].src;
  imageOne.alt = allItems[itemOneIndex].name;
  allItems[itemOneIndex].views++;

  imageTwo.src = allItems[itemTwoIndex].src;
  imageTwo.alt = allItems[itemTwoIndex].name;
  allItems[itemTwoIndex].views++;

  imageThree.src = allItems[itemThreeIndex].src;
  imageThree.alt = allItems[itemThreeIndex].name;
  allItems[itemThreeIndex].views++;

  //renderImages();


}

renderImages();



if (counter === MAX_COUNTER) {
  myContainer.removeEventListener('click', handleImageClick);

}

function handleImageClick(e) {
  let imageVotes = e.target.alt;

  console.log(imageVotes);


  for (let i = 0; i < allItems.length; i++) {
    if (imageVotes === allItems[i].name) {
      allItems[i].votes++;
    }
  }
  
  renderImages();

}




function handleShowResultsVoted() {
  let displayResults = document.getElementById('display-results');

  if (counter === MAX_COUNTER) {
    for (let i = 0; i < allItems.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${allItems}`;
      displayResults.appendChild(li);
    }
  }
}



myContainer.addEventListener('click', handleImageClick);


showResults.addEventListener('clicks', handleShowResultsVoted);




