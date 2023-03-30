

function load() {
  document.querySelector(".body").style.overflow = "hidden";
  setTimeout(function () {
    document.querySelector(".loader").style.display = "none";
    document.querySelector(".body").style.overflow = "auto";
    document.querySelector('.modal').style.display = "flex";
  }, 6000);
}

load();
   const showMenu = (toggleId, navId) => {
     const toggle = document.getElementById(toggleId),
       nav = document.getElementById(navId);

     // Validate that variables exist
     if (toggle && nav) {
       toggle.addEventListener("click", () => {
         // We add the show-menu class to the div tag with the nav__menu class
         nav.classList.toggle("show-menu");
       });
     }
   };
   showMenu("nav-toggle", "nav-menu");


  // working with input//
  var inputs = document.querySelectorAll('.int');

  inputs.forEach((int) => {
    int.addEventListener('focus', () => {
      int.parentNode.parentElement.classList.add('focus');
      int.parentNode.parentElement.classList.add('borderness');
    });
  })
  inputs.forEach((int) => {
    int.addEventListener('blur', () => {
      int.parentNode.parentElement.classList.remove('borderness');
      if (!int.value) {
        int.parentNode.parentElement.classList.remove('focus');
      }
    });
  })

  var inputmsg = document.querySelector('.intmsg');

  inputmsg.addEventListener('focus', () => {
    inputmsg.parentNode.parentElement.classList.add('focusmsg');
    inputmsg.parentNode.parentElement.classList.add('borderness');
  });
  
  inputmsg.addEventListener('blur', () => {
    inputmsg.parentNode.parentElement.classList.remove('borderness');
    if (!inputmsg.value) {
      inputmsg.parentNode.parentElement.classList.remove('focusmsg');
    }
  })

  document.querySelector('.close-success').addEventListener('click', function(){
  
    this.parentElement.parentElement.style.top = "-100%";
  })


  function show_error(error){
    var erorr_div = document.querySelector('.error-div');
    var error_p = erorr_div.querySelector('.error .sub p');
   
    error_p.innerHTML = error;
    erorr_div.style.zIndex = "999999";
    erorr_div.style.right = "10px";
   
    setTimeout(function(){
       error_p.innerHTML = "eerorr";
       erorr_div.style.right = "-100%";
       erorr_div.style.zIndex = "1";
    },10000)
   }


   
   var timeouted;


document.querySelector('.account-li').addEventListener('mouseenter', () => {

  clearTimeout(timeouted);

  if (document.querySelector('.account-li').classList.contains('drop-focused')){
    ;
  }
  else {
    document.querySelector('.account-li').classList.add("drop-hovered");
  }
});

document.querySelector('.account-li').addEventListener('mouseleave', () => {


  timeouted = setTimeout(function(){
    if (document.querySelector('.account-li').classList.contains('drop-focused')){
      ;
    }
    else {
      document.querySelector('.account-li').classList.remove('drop-hovered')
    }
  },400)
});

document.querySelector('.account-li').addEventListener('click', () => {
  if (document.querySelector('.account-li').classList.contains('drop-focused')){
        ;
  }
  else {
    document.querySelector('.account-li').classList.add('drop-focused');
  }
});


document.addEventListener('click', (event) => {
  if (!event.target.closest('.account-li')) {
    
    if (document.querySelector('.account-li').classList.contains('drop-focused')){
        document.querySelector('.account-li').classList.remove('drop-focused');
        document.querySelector('.account-li').classList.remove('drop-hovered');
      }
      else {
        document.querySelector('.account-li').style.display = "block";
      }
  }
});


document.querySelector('.account-dropdown').addEventListener('mouseenter' , () => {
  document.querySelector('.account-dropdown').parentElement.classList.add('drop-hovered');
});