var cards = document.querySelectorAll('.card');

for (const card of cards) {
       card.addEventListener("click", function () {
              if ($(cards).prop('.selected', false)) {
                     cards.forEach(cards => cards.removeAttribute("selected"));
              }
              this.setAttribute("class", "selected");
             var html_h3 = document.querySelector(".selected .column h3").innerHTML,
              html_img = document.querySelector(".selected .column img").src,
              html_price = document.querySelector('.selected .column .cost h4').innerHTML,
              html_review = document.querySelector('.selected .column .row .review .rate').innerHTML;
              var loc = window.location.pathname;
              var dir = loc.split('/');
              var la_dir = dir[(dir.length - 2)];
              setSession(html_h3,html_img,html_price,html_review,la_dir);
              window.location.href = "../../product_detail/";
       });
}

/*Product*/
document.addEventListener('DOMContentLoaded', function () {
       var loc = window.location.pathname;
       var di = loc.substring(0, loc.lastIndexOf('/'));
       console.log(di)
       if (di == "/medcity/product_detail") {
              getSession();
       }
       else {
              console.log('ewee')
       }
})

function setSession(h3,img,price,review,dir){
       localStorage.setItem("h3",h3);
       localStorage.setItem("img",img);
       localStorage.setItem("price",price);
       localStorage.setItem("r",review);
       localStorage.setItem("dir",dir)
}

function getSession() {
       
       var h3 = localStorage.getItem("h3"),
       img = localStorage.getItem("img"),
       price = localStorage.getItem("price"),
       review = localStorage.getItem("r"),
       dir = localStorage.getItem("dir");
       
       
       if (h3 == "" || img == "" || price == "" || review == "") {
              console.error("error");
       } else {
              setAll(h3,img,price,review,dir);
       }
              
}
function setAll(h3, img, priec, review,dir) {
       document.querySelector('.product-title h1').innerHTML = h3;
       document.querySelector('.left-div img').src = img;
       document.querySelector('.location-h5').innerHTML = dir;
       document.querySelector('.price-div h4').innerHTML = priec;
       document.querySelector('.d-type').innerHTML = dir;
       if (review == "") {      
              document.querySelector('.d-rate').innerHTML = "No Ratings";
       }
       else {
              document.querySelector('.d-rate').innerHTML = review;
       }


}

