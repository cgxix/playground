// Create a program that will take a user input and show it in the HTML doc.

function sendMessage(){
  let message = document.getElementById('message').value;
  document.getElementById('userMessage').innerHTML = message;
}

btn.addEventListener('click', sendMessage);
