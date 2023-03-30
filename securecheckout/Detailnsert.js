function startMedcityServices2(){
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        var UserUid = user.uid;

        db.ref(usersRef).child(UserUid).child(checkoutChild).once("value", function(snapshot) {
          if (!snapshot.exists()) {
            window.location = "../Medcity/index.html";
          } else {
            billWorking();
          }
        });
    } else {
      ;
    }
  });



//Bill Working//

function billWorking() {

  //Firebase Code//
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        var UserUid = user.uid;
      setDbData(UserUid);
    } else {
      ;
    }
  });

  function setDbData(UserUid) {
    var uid = UserUid;
db.ref(usersRef).child(uid).child(checkoutChild).once('value').then(function(snapshot){
    var details = snapshot.val();
    GetDetails(details);
}).catch(function(){
  show_error("Oops..There was an error while fetching product details" + "<br>" + "Please reload or logout and login again, then try")
})
  };

function GetDetails(details) {
    var name = details.name;
    var price = details.price;
    var img = details.img;
    var quantity = details.quantity;
    var date = details.Date;

    SetDetails(name, price, quantity,img);
};

function SetDetails(name, price, quantity, img) {
    var pname = name,
    Pprice = price,
    pquantiy = quantity,
    pimg = img;
    document.querySelector('.item__title').innerHTML = pname;
    document.querySelector('.item__price').innerHTML = Pprice;
    document.querySelector('.item__quantity').innerHTML = "Qunatity: " + pquantiy;
    document.querySelector('.item__image img').src = pimg;

    SetFinalBillDetails(price,quantity);

}

function SetFinalBillDetails(price,quantity) {
    //Set Delivery Charges//
    var delivery_charge = 15;
     document.querySelector('.charges').innerHTML = "Rs." + delivery_charge;

     //Set Platform Fee//
     var plat_fee = 4
     document.querySelector('.fee').innerHTML = "Rs." + plat_fee;

     //Set Final Product Price//
     var product_quantity = quantity;
     var product_price =  price;
         //Product Price Spliting//
            let splitIndex = 0;
           for (let i = 0; i < product_price.length; i++) {
          if (!isNaN(parseInt(product_price[i]))) {
             splitIndex = i;
              break;
                }
                 }
                let splitproductprice = product_price.slice(splitIndex);

     
     var final_product_price = Math.floor(product_quantity * splitproductprice);

     document.querySelector('.price').innerHTML = "Rs." + final_product_price;
   
     //Set Total Bill
     var charge = delivery_charge,
      fee = plat_fee,   
      finalprice = final_product_price;

     var total_amount = charge + fee + finalprice;

     document.querySelector('.total').innerHTML = "Rs." + total_amount;

     
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
      var UserUid = user.uid;

      db.ref(usersRef).child(UserUid).child(checkoutChild).update({
        totalAmount:total_amount,
        Charge:charge,
        Fee:fee,
        FinalPrice:finalprice
      }).catch(function(){
        show_error("Oops..There was an error while fetching some product details." + "<br>" + "Please reload or logout and login again, then try");
      })

  } else {
    ;
  }
});
      
}

//Address Setting//

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        var UserUid = user.uid;
      getDbData(UserUid);
    } else {
      ;
    }
  });
  
function getDbData(UserUid) {
db.ref(usersRef).child(UserUid).child(account_settingsChild).once('value').then(function(snapshot) {

    var user = snapshot.val();
    GetUserDeails(user,UserUid);

}).catch(function(){
  show_error("We're sorry, eee but we couldn't fetch your account details right now." + "<br>" + "Please reload or logout and login again, then try")
})

};

function GetUserDeails(user,UserUid) {
    var username = user.username;
    var city = user.city;
    var pincode = user.pin_code;
    var ustate = user.state;
     var area = user.area;
     var house_no = user.house_no;

     if (username == "" || city == "" || ustate == "" || pincode == "" || area == "" || house_no == ""){
      show_error("We're sorrrrey, but we couldn't fetch your account details right now." + "<br>" + "Please reload or logout and login again, then try")
     }
     else {
      document.querySelector('.user__name').innerHTML = username;
      var addHTML = house_no + ", " + area + ", " + "<br>" + city + ", " + "<br>" + ustate + "<br>" + pincode;
      document.querySelector('.user__address').innerHTML = addHTML;
      
      db.ref(usersRef).child(UserUid).child(checkoutChild).update({
        orderUser:username,
        orderAddress:addHTML
      }).then(function(){
        setTimeout(function(){
          document.querySelector('.body').style.overflowY = "auto";
          document.querySelector('.loader').style.display = "none";
        },3000)
      })

 }
}
};

}