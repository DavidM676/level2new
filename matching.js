

let images = ["images/matching/image1.webp", "images/matching/image2.jpg", "images/matching/image3.gif", "images/matching/image4.jpg", "images/matching/image5.jpg", "images/matching/image6.jpg", "images/matching/image7.jpg", "images/matching/image8.jpg"];

let flipped = 0;
let currentFlipped = null;

let score = 0;
let flippedCards = [];
let matchedPairs = 0;
let comments = ["Nice job!", "Keep it up!", "Are you even trying?"];

const grid = document.querySelector(".matching");
const scoreDisplay = document.getElementById("score");
const resetButton = document.getElementById("resetButton");
const commentsContainer = document.getElementById("comments");




const overlay = document.getElementById('overlay');
const modal = document.getElementById('modal');
const close = document.getElementById('close');

// Function to open the pop-out window
function openModal() {
  overlay.style.display = 'block';
}

// Function to close the pop-out window
function closeModal() {
  overlay.style.display = 'none';
}


close.addEventListener('click', closeModal);




resetGame = () => {window.location.href = window.location.origin;};





// Shuffle the images
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}



// Create the game grid
function createGrid() {
    let og = JSON.parse(JSON.stringify(images));

    shuffle(images);
    shuffle(og);

    images = images.concat(og);
    console.log(images);

    for (let i = 0; i < 16; i++) {
        const card = document.createElement("div");
        card.className = "card";
        //set card width
        const image = document.createElement("img");
        image.src = "images/matching/hidden.png";
        image.setAttribute("id", i);

        //create card click event that passes in the cards index
        card.addEventListener("click", function () {
            cardClick(i);
        });

        card.appendChild(image);
        grid.appendChild(card);
    }
}


function cardClick(index) {
    score ++;
    scoreDisplay.innerHTML = score;

    console.log("card clicked", index);
    if (flipped>1) {return;}

    flipped++;
    document.getElementById(index).src = images[index];

    if (currentFlipped === null) {
        currentFlipped = index;
    } else {
        if (images[currentFlipped] === images[index]) {
            console.log("match");
            matchedPairs++;
            flipped = 0;
            currentFlipped = null;
            flippedCards = [];
            commentsContainer.innerHTML = comments[0];
            if (matchedPairs === 8) {
                commentsContainer.innerHTML = "You finished!";
                setTimeout(openModal, 1000);
            }
        } else {
            console.log("no match");
            setTimeout(function () {
                document.getElementById(currentFlipped).src = "images/matching/hidden.png";
                document.getElementById(index).src = "images/matching/hidden.png";
                flipped = 0;
                currentFlipped = null;
                flippedCards = [];
                commentsContainer.innerHTML = comments[2];
            }, 1000);
        }
    }



}   



resetButton.addEventListener("click", resetGame);
createGrid();



