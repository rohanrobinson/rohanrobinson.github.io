// var dplan = document.getElementById("dplan");
// var bacon = document.getElementById("bacon")
// var pos = document.getElementById("pos");


// dplan.addEventListener('click', function (event) {
//     alert('you clicked the dplan');
// });

// bacon.addEventListener('click', function (event) {
//     alert('you clicked the bacon');
// });

// pos.addEventListener('click', function (event) {
//     alert('you clicked the pos');
// });



//from w3 schools
// Get the modal
var dplanModal = document.getElementById("dplanModal");
var baconModal = document.getElementById("baconModal");

// Get the button that opens the modal
var dplanBtn = document.getElementById("dplanBtn");
var baconBtn = document.getElementById("baconBtn");

// Get the <span> element that closes the modal
var dplanSpan = document.getElementsByClassName("closeDplan")[0];
var baconSpan = document.getElementsByClassName("closeBacon")[0];

// When the user clicks on the button, open the modal
dplanBtn.onclick = function() {
  dplanModal.style.display = "block";
}

baconBtn.onclick = function() {
   baconModal.style.display = "block";
  }

// When the user clicks on <span> (x), close the modal
dplanSpan.onclick = function() {
  dplanModal.style.display = "none";
}
baconSpan.onclick = function() {
    baconModal.style.display = "none";
  }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == dplanModal) {
    dplanModal.style.display = "none";
  }
}

window.onclick = function(event) {
    if (event.target == baconModal) {
      baconModal.style.display = "none";
    }
  }