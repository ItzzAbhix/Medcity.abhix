var orderNumber;


function checkout(){

    var parent_div = document.querySelector('.payment');
    var payment_type = parent_div.getAttribute('payment-type');

  if (payment_type == 'cc'){


    //Working Wih The Credit Card Option//

    var creditNo = document.querySelector('.ccn');
    var creditCvv = document.querySelector('.ccv');
    var creditName = document.querySelector('.cn');
    var creditD1 = document.querySelector('.ddl1');
    var creditD2 = document.querySelector('.ddl2');
    var creditD1value = creditD1.options[creditD1.selectedIndex].value;
    var creditD2value = creditD2.options[creditD2.selectedIndex].value;

    if (creditNo.value == "" || creditCvv.value == "" || creditName.value == ""){
        var inputs = document.querySelectorAll('.int');

        inputs.forEach(int => {
          
               if (int.value == ""){
                   var who = int.parentElement.querySelector('.title').innerHTML;
                   show_error(who + "Cannot Be Empty");
               }
           
        })
        
    }
    else if (creditNo.value.length < 16 && creditCvv.value.length < 3) {
        show_error("Credit Card Number Cannot Be Less Than 16 And The Cvv Code Cannot Be Less Than 3.")
    }
    else if (creditNo.value.length < 16) {
        show_error("Credit Card Number Cannot Be Less Than 16.")
    }
    else if (creditCvv.value.length < 3) {
        show_error("The Cvv Code Cannot Be Less Than 3.")
    }
    else if (creditD1value == "00" && creditD2value == "00"){
        show_error("Expiry Date Cannot Be 00/00");
    }
    else if (creditD1value == "00"){
        show_error("Expiry Date Cannot Be 00/" + creditD2value);
    }
    else if (creditD2value == "00"){
        show_error("Expiry Date Cannot Be " + creditD1value + "/00");
    }
    else {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                UserUid = user.uid;
                     WorkForCreditor(UserUid)

            } else {
              ;
            }
          });
    }

  }
};

function gpay(){
    document.querySelector(".loader").style.display = "flex";
    document.querySelector(".body").style.overflow = "hidden";
    setTimeout(function () {
      document.querySelector(".loader").style.display = "none";
      document.querySelector(".body").style.overflow = "auto";
      window.location = "gpay";
    }, 3000);
}

function paypal(){
    document.querySelector(".loader").style.display = "flex";
    document.querySelector(".body").style.overflow = "hidden";
    setTimeout(function () {
      document.querySelector(".loader").style.display = "none";
      document.querySelector(".body").style.overflow = "auto";
      window.location = "paypal";
    }, 3000);
}


function WorkForCreditor(UserUid){
    setTimeout(function(){
        CheckoutLoad();
    },1500)

    firebase.auth().onAuthStateChanged(function(user){
        if (user){
            UserUid = user.uid;
            getDbData2(UserUid)
        }
        else {
            ;
        }
    })
}

function CheckoutLoad() {
    document.querySelector("body").style.overflow = "hidden";
    document.querySelector(".checkoutLoader").style.display = "flex";
}


function getDbData2(UserUid){
    
    db.ref(usersRef).child(UserUid).child(checkoutChild).once('value').then(function(snapshot){
        
        var userData = snapshot.val();
        getCheckData(userData);
        
    }).catch(function(){
        show_error("Oops..There was an error. No Money was deducted" + "<br>" + "Please reload or logout and login, then try again.")
    })
    
}
function getCheckData(userData) {  
    var productname = userData.name;
    var productprice = userData.price;
    var productimg = userData.img;
    var charge = userData.Charge;
    var fee = userData.Fee;
    var finalprice = userData.FinalPrice;
    var productquantity = userData.quantity;
    var tAmount = userData.totalAmount;
    var paymenttp = userData.paymentType;
    var  orderUser = userData.orderUser;
    var  orderAdd = userData.orderAddress;

    SetOrderDataForCreditor(productname,productprice,productimg,productquantity,tAmount, fee, charge, finalprice, UserUid,paymenttp,orderUser,orderAdd);
}
function SetOrderDataForCreditor(productname,productprice,productimg,product_quantity,tAmount, fee,charge,finalprice,UserUid,paymenttp,orderUser,orderAdd) {
    //Fetch Data//
    var totalAmount = tAmount,
         fEE = fee,
         cHarge = charge,
         finalPrice = finalprice,
         name = productname,
         quantity = product_quantity,
         price = productprice,
         img = productimg,
         paymentTy = paymenttp,
         orderAdd = orderAdd,
         orderUser = orderUser;
//Set Data//
SetOrderData(totalAmount, finalPrice, name, quantity, price,img,fEE,cHarge,UserUid,paymentTy,orderAdd,orderUser);
}

