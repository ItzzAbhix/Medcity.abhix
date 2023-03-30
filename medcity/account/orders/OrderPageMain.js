document.addEventListener('DOMContentLoaded', () => {
  var pageLoaded = document.referrer;

  if (pageLoaded.indexOf('/Orders/') !== -1 && pageLoaded.indexOf('/Orders/index.html') !== -1) {
   startPage();
  }
  else {
    auth.onAuthStateChanged(function(user){
      if (user){
        var uid = user.uid;
        startPage();
        //window.location.href = "../../index.html?ugujhofhrurhugourghu99uhuoh9e8r9r8reg79rerg8e7re789rere9rtifrrgugrukrl4t4uot747ytjyf67ufeole9pf9p="  + uid + "&huhr98ry48thohiuthtotuyreru=true"; 
      }
      else {
        ;
      }
    })
  }
})

function load() {
    document.querySelector(".body").style.overflow = "hidden";
  }
  
  load();

  function show_error(error){
    var erorr_div = document.querySelector('.error-div');
    var error_p = erorr_div.querySelector('.error .sub p');
   
    error_p.innerHTML = error;
    erorr_div.style.zIndex = "999999";
    erorr_div.style.right = "10px";
   
    setTimeout(function(){
       error_p.innerHTML = "eerorr";
       erorr_div.style.right = "-150%";
       erorr_div.style.zIndex = "1";
    },10000)
   };


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

/*=============== REMOVE MENU MOBILE ===============*/


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



function cancelOrder(){
  document.querySelector('.modal').style.display = "flex";
  document.querySelector('.body').style.overflow = "hidden";
}

function cancelOrderFull(){
  var url = window.location.search;
  var newuRL = new URLSearchParams(url);

  if (newuRL.has('jru3380ro38r038n398309r3r3n30r83r38ry903r3y8r3')){
    var id =   newuRL.get('jru3380ro38r038n398309r3r3n30r83r38ry903r3y8r3');

    if (id == ""){
      window.location = "/Error.html";
    }
    else {
      document.querySelector('.loader2').style.display = 'flex';
      window.scroll(0,0);
    var  key = newuRL.get('48348y8r8r89rrhgr8gr9ghrgu8rog8rhg85ry890y448904yt497g479g9779re79grg79g9r779g79g9890287893rggorg9r97r93r73rg793r973r7893r793r737r8937r3r73789r3t7r_end');
      auth.onAuthStateChanged(function(user){
        if (user){
          var uid = user.uid;
          db.ref(usersRef).child(uid).child('orderView').orderByKey().equalTo(key).once('value').then(function(snapshot){
            snapshot.forEach(function(childSnapshot) {
              var child = childSnapshot.val();
              db.ref(usersRef).child(uid).child(orderChild).child(child).remove().then(() => {
              }).then(() => {
                db.ref(usersRef).child(uid).child('orderView').child(key).remove().then(() => {
                  window.location.href = "Canceled.html";
                }).catch(() => {
                  window.location.href = "Canceled.html";
                })
              }).catch(() => {
      document.querySelector('.loader2').style.display = 'none';
                show_error("Sorry, We wee unable to cancel your order. Please try again after some time.")
              })
            })

          }).catch(() => {
      document.querySelector('.loader2').style.display = 'none';
            show_error("Sorry, We wee unable to cancel your order. Please try again after some time.");
          });

        }
      })
    }
  }
  else {
    window.location = "/Error.html";
  }
}



document.querySelector('.back-btn').addEventListener('click', () => {
  history.back();
});