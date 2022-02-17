// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let allHeartsArray = [...document.getElementsByClassName("like-glyph")];

let modal = document.getElementById('modal');

let modalParagraph = document.getElementById('modal-message');

let callServerAndCatch = (event) => {
  mimicServerCall()
  .then(() => handleResponse(event))
  .catch(error => handleError(error))
}

let handleError = (errorMessage) => {
  modal.classList.remove('hidden')
  modalParagraph.innerText = errorMessage
  setTimeout(() => { 
    modal.classList.add('hidden')
    modalParagraph.innerText = "" 
  }, 3000);
}

let handleResponse = (event) => {
  if (event.target.textContent === EMPTY_HEART) {
    event.target.classList.add('activated-heart')
    event.target.textContent = FULL_HEART
  } else {
    event.target.classList.remove('activated-heart')
    event.target.textContent = EMPTY_HEART
  }
}


allHeartsArray.map(heartNode => {
  heartNode.addEventListener('click', callServerAndCatch)
})


// Display the error modal by removing the .hidden class
// Display the server error message in the modal
// Use setTimeout to hide the modal after 3 seconds (add the .hidden class)

//// When the "server" returns a success status:
// Change the heart to a full heart
// Add the .activated-heart class to make the heart appear red

//// When a user clicks on a full heart:
// Change the heart back to an empty heart

// Remove the .activated-heart class
// Keep all your styling rules entirely in style.css. Do not manipulate any .style properties.
// Only manipulate the DOM once the server request responds. Do not make the heart full until you're inside a successful .then block.


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
