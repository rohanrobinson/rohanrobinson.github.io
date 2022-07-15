
var dinosuars = document.getElementById("dinosaurOptions");
var animals = document.getElementById("animalOptions");





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
    console.log(dinoPicTable[newDino]);
});

// Detects when user chooses a new animal
animals.addEventListener('change', function (event) {
    console.log("animal change ", event.target.value);
    var newAnimal = event.target.value;
    console.log(animalPicTable[newAnimal]);
});