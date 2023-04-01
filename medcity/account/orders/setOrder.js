
function setOrderData(product_name,product_price,product_quantity,order_id,order_date,product_img,orderKey){
    product_name = product_name;
    product_price = product_price;
    product_img = product_img;
    order_id = order_id;
    order_date = order_date;
    product_quantity = product_quantity;
   var orderKeytoSring = orderKey.toString();
   var orderKeyStringed = "'" + orderKeytoSring + "'";

    
    var ordersDiv = document.querySelector('.orders-div');
    var orderIdDiv = '<div class="order-id"><h3>Order Id:</h3><h3>'+ order_id+'</h3></div>';
    var orderDateDiv = '<div class="order-date"><h3>Order Date:</h3><h3>'+ order_date+'</h3></div>';
    var topDiv = '<div class="top">' + orderIdDiv+''+orderDateDiv+'</div>';
    var line = '<div class="line"></div>';
    var orderNameDiv = '<div class="order-name"><h3>'+product_name+'</h3></div>';
    var orderQuantityDiv = '<div class="order-quantity"><h3>Quantity: </h3><h3>x'+product_quantity+'</h3></div>';
    var orderPriceDiv = '<div class="order-price"><h3>Total Price: </h3><h3>₹'+product_price+'</h3></div>';
    var orderImgDiv = '<div class="order-img"><img src='+product_img+'></div>';
    var buttonRedirect = '<button class="redirecter" onclick="goToOrder('+orderKeyStringed+')"><i class="fa-solid fa-arrow-up-right-from-square"></i></button>';
    var columnDiv = '<div class="column">'+orderNameDiv+''+orderQuantityDiv+''+orderPriceDiv+''+buttonRedirect+'</div>';
    var flexDiv = '<div class="flex">'+columnDiv+''+orderImgDiv+'</div>';
    var html = '<div class="order '+orderKey+'">'+topDiv+''+line+''+flexDiv+'</div>';
    setOrderInner(ordersDiv, html);
}



function setOrderInner( ordersDiv,html) {
    
    if (html != null){
        ordersDiv.innerHTML += html;
        setTimeout(function(){
            document.querySelector('.loader').style.display = "none";
            document.querySelector('.body').style.overflow = "auto";
        },3000);
    }
    else {
        window.location = "/error";
    }
}

