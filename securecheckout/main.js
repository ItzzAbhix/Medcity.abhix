var timeError1 , timeError2;

function show_error(error){
  var erorr_div = document.querySelector('.error-div');
  var error_p = erorr_div.querySelector('.error .sub p');

   resetError(erorr_div,error_p);

 timeError1 =  setTimeout(function(){
   error_p.innerHTML = error;
   erorr_div.style.zIndex = "999999";
   erorr_div.style.right = "10px";
  
  },500)

 timeError2= setTimeout(function(){
     error_p.innerHTML = "eerorr";
     erorr_div.style.right = "-100%";
     erorr_div.style.zIndex = "1";
  },10000)
 }

 function resetError(erorr_div,error_p){
  clearTimeout(timeError1);
  clearTimeout(timeError2);
   erorr_div.style.right = "-100%";
   error_p.innerHTML = "eerorr";
 }


function startMedcity(){
  var pageLoaded = document.referrer;
  if (pageLoaded.indexOf("/product_detail/") !== -1){
    startMedcityServices();
  }
  else {
    
    firebase.auth().onAuthStateChanged((user) => {
      if (user){
        var uid = user.uid;
    window.location.href= "../medcity/?errhheurherruhiruereitrtrtrtwr4r4rh98y998hhre333d3r3r3reyrgeyre8yruyreyrer=" + uid + "&ureregiruugyyuT867fujeuru9jd;wehdwoejffoueholrn3ro38yr3rb3uyuy6g8uibhrer=true";
    }
    else {
      ;
    }
    })
  }

}


function startMedcityServices(){

  const parentDiv = document.querySelector('.payment');
  var paymentp = parentDiv.getAttribute('payment-type');
  
  firebase.auth().onAuthStateChanged(function(user){
    if (user){
        UserUid = user.uid;
        db.ref(usersRef).child(UserUid).child(checkoutChild).update({
          paymentType:paymentp
        }).catch(function(){
          show_error("We coudn't setup few things." + "<br>" + "Please reload or logout and login, then try");
        })
    }
    else {
        ;
    }
  });
  //Now Work
  
   if (paymentp == 'cc'){
     document.querySelector('.btn-checkout').style.display = "block";
   }
   else {
     document.querySelector('.btn-checkout').style.style.display = "none";
   }






//PaymentType//

const paymentdivs = document.querySelectorAll(".payment__type");
var paymentype = "";

// attach a click event listener to each div
paymentdivs.forEach(div => {
  div.addEventListener("click", e => {
    // remove the active class from all divs
    paymentdivs.forEach(d => d.classList.remove("active"));
    // add the active class to the clicked div
    e.target.classList.add("active");
    paymentype = e.target.getAttribute("class");
    var attributess = e.target.attributes;
   for (var i = 0; i < attributess.length; i++) {
  if (attributess[i].nodeName != "class") {
    var payment_type  = attributess[i].nodeName;

    // get the parent div
    const parentDiv = document.querySelector('.payment');
    const attributes = parentDiv.attributes;
    // remove any previously added classes
    for (let i = 0; i < attributes.length; i++) {
      if (attributes[i].name !== "class") {
        parentDiv.removeAttribute(attributes[i].name);
      }
    }
    // add class with the same name as the clicked div
    parentDiv.setAttribute('payment-type',payment_type);
    var paymentp = parentDiv.getAttribute('payment-type');

    if (paymentp == 'cc'){
      document.querySelector('.btn-checkout').style.display = "block";
    }
    else {
      document.querySelector('.btn-checkout').style.display = "none";
    }
    if (payment_type == 'src'){
      parentDiv.setAttribute('payment-type', 'cc');
    }
  }
}
changepayment();
  });
});
  
//Credit card validation//
var creditinput = document.querySelector('.ccn')
creditinput.addEventListener("keyup", (e) => {

      const valuesOfInput = e.target.value.replaceAll(" ", "");

      if (e.target.value.length > 14) {
          e.target.value = valuesOfInput.replace(/(\d{4})(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3 $4");
          creditinput.value = valuesOfInput.replace(/(\d{4})(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3 $4");
      } else if (e.target.value.length > 9) {
          e.target.value = valuesOfInput.replace(/(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3");
          creditinput.value = valuesOfInput.replace(/(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3");
      } else if (e.target.value.length > 4) {
          e.target.value = valuesOfInput.replace(/(\d{4})(\d{0,4})/, "$1 $2");
          creditinput.value = valuesOfInput.replace(/(\d{4})(\d{0,4})/, "$1 $2");
      } else {
          creditinput.value = valuesOfInput
      }
});
var  creditname = document.querySelector('.cn');
creditname.addEventListener("keyup", function(){
creditnv = creditname.value;
    creditname.value = creditnv.toUpperCase();
  
});

//Show And Hide Working//
function changepayment(){
  const parentDiv = document.querySelector('.payment');
var paymentp = parentDiv.getAttribute('payment-type');

 if (paymentp == 'cc'){
  document.querySelector(".payment__cc").style.display = "block";
  document.querySelector(".payment-paypal").style.display = "none";
  document.querySelector(".payment-gpay").style.display = "none";
  firebase.auth().onAuthStateChanged(function(user){
    if (user){
        UserUid = user.uid;
        db.ref(usersRef).child(UserUid).child(checkoutChild).update({
          paymentType:paymentp
        }).catch(function(){
          show_error("We coudn't setup few things." + "<br>" + "Please reload or logout and login, then try");
        })
    }
    else {
        ;
    }
  })
}
if (paymentp == 'paypal'){
  document.querySelector(".payment__cc").style.display = "none";
  document.querySelector(".payment-paypal").style.display = "flex";
  document.querySelector(".payment-gpay").style.display = "none";
  firebase.auth().onAuthStateChanged(function(user){
    if (user){
        UserUid = user.uid;
        db.ref(usersRef).child(UserUid).child(checkoutChild).update({
          paymentType:paymentp
        }).catch(function(){
          show_error("We coudn't setup few things." + "<br>" + "Please reload or logout and login, then try");
        })
    }
    else {
        ;
    }
  })
 };
 if (paymentp== 'gpay'){
  document.querySelector(".payment__cc").style.display = "none";
  document.querySelector(".payment-paypal").style.display = "none";
  document.querySelector(".payment-gpay").style.display = "flex";
  firebase.auth().onAuthStateChanged(function(user){
    if (user){
        UserUid = user.uid;
        db.ref(usersRef).child(UserUid).child(checkoutChild).update({
          paymentType:paymentp
        }).catch(function(){
          show_error("We coudn't setup few things." + "<br>" + "Please reload or logout and login, then try");
        })
    }
    else {
        ;
    }
  })
 };
}

startMedcityServices2();

}