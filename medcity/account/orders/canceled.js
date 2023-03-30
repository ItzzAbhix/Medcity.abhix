document.addEventListener('DOMContentLoaded', () => {
    var pageLoaded = document.referrer;
  
    if (pageLoaded.indexOf('/Orders/') !== -1 && pageLoaded.indexOf('/Orders/Order.html') !== -1) {
     startPage();
    }
    else {
      auth.onAuthStateChanged(function(user){
        if (user){
          var uid = user.uid;
        window.location.href = "../../index.html?ugujhofhrurhugourghu99uhuoh9e8r9r8reg79rerg8e7re789rere9rtifrrgugrukrl4t4uot747ytjyf67ufeole9pf9p="  + uid + "&huhr98ry48thohiuthtotuyreru=true"; 
        }
        else {
          ;
        }
      })
    }
  })
  
  function load() {
    document.querySelector(".body").style.overflow = "hidden";
    setTimeout(function(){
      document.querySelector(".loader").style.display = "none";
      document.querySelector(".body").style.overflow = "auto";
    },6000)
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
         erorr_div.style.right = "-100%";
         erorr_div.style.zIndex = "1";
      },10000)
     };
  
  