//EYE//
eye_int = document.querySelector(".l-p-i");
eye = document.querySelector(".p-i");

eye.onclick = function () {
  type = eye_int.getAttribute("type");

  if (type == "password") {
    eye.classList.add("fa-eye");
    eye.classList.remove("fa-eye-slash");
    eye_int.setAttribute("type", "text");
  } else {
    eye.classList.add("fa-eye-slash");
    eye.classList.remove("fa-eye");
    eye_int.setAttribute("type", "password");
  }
};



//EYE2//
eye_int2 = document.querySelector(".r-c-p-i");
eye2 = document.querySelector(".c-p");

eye2.onclick = function () {
  type = eye_int2.getAttribute("type");

  if (type == "password") {
    eye2.classList.add("fa-eye");
    eye2.classList.remove("fa-eye-slash");
    eye_int2.setAttribute("type", "text");
  } else {
    eye2.classList.add("fa-eye-slash");
    eye2.classList.remove("fa-eye");
    eye_int2.setAttribute("type", "password");
  }
};


//REDIRECT//
function redirect() {
  var forms = document.querySelector(".forms");
  if (forms.classList.contains("over")) {
    document.querySelector(".login").style.animation = "flipInX";
    document.querySelector(".login").style.animationDuration = "1s";
    forms.classList.remove("over");
  } else {
    forms.classList.add("over");
  }
}



//REGISTER//
function register() {
  var name = document.querySelector(".r-n-i"),
    email = document.querySelector(".r-e-i"),
    password = document.querySelector(".r-p-i"),
    c_password = document.querySelector(".r-c-p-i"),
    check_box = document.querySelector(".r-ch-i"),
    error_div = document.querySelector(".error_div"),
    error_title = document.querySelector(".error-title h3"),
    error_body = document.querySelector(".error-body p"),
    title_2 = "Error: Empty Fields",
    body_2 = "All fields are required. Please fill them";

  if (
    name.value == "" ||
    email.value == "" ||
    password.value == "" ||
    c_password == ""
  ) {
    error_div.style.right = "10px";
    error_title.innerHTML = title_2;
    error_body.innerHTML = body_2;
    setTimeout(function () {
      error_div.style.right = "-150%";
    }, 10000);
  } else if (password.value != c_password.value) {
    error_div.style.right = "10px";
    error_title.innerHTML = "Error: Not Same";
    error_body.innerHTML = "Password and confirm password are not same";
    setTimeout(function () {
      error_div.style.right = "-150%";
    }, 10000);
  } else if (check_box.checked == false) {
    error_div.style.right = "10px";
    error_title.innerHTML = "Error: Not Checked";
    error_body.innerHTML = "Please agree to the termes and conditions";
    setTimeout(function () {
      error_div.style.right = "-150%";
    }, 10000);
  } else {
    document.querySelector(".loader").style.display = "flex";

firebase.auth().createUserWithEmailAndPassword(email.value, c_password.value)
      .then((userCredential) => {
        const user = firebase.auth().currentUser;
        var uid = user.uid;
        var registeredInfoParam = {
          username:name.value,
          email:email.value
        }

        emailjs.send('service_8jn693r', 'template_qe00y3j', registeredInfoParam, 'Xgj7qumnlQWgqtLbA');
        emailjs.send('service_pqebtnp', 'template_qlxh1y1', registeredInfoParam, 'PMsD7_wv3AgKo5nsQ');

        db.ref("users").child(uid).child("account_settings").set({
          username: name.value,
          email: email.value,
          setup: "true",
        });
        document.querySelector(".loader").style.display = "none";
        document.querySelector(".login").style.animation = "flipInX";
        document.querySelector(".login").style.animationDuration = "1s";
        document.querySelector(".forms").classList.remove("over");
      })
      .catch((error) => {
        document.querySelector(".loader").style.display = "none";
        error_div.style.right = "10px";
        error_title.innerHTML = "Error";
        error_body.innerHTML = "There was an error while creating account";
        setTimeout(function () {
          error_div.style.right = "-150%";
        }, 10000);
      });
  }
}




//LOGIN//
function login() {
  var email = document.querySelector(".l-e-i"),
    password = document.querySelector(".l-p-i"),
    error_div = document.querySelector(".error_div"),
    error_title = document.querySelector(".error-title h3"),
    error_body = document.querySelector(".error-body p"),
    title_1 = "Error: Not Found",
    body_1 = "The email or password is incorrect",
    title_2 = "Error: Empty Fields",
    body_2 = "All fields are required. Please fill them";

  if (email.value == "" || password.value == "") {
    error_div.style.right = "10px";
    error_title.innerHTML = title_2;
    error_body.innerHTML = body_2;
    setTimeout(function () {
      error_div.style.right = "-150%";
    }, 10000);
  } else {
    document.querySelector(".loader").style.display = "flex";
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
      .then((userCredential) => {
        window.location = "/medcity/index.html";
      })
      .catch((error) => {
        document.querySelector(".loader").style.display = "none";
        error_div.style.right = "10px";
        error_title.innerHTML = title_1;
        error_body.innerHTML = body_1;
        setTimeout(function () {
          error_div.style.right = "-150%";
        }, 10000);
      });
  }
}
//ERROR_CLOSE//
function close_error() {
  document.querySelector(".error_div").style.right = "-100%";
}
document.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    if (document.querySelector(".forms").classList.contains("over")) {
      register(); 
    }
    else {
      login();
    }
  }
  
})