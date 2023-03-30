window.addEventListener("DOMContentLoaded", function(){

  const url = window.location.href;

// Get the file name from the URL
const fileName = url.substring(url.lastIndexOf('/')+1);

if (fileName == "reauthenticate.html"){

  const counter = document.getElementById("counter");
  
  // Set the initial count value
  let count = 15;
  
  // Create the interval function
  const interval = setInterval(() => {
    // Decrement the count
    count--;
  
    // Update the counter text
    counter.textContent = count + "s";
  
    // If the count reaches 0, clear the interval
    if (count === 0) {
      window.location = "/sign/index.html";
    };
  }, 2000);
}
else {
    auth.onAuthStateChanged((user) => {
        if (user) {
          startMedcity();
        } else {
          this.setTimeout(function(){
            console.log("not signed")
            window.location = "/reauthenticate.html";
          },3000)
        }
      });
};

});


function reauthtologin(){
  window.location = "/sign/index.html";
};

