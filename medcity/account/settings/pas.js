


//CHANGE PASSWORD//
function change_password() {
    
    
    var cur_pass = document.querySelector('.c-p input'),
    new_pass = document.querySelector('.n-p input'),
    con_pass = document.querySelector('.co-p input');
    
    if (cur_pass.value == "" || new_pass.value == "" || con_pass.value == "") {
        var inputs = document.querySelectorAll('.inpted input');
        console.log(inputs)
        inputs.forEach(int => {
            if (int.value == ""){
              var who = int.parentElement.parentElement.querySelector('h4').innerHTML;
              
               show_error(who + " " + "Cannot Be Blank")
            }
        })

    }
    else if (new_pass.value != con_pass.value) {
        show_error("New Password And Confirm Password Are Not Same")
    }
    else if (new_pass.value == cur_pass.value){
        show_error("New Password And Current Password Cannot Be Same")
    }
    else if (con_pass.value == cur_pass.value){
        show_error("Confirm Password And Current Password Cannot Be Same")
    }
    else {    
       document.querySelector('.loader2').style.display = "flex";
       document.querySelector('.body').style.overflow = "hidden" ;
        auth.onAuthStateChanged(function(user){
            if (user){
                const email = user.email;
                const pas = cur_pass.value;
                var passed = con_pass.value;
                var credential = firebase.auth.EmailAuthProvider.credential(email, pas);
                const usered = auth.currentUser;
                if (email){
                    usered.reauthenticateWithCredential(credential).then(() => {
                        usered.updatePassword(passed).then(() => {
                            window.location = "../../../sign/";
                        }).catch(function(){
                         show_error('There was and error. <br> Please try again later.')
                        })
                    }).catch(function(){
                        show_error('There was and error. <br> Please try again later.')
                    })
                }
                else {
                    show_error("Sorry we coudn't fetch your email before changing your password. <br> Please logout and login again, then try.")
                }
            }
            else {
                ;
            }
        })
    }
    
}


//EYE//
var eye_1 = document.querySelector('.c-p i'),
eye_2 = document.querySelector('.n-p i'),
eye_3 = document.querySelector('.co-p i'),
input_1 = document.querySelector(".c-p input"),
input_2 = document.querySelector('.n-p input'),
input_3 = document.querySelector('.co-p input');
 
eye_1.onclick = function () {
    type = input_1.getAttribute('type');
    if (type == "password") {
        input_1.setAttribute('type', 'text');
        eye_1.classList.remove('fa-eye-slash');
        eye_1.classList.add('fa-eye');
    }
    else {
        input_1.setAttribute('type', 'password');
        eye_1.classList.remove('fa-eye');
        eye_1.classList.add('fa-eye-slash');
    }
} 

eye_2.onclick = function () {
    type = input_2.getAttribute('type');
    if (type == "password") {
        input_2.setAttribute('type', 'text');
        eye_2.classList.remove('fa-eye-slash');
        eye_2.classList.add('fa-eye');
    }
    else {
        input_2.setAttribute('type', 'password');
        eye_2.classList.remove('fa-eye');
        eye_2.classList.add('fa-eye-slash');
    }
}

eye_3.onclick = function () {
    type = input_3.getAttribute('type');
    if (type == "password") {
        input_3.setAttribute('type', 'text');
        eye_3.classList.remove('fa-eye-slash');
        eye_3.classList.add('fa-eye');
    }
    else {
        input_3.setAttribute('type', 'password');
        eye_3.classList.remove('fa-eye');
        eye_3.classList.add('fa-eye-slash');
    }
}

