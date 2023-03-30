//Save//
function save() {
    
    var username = document.querySelector('.g-u-i'),
        email = document.querySelector('.g-e-i'),
        phone_number_pi = document.querySelector('.g-pi-i'),
        phone_number = document.querySelector('.g-p-i');
    var state = document.querySelector('.g-s-i'),
        city = document.querySelector('.g-c-i'),
        pin_code = document.querySelector('.g-pn-i'),
        area = document.querySelector('.g-rn-i'),
        hn = document.querySelector('.g-bn-i');

    window.scrollTo(0, 0);
    document.querySelector('body').style.overflow = "hidden";
    document.querySelector('.loader2').style.display = "flex";
    
    if (username.value == "" || email.value == "" || state.value == "" ||  city.value == ""|| pin_code.value =="" || area.value == "" || hn.value == "" || phone_number_pi.value == "" || phone_number.value == "") {
        var inputs  = document.querySelectorAll('.display_info .inputBox input');
      setTimeout(function(){
          inputs.forEach(int => {
              if (int.parentElement.classList.contains('in-n-box')){
               if (int.value == ""){
                var who = int.parentElement.parentElement.querySelector('h5').innerHTML;
                show_error(who + " " + "Field Cannot Be Blank");
               }
              }
              else {
                if (int.value == ""){
                    var who = int.parentElement.querySelector('h5').innerHTML;
                    show_error(who + " " + "Field Cannot Be Blank");
                }
              }
          })
          window.scrollTo(0, 50);
          document.querySelector('body').style.overflow = "auto";
          document.querySelector('.loader2').style.display = "none";
      },1000)
    }
    else {
        
        auth.onAuthStateChanged((user) => {
            if (user) {
                var uid = user.uid;
             user.updateProfile({
                displayName:username.value
             })

      var userRef = db.ref(usersRef).child(uid).child(account_settingsChild);
                userRef.set({
                    username: username.value,
                    email: email.value,
                    state: state.value,
                    city: city.value,
                    pin_code: pin_code.value,
                    area: area.value,
                    house_no: hn.value,
                    phone_number: phone_number.value,
                    phone_numberpi: phone_number_pi.value,
                    setup: "false"
                });
                
                window.location.reload();
            }
            else {
                ;
            }
        }
        )
    }

}