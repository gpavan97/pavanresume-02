// Automatic Slideshow - change image every 4 seconds
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 10000000);    
}

// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

// When the user clicks anywhere outside of the modal, close it
var modal = document.getElementById('ticketModal');
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// Contact Email 
const sendmail = ()=>{
  const name=document.getElementById("Name").value
  const mail=document.getElementById("Mail").value
  const message=document.getElementById("Message").value
  Email.send({
    SecureToken : "173e66da-8295-48f2-8e50-23f2d4ccc689",
    To : 'gudapatipavankalyan123@gmail.com',
    From : "gudapatipavankalyan123@gmail.com",
    Subject : `Hello you Message from your website  with  this ${mail}`,
    Body : `Hello pavan we have a new message from ${name}, message: ${message} `
  }).then(
  message => alert(message)
  );
}
