function sendEmail(){
    document.querySelector('.loader').style.display = 'flex';
    var email = document.querySelector('.box input');
    if (email.value == ""){
        document.querySelector('.wrapper label').style.display = 'inline-block';
    }
    else {

        firebase.auth().sendPasswordResetEmail(email.value)
        .then(() => {
         document.querySelector('.loader').style.display = "none";
         document.querySelector('.wrapper').style.display = "none";
         document.querySelector('.wrapper2').style.display = "flex";
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log("error")
        });
    }
      
}