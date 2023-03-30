function goToOrder(ordernum){
window.scrollTo(0,0)
   document.querySelector('.loader2').style.display = "flex";
   document.querySelector('.body').style.overflow  = "hidden";
   var orderNum = ordernum;

       if (orderNum != ""){
         auth.onAuthStateChanged(function(user){
            if (user){
                var uid = user.uid;
                
                db.ref(usersRef).child(uid).child(orderChild).child(orderNum).once('value').then(function(snapshot){
                   var user = snapshot.val();
                   goToOrderInner(user,orderNum,uid);
                }).catch(function(){
                  show_error("Sorry, We coudn't fetch some order details. Please try again after some time.")
                })
             }
         })
       }
       else {
          ;
       }
}




function goToOrderInner(user,orderNum,uid){
    user = user;
   var product_name = user.ProductName;
   var product_price = user.ProductPrice;
   var product_quantity = user.ProductQuantity;
   var product_finalprice = user.ProductFinalPrice;
   var product_img = user.ProductImage;
   var total_amount = user.TotalAmount;
   var order_id = user.orderId;
   var charge = user.Charge;
   var fee = user.Fee;
   var date = user.Date;
   var paymentty = user.paymentType;
   var orderAdd = user.address;
   var orderUser = user.user;

   goToOrderOuter(total_amount, product_name, order_id, charge, fee, date,product_img,product_price,product_quantity,product_finalprice,paymentty,orderAdd,orderUser,orderNum,uid);

   
}


function goToOrderOuter(total_amount, product_name, order_id, charge, fee, date, product_img,product_price,product_quantity,product_finalprice,paymentty,orderAdd,orderUser,orderNum,uid){
  var paymentType;
  paymentty = paymentty;
  total_amount = total_amount;
  product_name = product_name;
  order_id = order_id;
  charge = charge;
  fee = fee;
  date = date;
   if (paymentty == "cc"){
      paymentType = "Credit Card";
   }
   else if (paymentty == "gpay"){
      paymentType = "Google Pay";
   }
   else {
      paymentType = "Paypal";
   }
   product_img = product_img;
   product_quantity = product_quantity;
   product_finalprice = product_finalprice;
   product_price = product_price;
   orderAdd = orderAdd;
   orderUser = orderUser;

   const characters ='ABCDEFGHIJKLMNOP123456789087236378227623729237922QRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < 30; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }


 db.ref(usersRef).child(uid).child('orderView').remove().then(() => {
    db.ref(usersRef).child(uid).child('orderView').set({
       [result]:orderNum
    }).then(() => {
       var para = "g378939ru98h308y4t8htihry7ebr3lijnwerjg93bj3i7feft8=" + total_amount + "&ur79u9br8733397r79g3r978gbu3r8gp3yr833j8y0yr3rhy89h5y944uy984no484h=" + product_name + "&jru3380ro38r038n398309r3r3n30r83r38ry903r3y8r3=" + order_id + "&jrre9reru9r09ru49r4ru4980r4r-9yr49pr4r94r4ro4j994ur94r49r94y9uy4=" + product_quantity + "&ihr8ry8rurirur87rr7rhuufyhifnknhl7893kl3u9bjy8eu43y8r8yur3=" + product_price + "&rhere8rerey8rer09u489844478497tt9784t4784t978tt4978gt=" + product_finalprice + "&hrey8ry8rr8orh3or3pro3kre9eu9epjry38903890ri9u4094b3u43i=" + product_img + "&h3839y38ry98r8r3ry39833898y3r3r3r5975y9378y398y38853y58=" + fee + "&h8e083h303r33kbjhlfy8ky8y803hr8owgldefuhr978=" + date + "&u434y8393h3ur978f897GUIf87tgyOU7yr8999ru3rrh=" + charge + "&u4937483943y3978rbr73ruyoey8rereur9433u9343434u=" + paymentType + "&749t7gbere908ryer08rhr830r8ru8u8y947854uiyr=" + orderAdd + "&h8rery9898558uyreeureourerereuorereur455545ferettt=" + orderUser + "&48348y8r8r89rrhgr8gr9ghrgu8rog8rhg85ry890y448904yt497g479g9779re79grg79g9r779g79g9890287893rggorg9r97r93r73rg793r973r7893r793r737r8937r3r73789r3t7r_end=" + result;
    console.log(para)
       var url = "Order.html?" + para;
    setTimeout(function() {
       window.location.href = url;
    },2000)
    }).catch(() =>{
    show_error("Sorry, We coudn't set up few things before taking you to your order page. Please try again after some time.")
    });
 }).catch(() => {
   show_error("Sorry, We coudn't set up few things before taking you to your order page. Please try again after some time.")
 })


}