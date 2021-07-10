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

var tipcalcHeader = document.getElementById('tipcalc-header');
var tipcalcInfo = document.getElementById('tipcalc-info');

var softwareHeader = document.getElementById('software-projects');
var softwareTitle = document.getElementById('software-title');

var mlHeader = document.getElementById('ml-projects');
var mlTitle = document.getElementById('ml-title');

var writingHeader = document.getElementById('writing-projects');
var writingTitle = document.getElementById('writing-title');


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

mlTitle.addEventListener('click', function (event) {
  console.log("clicked");
  if (mlHeader.style.display == 'block') {
      mlHeader.style.display = 'none';

      mlHeader.value = 'Show DIV';
  }
  else {
      mlHeader.style.display = 'block';
      mlHeader.value = 'Hide DIV';
  }
});

writingTitle.addEventListener('click', function (event) {
  console.log("clicked");
  if (writingHeader.style.display == 'block') {
      writingHeader.style.display = 'none';

      writingHeader.value = 'Show DIV';
  }
  else {
      writingHeader.style.display = 'block';
      writingHeader.value = 'Hide DIV';
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

tipcalcHeader.addEventListener('click', function (event) {
  console.log("clicked");
  if (tipcalcInfo.style.display == 'block') {
      tipcalcInfo.style.display = 'none';

      tipcalcInfo.value = 'Show DIV';
  }
  else {
      tipcalcInfo.style.display = 'block';
      tipcalcInfo.value = 'Hide DIV';
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