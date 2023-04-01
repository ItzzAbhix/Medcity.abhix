
document.querySelector('.b').setAttribute('href', "#")


document.querySelector('.b').addEventListener("click", function(){

    firebase.auth().signOut().then(() => {
        window.location = "/sign/";
      }).catch(() => {
        window.location = "/error"
      });

})    