function SetOrderData(totalAmount, finalPrice, name, quantity, price, img, fEE, cHarge,UserUid,paymentTy,orderAdd,orderUser) {
    
    db.ref(usersRef).child(UserUid).child(orderChild).once("value", function(snapshot) {
       var maxIndex = 0;
       snapshot.forEach(function(childSnapshot) {
         var childKey = childSnapshot.key;
         var childIndex = parseInt(childKey.split('_')[1]);
         if (childIndex > maxIndex) {
           maxIndex = childIndex;
         }
       });
       newOrderIndex = "Order_" + (maxIndex + 1);
       orderNumber = Math.floor(Math.random() * 10000000) + 1 ;
       SetOrderDataInner(newOrderIndex,orderNumber);
      }).catch(function(){
        show_error("We coudn't fetch some details to place the order. No money was deducted." + "<br>" + "Please reload or logout and login, then try again.")
      })

      function SetOrderDataInner(newOrderIndex,orderNumber){
    var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
    
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; // January is 0!
    var yyyy = today.getFullYear();
    var monthNumber = today.getMonth();
    
    if(dd<10) {
    dd = '0'+dd;
    } 
    
    if(mm<10) {
    mm = '0'+mm;
    } 
    var monthName = monthNames[monthNumber];
    const now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let ampm = hours >= 12 ? 'PM' : 'AM';
hours = hours % 12;
hours = hours ? hours : 12;
minutes = minutes < 10 ? '0' + minutes : minutes;
const currentTime = hours + ':' + minutes + ' ' + ampm;
    var full_date = dd + ' ' + monthName + ' ' + yyyy + '  ' + currentTime;

    
    db.ref(usersRef).child(UserUid).child(orderChild).child(newOrderIndex).set({
        ProductName:name,
        ProductPrice:price,
        ProductQuantity:quantity,
        ProductImage:img,
        ProductFinalPrice:finalPrice,
        Charge:cHarge,
        Fee:fEE,
        TotalAmount:totalAmount,
        Date:full_date,
        orderId:orderNumber,
        paymentType:paymentTy,
        user:orderUser,
        address:orderAdd
        
        
    }).then(function(){
        auth.onAuthStateChanged(function(user){
            if (user){
                var uid = user.uid;
                checkIfType(uid,orderNumber)
            }
        })
     
    }).catch(function(){
        show_error("Oops..There was an error. No Money was deducted" + "<br>" + "Please reload or logout and login, then try again.")
    })
}

}

function checkIfType(uid,orderNumber){
    db.ref(usersRef).child(uid).child(checkoutChild).once('value').then(function(snapshot){
        
        var type = snapshot.val().paymentType;
        
        if (type == 'Credit Card'){  
            db.ref(usersRef).child(uid).child(checkoutChild).remove().then(() => {
                setTimeout(function () {
                    document.querySelector(".checkoutLoader").style.display = "none";
                    document.querySelector(".body").style.overflow = "auto";
                   window.location.href = "orderconfirmed?yerur9grrbrowuwouir9r85rbhhy87587g875g587g58g6748t4tiu4th847trgvri5tg48t74t4t87g85y48t7btfc87y48b4r833ub3uy83tbytty8g37tb84t44y8t42y878g4tuy38tb4897ffb3789r089bh3fiebyerpjeb=" + orderNumber;      
                    document.querySelector('.ccn').value ="";
                    document.querySelector('.ccv').value = "";
                    document.querySelector('.cn').value = ""; 
                    document.querySelector('.ddl1').value = "01" 
                    document.querySelector('.ddl2').value = "01" ;
    
    
                }, 8000);
            }).catch(function(){
                show_error("We coudn't clear up few things before leaving. But your order was placed." + "<br>" + "You can leave this page now");
            })
        }
        else {
            db.ref(usersRef).child(uid).child(checkoutChild).remove().then(() => {
                setTimeout(function(){
                      window.location.href = "orderconfirmed?yerur9grrbrowuwouir9r85rbhhy87587g875g587g58g6748t4tiu4th847trgvri5tg48t74t4t87g85y48t7btfc87y48b4r833ub3uy83tbytty8g37tb84t44y8t42y878g4tuy38tb4897ffb3789r089bh3fiebyerpjeb=" + orderNumber;      
                  },8000)
            }).catch(function(){
                show_error("We coudn't clear up few things before leaving. But your order was placed." + "<br>" + "You can leave this page now");
            })
        }
        
    }).catch(function(){
        show_error("Oops...There was an error. You order was made but we coudn't take your to our success page." + "<br>" + "You can leave from here");
    })
}