
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
 }


 function close_error(){
  document.querySelector('.error-div').style.right = "-150%";
 }

function startMedcity(){
  document.querySelector(".body").style.overflow = "hidden";
  setTimeout(function () {
    document.querySelector(".loader").style.display = "none";
    document.querySelector(".body").style.overflow = "auto";
  }, 3000);


}





function buy() {
  document.querySelector('.loader').style.display = 'flex';
  const user = auth.currentUser;
  if (user) {
      fetchdata();
  } else {
document.querySelector('.loader').style.display = 'none';
  }
}

function fetchdata(){
  var product_name = document.querySelector('.product-title h1').innerHTML;
  var product_price = document.querySelector('.price-div h4').innerHTML;
  var product_img = document.querySelector('.left-div img').src;
  var product_quantity = document.querySelector('.quantity-div select');
  var quantity = product_quantity.options[product_quantity.selectedIndex].value;
 

  //Firebase Code//
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        var UserUid = user.uid;
      setDbData(UserUid);
    } else {
      ;
    }
  });


 function setDbData(UserUid){
var uid = UserUid;

  db.ref(usersRef).child(uid).child(checkoutChild).remove().then(function () {
    db.ref(usersRef).child(uid).child(checkoutChild).set({
  
      name:product_name,
      price:product_price,
      img:product_img,
      quantity:quantity,
  
    }).then(function(){
      window.location = "../../../securecheckout/";
    }).catch(function(){
          show_error("Oops...Coudn't Set Product Details." + "<br>" + "Please Reload And Try Again");
    })
  }).catch(function(){
    show_error("Oops...Coudn't Set Product Details." + "<br>" + "Please Reload And Try Again");
})
 }
  
}


document.querySelector('.back-btn').addEventListener('click', () => {
 history.back();
})

