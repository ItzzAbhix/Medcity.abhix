
function set() {
  var date = new Date();
  var dates = date.getDate();
  var month = date.getMonth();
  var input = document.getElementById("date-int");
  var year = date.getFullYear();
  month = month + 1;
  dates = dates + 1;

  if (month < 10) {
    var month = "0" + month;
  }
  if (dates < 10) {
    dates = "0" + dates;
  }
  full_date = year + "-" + month + "-" + dates;
  input.setAttribute("min", full_date);
}

set();
function load() {
  document.querySelector(".body").style.overflow = "hidden";
  setTimeout(function () {
    document.querySelector(".loader").style.display = "none";
    document.querySelector(".body").style.overflow = "auto";
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
 
  function close_error(){
       document.querySelector('.error-div').style.right = "-100%";
       document.querySelector('.error-div .error .sub p').innerHTML = "eerorr";
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