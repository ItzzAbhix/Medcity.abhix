function load(){
    document.querySelector('.body').style.overflow = "hidden";
    setTimeout(function(){
        document.querySelector('.loader').style.display = "none";
    document.querySelector('.body').style.overflow = "auto";
    },6000)

}


load();


const showMenu = (toggleId, navId) =>{
          const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
          
          // Validate that variables exist
          if(toggle && nav){
              toggle.addEventListener('click', ()=>{
                  // We add the show-menu class to the div tag with the nav__menu class
                  nav.classList.toggle('show-menu')
              })
          }
      }

      showMenu('nav-toggle','nav-menu')
      
      
      /*=============== CHANGE BACKGROUND HEADER ===============*/
      function scrollHeader(){
          const nav = document.getElementById('header')
          // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
          if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
      }
      window.addEventListener('scroll', scrollHeader)
      
      /*=============== SHOW SCROLL UP ===============*/
      function scrollUp(){
          const scrollUp = document.getElementById('scroll-up');
          // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
          if(this.scrollY >= 260) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
      }
      window.addEventListener('scroll', scrollUp)
    



/*GET DATA*/
var username_input = document.querySelector('.g-u-i'),
    email_input = document.querySelector('.g-e-i'),
    phone_number_pi_input = document.querySelector('.g-pi-i'),
    phone_number_input = document.querySelector('.g-p-i');
    
var state_input = document.querySelector('.g-s-i'),
    city_input = document.querySelector('.g-c-i'),
    pin_code_input = document.querySelector('.g-pn-i'),
    area_input = document.querySelector('.g-rn-i'),
    hn_input = document.querySelector('.g-bn-i');


auth.onAuthStateChanged((user) => {
    if (user) {
        var uid = user.uid;
        var userRef = db.ref(usersRef).child(uid).child(account_settingsChild);
        userRef.on('value', (snapshot) => {
            var email = snapshot.val().email;
            var username = snapshot.val().username;
            var setup = snapshot.val().setup;    
            var phone_number = snapshot.val().phone_number;
            var phone_number_pi = snapshot.val().phone_numberpi;
            var city = snapshot.val().city;
            var pin_code = snapshot.val().pin_code;
            var state = snapshot.val().state;
            var area = snapshot.val().area;
            var house_no = snapshot.val().house_no;
            setup_check(email , username , phone_number , phone_number_pi , setup , city , pin_code , area , house_no, state);
        })
    }
    else {
        ;
    }
})
//SHWO DATA//
function setup_check(email , username , phone_number , phone_number_pi , setup , city , pin_code , area , house_no , state) {
 
    if (setup == "true") {
        email_input.value = email;
        username_input.value = username;
    }
    else {
        email_input.value = email;
        username_input.value = username;
        state_input.value = state;
        phone_number_input.value = phone_number;
        phone_number_pi_input.value = phone_number_pi;
        city_input.value = city;
        pin_code_input.value = pin_code;
        area_input.value = area;
        hn_input.value = house_no;
    }
}

function show_error(error){
    var erorr_div = document.querySelector('.error-div');
    var error_p = erorr_div.querySelector('.error .sub p');
   
    error_p.innerHTML = error;
    if (document.querySelector('.big-wrapper').classList.contains('del-tab')){
        erorr_div.style.zIndex = "9999999";
        erorr_div.style.right = "10px";
    }
    else {
        erorr_div.style.right = "10px";
    }
   
    setTimeout(function(){
       error_p.innerHTML = "eerorr";
       erorr_div.style.zIndex = "1";
       erorr_div.style.right = "-100%";
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
})