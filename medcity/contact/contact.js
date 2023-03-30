

function contact(){
    var name = document.querySelector('.int-n'),
        email = document.querySelector('.int-e'),
        subject = document.querySelector('.int-s'),
        message = document.querySelector('.int-m'),
        input = document.querySelectorAll('.ints');

        if (name.value == "" || email.value == "" || subject.value == "" || message.value == ""){

            input.forEach(int => {
                if (int.value == ""){
                    var whoint = int.parentElement.parentElement.querySelector('h5').innerHTML;
                    var errormsg = "The " + whoint + " " + "Field Cannot Be Empty";
                    document.querySelector('.error-div').style.right = "-100%";
                    document.querySelector('.error-div .error .sub p').innerHTML= errormsg;
                    document.querySelector('.error-div').style.right = "10px";
                    setTimeout(function(){
                        document.querySelector('.error-div').style.right = "-100%";
                    },10000)
                }
            });

        }
        else {
            firebase.auth().onAuthStateChanged(function(user){
                if (user){
                    var uid = user.uid;
    
                    db.ref(usersRef).child(uid).child(contactChild).once('value',function(snapshot){
                        var numContacts = snapshot.numChildren();
                        var newcontactIndex = "assistance" + (numContacts + 1)
    
                        db.ref(usersRef).child(uid).child(contactChild).child(newcontactIndex).set({
                           name:name.value,
                           amount:email.value,
                           subject:subject.value,
                           message:message.value 
                        }).then(function(){
                            contactParams = {
                                name:name.value,
                                email:email.value,
                                subject:subject.value,
                                message:message.value
                            }
                            emailjs.send('service_6la3hvp', 'template_sx8s3dq', contactParams, '77KLKTlxEoWRo5Yor');
                            name.value = "";
                            email.value = "";
                            subject.value = "";
                            message.value = "";


                            document.querySelector('.success-div').style.top = "80px";
                            progress();
                        }).catch(function(){
                            show_error("We're sorry, we couldn't register your contact form submission at this time." + "<br>" + "Please Reload The Page And Try Again");
                        })
                    }).catch(function(){
                        window.location.reload();
                    })
                }
            })
        }
}

function progress(){
// Get the progress bar element
var progressBar = document.querySelector('.progress .progress-bar');

if (progressBar.parentElement.parentElement.style.top = "80px"){
// Set the initial width to 100%
progressBar.style.width = '100%';

// Calculate the decrement amount per second to achieve 0 width in 15 seconds
var decrementPerSecond = 100 / 15;

// Set an interval to decrement the progress bar width every 1000 milliseconds (1 second)
var interval = setInterval(function() {
  // Get the current width of the progress bar
  var currentWidth = parseFloat(progressBar.style.width);

  // Decrement the width by the calculated amount
  var newWidth = currentWidth - decrementPerSecond;
  if (newWidth <= 0) {
    // If the new width is less than or equal to 0, set it to 0 and clear the interval
    newWidth = 0;
    clearInterval(interval);
    setTimeout(function() {
      // Set the parent element's top property to -100% after a delay of 1 second (1000 milliseconds)
      progressBar.parentElement.parentElement.style.top = '-100%';
    }, 1000);
  }

  // Set the new width of the progress bar
  progressBar.style.width = newWidth + '%';
}, 1000);
}
else {
    document.querySelector('.success-div').style.top = "80px";
    progress();   
}


}