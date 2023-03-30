document.addEventListener('DOMContentLoaded',() => {
  var pageloaded = document.referrer;

  if (pageloaded.indexOf("/securecheckout/") !== -1){
    var uid,
        is,
      url = window.location.search,
       newUrl = new URLSearchParams(url);
  
    if (newUrl.has('ureregiruugyyuT867fujeuru9jd;wehdwoejffoueholrn3ro38yr3rb3uyuy6g8uibhrer')){
      is = newUrl.get('ureregiruugyyuT867fujeuru9jd;wehdwoejffoueholrn3ro38yr3rb3uyuy6g8uibhrer');
      if (is == "true"){
        if (newUrl.has('errhheurherruhiruereitrtrtrtwr4r4rh98y998hhre333d3r3r3reyrgeyre8yruyreyrer')){
           uid = newUrl.get('errhheurherruhiruereitrtrtrtwr4r4rh98y998hhre333d3r3r3reyrgeyre8yruyreyrer');
           if (uid != ""){
             db.ref(usersRef).child(uid).child(checkoutChild).remove().then(() => {
              window.location.href = "index.html";
             });
           };
        };
    };
    };
  }

  else if(pageloaded.indexOf('/securecheckout/') !== -1 && pageloaded.indexOf('/securecheckout/gpay') !== -1) {
   var url = window.location.search;
   var newUrl = new URLSearchParams(url);
   if (newUrl.has("opju33699634uy04949h43jruorwrrhrwrwrhwiyrrror8787r")){
     var is = newUrl.get('opju33699634uy04949h43jruorwrrhrwrwrhwiyrrror8787r');
     console.log(is)
     if (is == "true"){
      if (newUrl.has('hureureeruoouho7893o3u8984ps84y49038434840943y834343y4083y438434y08')){
        uid = newUrl.get('hureureeruoouho7893o3u8984ps84y49038434840943y834343y4083y438434y08');
          
        if (uid != ''){
          db.ref(usersRef).child(uid).child(checkoutChild).remove().then(() => {
            window.location.href = "index.html";
          });
        };
      };
     };
   };
  }

  else if(pageloaded.indexOf('/securecheckout/') !== -1 && pageloaded.indexOf('/securecheckout/paypal') !== -1){
    var uid,
    is;
 
    var url = window.location.search;
    var newUrl = new URLSearchParams(url);
 
    if (newUrl.has('eewel0934uyf7yi3904347jeuyegiueruegreuregru')){
      is = newUrl.get('eewel0934uyf7yi3904347jeuyegiueruegreuregru');
 
      if (is == "true"){
       if (newUrl.has('rererer93ur9j4errrrir0ypy389r3o8rypo33jekf8oy8o5489jfkhfuk3r8o4yort4u9prfwdpsdh3y8373r')){
         uid = newUrl.get('rererer93ur9j4errrrir0ypy389r3o8rypo33jekf8oy8o5489jfkhfuk3r8o4yort4u9prfwdpsdh3y8373r');
           
         if (uid != ''){
           db.ref(usersRef).child(uid).child(checkoutChild).remove().then(() => {
             window.location.href = "index.html";
           });
         };
       };
      };
    };
  }

  else if(pageloaded.indexOf('/securecheckout/') !== -1 && pageloaded.indexOf('/securecheckout/orderconfirmed') !== -1){
    var uid,
    is;
   
    var url = window.location.search;
    var newUrl = new URLSearchParams(url);
    
    if (newUrl.has('ewuewu8h9ry84y89y34978fu4t93yt78yh5uorere43443eed3')){
      is = newUrl.get('ewuewu8h9ry84y89y34978fu4t93yt78yh5uorere43443eed3');
 
      if (is == "true"){
       if (newUrl.has('urhrtgyyehuothurt98c49y98h5475897u460y8984y9r8h08y4rp54n302yhr4ue898y49334890r494hf8f0fey')){
         uid = newUrl.get('urhrtgyyehuothurt98c49y98h5475897u460y8984y9r8h08y4rp54n302yhr4ue898y49334890r494hf8f0fey');
           
         if (uid != ''){
           db.ref(usersRef).child(uid).child(checkoutChild).remove().then(() => {
             window.location.href = "index.html";
           });
         };
       };
      };
    };
  }
  
  else if(pageloaded.indexOf('/orders/') !== -1 && pageloaded.indexOf('/orders/order') !== -1 || pageloaded.indexOf('/orders/') !== -1 && pageloaded.indexOf('/orders/canceled') !== -1   ){
    var uid,
    is;
 
    var url = window.location.search;
    var newUrl = new URLSearchParams(url);
 
    if (newUrl.has('huhr98ry48thohiuthtotuyreru')){
      is = newUrl.get('huhr98ry48thohiuthtotuyreru');
 
      if (is == "true"){
       if (newUrl.has('ugujhofhrurhugourghu99uhuoh9e8r9r8reg79rerg8e7re789rere9rtifrrgugrukrl4t4uot747ytjyf67ufeole9pf9p')){
         uid = newUrl.get('ugujhofhrurhugourghu99uhuoh9e8r9r8reg79rerg8e7re789rere9rtifrrgugrukrl4t4uot747ytjyf67ufeole9pf9p');
           
         if (uid != ''){
           db.ref(usersRef).child(uid).child('orderView').remove().then(() => {
             window.location.href = "index.html";
           });
         };
       };
      };
    };
  }
  else {
    ;
  };
  
});

