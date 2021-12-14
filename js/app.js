'use strict';

//console.log('hello world');

// Global Variables
const allItems = [];
//let theShelf = [];

let counter = 0;
let MAX_COUNTER = 10;

// use the book shelf analogy
let theShelf = [];

// Window into the DOM
let myContainer = document.getElementById('container');


//accessing Dom images
let imageOne = document.getElementById('image-one');
let imageTwo = document.getElementById('image-two');
let imageThree = document.getElementById('image-three');

// shows results button
let showResults = document.getElementById('show-results');




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


function getRandomIndex() {
  return Math.floor(Math.random() * allItems.length);
}




//console.log(itemOneIndex, itemTwoIndex, itemThreeIndex);


function renderImages() {

  //console.log(theShelf);

  while (theShelf.length < 6) {
    let randoNum = getRandomIndex();
    while (!theShelf.includes(randoNum)) {
      theShelf.unshift(randoNum);
    }
  }
  //console.log(theShelf);

  let itemOneIndex = theShelf[0];

  let itemTwoIndex = theShelf[1];

  let itemThreeIndex = theShelf[2];

  for (let i = 3; i < 6; i++) {
    theShelf.pop([i]);
  }

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


}




//Event Handlers
function handleImageClick(e) {

  counter++;
  let imageVotes = e.target.alt;

  console.log(imageVotes);


  for (let i = 0; i < allItems.length; i++) {
    if (imageVotes === allItems[i].name) {
      allItems[i].votes++;
    }
  }

  renderImages();

  if (counter === MAX_COUNTER) {
    myContainer.removeEventListener('click', handleImageClick);

  }
}



function handleShowResultsVoted(e) {

  let displayResults = document.getElementById('display-results');

  if (counter === MAX_COUNTER) {
    renderItemsChart();
  }
}


//Exectuable Functions
renderImages();

//Event Listeners
myContainer.addEventListener('click', handleImageClick);

showResults.addEventListener('click', handleShowResultsVoted);


function renderItemsChart() {

  const ctx = document.getElementById('chart').getContext('2d');

  let itemNames = [];
  let itemVotes = [];
  let itemViews = [];


  for (let i = 0; i < allItems.length; i++) {
    itemNames.push(allItems[i].name);
    itemVotes.push(allItems[i].votes);
    itemViews.push(allItems[i].views);
  }


  let myChartData = {
    type: 'bar',
    data: {
      labels: itemNames,
      datasets: [{
        label: '# of Votes',
        data: itemVotes,
        backgroundColor: 'rgba(162, 228, 132, 0.77)',
        borderColor: 'rgba(194, 213, 227, 0.77)',
        borderWidth: 1
      },
      {
        label: '# of Views',
        data: itemViews,
        backgroundColor: 'rgba(49, 75, 145, 0.77)',
        borderColor: 'rgba(194, 213, 227, 0.77)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };


  let myChart = new Chart(ctx, myChartData);
}
