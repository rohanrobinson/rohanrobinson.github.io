var dinosuars = document.getElementById("dinosaurOptions");
var animals = document.getElementById("animalOptions");

var animalSelected = document.getElementById("animalSelected");
var dinoSelected = document.getElementById("dinoSelected");

var connectBtn = document.getElementById("connectBtn");

curiosityBtn.addEventListener("click", function() {
    alert("the gal from Jurassic Park finna come thru soon...");
})

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
    dinoSelected.innerHTML = "You beautiful human have selected " +  newDino;
    console.log(dinoPicTable[newDino]);
});

// Detects when user chooses a new animal
animals.addEventListener('change', function (event) {
    console.log("animal change ", event.target.value);
    var newAnimal = event.target.value;
    animalSelected.innerHTML = "Master Yoda, you have selected " +  newAnimal;
    console.log(animalPicTable[newAnimal]);
});