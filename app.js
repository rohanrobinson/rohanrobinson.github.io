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
window.onload=function(){
var courtHeader = document.getElementById('court-header');
var courtInfo = document.getElementById('court-info');

var dplanHeader = document.getElementById('dplan-header');
var dplanInfo = document.getElementById('dplan-info');

var athenaHeader = document.getElementById('athena-header');
var athenaInfo = document.getElementById('athena-info');

var peerTechHeader = document.getElementById("peertech-header");
var peerTechInfo = document.getElementById("peertech-info");

var accountableHeader = document.getElementById("accountable-header");
var accountableInfo = document.getElementById("accountable-info");

var clariHeader = document.getElementById("clari-header");
var clariInfo = document.getElementById("clari-info");

var softwareHeader = document.getElementById('software-projects');
var softwareTitle = document.getElementById('software-title');


softwareTitle.addEventListener('click', function (event) {
  console.log("clicked");
  if (softwareHeader.style.display == 'block') {
      softwareHeader.style.display = 'none';

      softwareHeader.value = 'Show DIV';
  }
  else {
      softwareHeader.style.display = 'block';
      softwareHeader.value = 'Hide DIV';
  }
});

courtHeader.addEventListener('click', function (event) {
  console.log("clicked");
  if (courtInfo.style.display == 'block') {
      courtInfo.style.display = 'none';

      courtInfo.value = 'Show DIV';
  }
  else {
      courtInfo.style.display = 'block';
      courtInfo.value = 'Hide DIV';
  }
});

dplanHeader.addEventListener('click', function (event) {
  console.log("clicked");
  if (dplanInfo.style.display == 'block') {
      dplanInfo.style.display = 'none';

      dplanInfo.value = 'Show DIV';
  }
  else {
      dplanInfo.style.display = 'block';
      dplanInfo.value = 'Hide DIV';
  }
});


athenaHeader.addEventListener('click', function (event) {
  console.log("clicked");
  if (athenaInfo.style.display == 'block') {
      athenaInfo.style.display = 'none';

      athenaInfo.value = 'Show DIV';
  }
  else {
      athenaInfo.style.display = 'block';
      athenaInfo.value = 'Hide DIV';
  }
});

peerTechHeader.addEventListener('click', function (event) {
  console.log("clicked");
  if (peerTechInfo.style.display == 'block') {
      peerTechInfo.style.display = 'none';

      peerTechInfo.value = 'Show DIV';
  }
  else {
      peerTechInfo.style.display = 'block';
      peerTechInfo.value = 'Hide DIV';
  }
});

accountableHeader.addEventListener('click', function (event) {
  console.log("clicked");
  if (accountableInfo.style.display == 'block') {
      accountableInfo.style.display = 'none';

      accountableInfo.value = 'Show DIV';
  }
  else {
      accountableInfo.style.display = 'block';
      accountableInfo.value = 'Hide DIV';
  }
});

clariHeader.addEventListener('click', function (event) {
  console.log("clicked");
  if (clariInfo.style.display == 'block') {
      clariInfo.style.display = 'none';

      clariInfo.value = 'Show DIV';
  }
  else {
      clariInfo.style.display = 'block';
      clariInfo.value = 'Hide DIV';
  }
});
  

}




// //from w3 schools
// // Get the modal
// var dplanModal = document.getElementById("dplanModal");
// var baconModal = document.getElementById("baconModal");

// // Get the button that opens the modal
// var dplanBtn = document.getElementById("dplanBtn");
// var baconBtn = document.getElementById("baconBtn");

// // Get the <span> element that closes the modal
// var dplanSpan = document.getElementsByClassName("closeDplan")[0];
// var baconSpan = document.getElementsByClassName("closeBacon")[0];

// // When the user clicks on the button, open the modal
// dplanBtn.onclick = function() {
//   dplanModal.style.display = "block";
// }

// baconBtn.onclick = function() {
//    baconModal.style.display = "block";
//   }

// // When the user clicks on <span> (x), close the modal
// dplanSpan.onclick = function() {
//   dplanModal.style.display = "none";
// }
// baconSpan.onclick = function() {
//     baconModal.style.display = "none";
//   }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == dplanModal) {
//     dplanModal.style.display = "none";
//   }
// }

// window.onclick = function(event) {
//     if (event.target == baconModal) {
//       baconModal.style.display = "none";
//     }
//   }