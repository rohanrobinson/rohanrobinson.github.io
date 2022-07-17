var dinosuars = document.getElementById("dinosaurOptions");
var animals = document.getElementById("animalOptions");

// text display  to user 
var animalSelected = document.getElementById("animalSelected");
var dinoSelected = document.getElementById("dinoSelected");

// info for genetic comparison
var animalSelection = document.getElementById("animalOptions");
var dinosaurSelection = document.getElementById("dinosaurOptions");


var curiosityBtn = document.getElementById("curiosityBtn");

// elements pertaining to results
var resultsDiv = document.getElementById("resultsDiv");
var animalSpan = document.getElementById("animalSpan");
var dinoSpan = document.getElementById("dinoSpan");
var percentageSpan = document.getElementById("percentageSpan");
/////////---////////////////////

// Open the modal
curiosityBtn.addEventListener("click", function() {
    animalSpan.innerHTML = animalSelection.value;
    dinoSpan.innerHTML =  dinosaurSelection.value;
    percentageSpan.innerHTML = Math.floor(Math.random() * 100);
    resultsDiv.style.display = 'block';
});

  
var dinoPicTable = {
    "T-rex": 'showTrexPic' ,
    "Velociraptor": 'showVelociraptorPic',
    "Pterodactyl": 'showPteroPic',
    "Brontosauraus": 'showBrontoPic',
    "Triceratops": 'showTriceratops', 
    "Stegasaurous": 'showStegasaurous', 

};

var animalPicTable = {
    "Tiger": "showTigerPic",
    "Lion": "showLionPic",
    "Bear": "showBearPic",
    "Bird": "showBirdPic",
    "Gator": "showGatorPic", 
    "Elephant": "showElephantPic"
};


// Detects when user chooses a new dino
dinosuars.addEventListener('change', function (event) {
    console.log("dinosaur change ", event.target.value);
    var newDino = event.target.value;
    dinoSelected.innerHTML = "Hello Human, you have selected " +  newDino;
    console.log(dinoPicTable[newDino]);
});

// Detects when user chooses a new animal
animals.addEventListener('change', function (event) {
    console.log("animal change ", event.target.value);
    var newAnimal = event.target.value;
    animalSelected.innerHTML = "Master Yoda, you have selected " +  newAnimal;
    console.log(animalPicTable[newAnimal]);
});