function load(){
  document.querySelector('.body').style.overflow = "hidden";
  setTimeout(function(){
    document.querySelector('.loader').style.display = "none";
    //SETUP CHECK//
    auth.onAuthStateChanged((user) => {
      if (user) {
        var uid = user.uid;
        var userInfoRef = db.ref("users").child(uid).child("account_settings");
        userInfoRef.once("value", (snapshot) => {
          var setup = snapshot.val().setup;
          if (setup == "true") {
            setup_check();
          }
          else {
            document.querySelector('.body').style.overflow = "auto";
          }
        }).catch(function(){
          firebase.auth().signOut().then(() => {
            window.location = "/Error.html";
          })
        })
      } else {
       ;
      }
    });
    //SHOW MODAL//
    
    function setup_check() {
    document.querySelector('.new_user_modal').style.display = "flex";
    }
  },6000)

}


load();



function skip() {
  document.querySelector('.new_user_modal').style.display = "none";
    document.querySelector(".body").style.overflow = "auto";
}
function conti() {
  window.location = "Account/index.html";
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
      const showsMenu = () =>{
        const toggle = document.getElementById("navs-toggle"),
        nav = document.getElementById("navs")
        
        // Validate that variables exist
        if(toggle && nav){
            toggle.addEventListener('click', ()=>{
                nav.classList.toggle('shows-menu')
            })
        }
        else [
        ]
    }
    showsMenu();
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
      
function show() {
    document.querySelector('.contact__form').setAttribute('open','open')
    document.querySelector('.contact__form').removeAttribute('close')
}
function closeshow(){
    document.querySelector('.contact__form').removeAttribute('open')
    document.querySelector('.contact__form').setAttribute('close','close')
  
}


const swiper = new Swiper('.swiper', {

  slidesPerView:2,
  spaceBetween:50,
  fade:'true',
  grabCursor:'true',

    pagination: {
      el: '.swiper-pagination',
      clickable:true,
       dynamicBullets:true
    },
  
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    breakpoints: {
       
        320: {
          slidesPerView: 1,
          spaceBetween: 0
        },
        
        480: {
          slidesPerView: 1,
          spaceBetween: 0
        },
        600: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        
        640: {
          slidesPerView: 4,
          spaceBetween: 20
        },

        700: {
          slidesPerView: 2,
          spaceBetween: 20
        }
      }
});