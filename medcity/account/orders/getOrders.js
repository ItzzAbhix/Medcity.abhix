let isExecuting = false;

function getOrder(){
  auth.onAuthStateChanged(function(user){
    if (user){
       var uid = user.uid;
       getOrderOuter(uid);
    }
    else {
        ;
    }
  })
};

function getOrderOuter(uid){

  if (isExecuting) return;
  isExecuting = true;

  db.ref(usersRef).child(uid).once('value',function(snapshot){
     if (snapshot.hasChild(orderChild)){
       db.ref(usersRef).child(uid).child(orderChild).once('value', snapshot => {
         const orders = {}; // Object to store unique order keys and values
           snapshot.forEach(orderSnapshot => {
             const orderKey = orderSnapshot.key;
             const order = orderSnapshot.val();
             if (!orders[orderKey]) { 
               orders[orderKey] = order; 
             }
             else {
                throw new Error(`Duplicate order key '${orderKey}' found`);
             }
           });
           Object.keys(orders).forEach(orderKey => {
             const order = orders[orderKey];
             getOrderInner(orderKey , order);
             
           });
  })
    }
    else {
      setTimeout(function () {
        document.querySelector('.loader').style.display = "none";
      },2000);
      document.querySelector('.orders').innerHTML = "<h1 class='info'>--Sorry, it looks like you haven't purchased any products yet--</h1>";
    }
  });
}


function getOrderInner(orderKey, order){
  orderKey = orderKey;
  order = order;

  if (order != null){
    var product_name = order.ProductName;
    var product_price = order.TotalAmount;
    var product_img = order.ProductImage;
    var product_quantity = order.ProductQuantity;
    var order_id = order.orderId;
    var order_date = order.Date;
    
    setOrderData(product_name,product_price,product_quantity,order_id,order_date,product_img, orderKey);
   
  }
  else {
   window.location = "/Error.html";
  }


}







document.addEventListener('DOMContentLoaded', () => {
    getOrder();
});
