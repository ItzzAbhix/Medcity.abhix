

//working with book function//
function book() {
    var select1 = document.getElementById("hour");
    var option1 = select1.options[select1.selectedIndex].text;
    var select2 = document.getElementById("min");
    var option2 = select2.options[select2.selectedIndex].text;
    var select3 = document.getElementById("day");
    var option3 = select3.options[select3.selectedIndex].text;
    var time= option1 + ":" + option2 + " " + option3;
    var input = document.getElementById("date-int");
    var textarea = document.getElementById("msg-int");
    var form = document.querySelector(".form");
    var loader = document.querySelector(".form-loader");
    var confirm = document.querySelector(".none");
    if (input.value == "") {
      show_error("Appointment Date Cannot Be Blank");
    } else {
      loader.style.display = "flex";
      var date = new Date(input.value);
      var datedate = date.getDate();
      var datemon = date.getMonth() + 1;
  
      if (datedate < 10){
        datedate = "0" + datedate;
      }
      if (datemon < 10){
        datemon = "0" + datemon;
      }
  
      var dateyear = date.getFullYear();
      var full_date = datedate + "-" + datemon + "-" + dateyear;
  
      //getting the data//
      auth.onAuthStateChanged(function(user){
        if (user){
          var uid = user.uid;
          getsetBookData(uid,time,full_date);
          setTimeout(function () {
            loader.style.display = "none";
            form.style.display = "none";
            confirme(input.value, time, textarea.value);
          }, 6000);
        }
        else {
          ;
        }
      });
  
    }
  }
  //confirme function//
  function confirme(date, time, message) {
    document.querySelector(".none").style.display = "block";
  }
  
  //working to get and set  tall data from firebase//
  
  function getsetBookData(uid,time,date){
    //get data//
    var uid = uid;
    var times = time;
    var dates = date;
    
    db.ref(usersRef).child(uid).child(account_settingsChild).once('value').then(function(snapshot){
      var user = snapshot.val();
      
      var name = user.username;
      var email = user.email;
      var pincode = user.pin_code;
      var area = user.area;
      var city = user.city;
      var house = user.house_no;
      var state = user.state;
      var phonenumber = user.phone_number; 
      var phonepi = user.phone_numberpi;
      var phone =  "+" + phonepi + " " + phonenumber;
      var add = house  + "," + area + "," + city + "," + state;
      
      //setdata//
      
      document.getElementById("name").innerHTML = name;
      document.getElementById("email").innerHTML = email;
      document.getElementById("city").innerHTML = city;
      document.getElementById("p_code").innerHTML = pincode;
      document.getElementById("add").innerHTML = add;
      document.getElementById("phone").innerHTML = phone;
      document.getElementById("date").innerHTML = dates;
      document.getElementById("time").innerHTML = times;
      
    }).catch(function(){
      window.location.reload();
    })
  }
  
  
  //confirms function//
  function confirms() {
    
    var loader = document.querySelector(".form-loader2");
    var confirm = document.querySelector(".none");
    document.querySelector('.wrapper').classList.add("sm-loader");
    loader.style.display = "flex";
    setBookData();
  }
  
  
  function setBookData(){
    var name = document.getElementById("name").innerHTML,
     email = document.getElementById("email").innerHTML,
     city = document.getElementById("city").innerHTML,
     p_code = document.getElementById("p_code").innerHTML,
     address = document.getElementById("add").innerHTML,
     phone = document.getElementById("phone").innerHTML,
     date = document.getElementById("date").innerHTML,
     time = document.getElementById("time").innerHTML;
     
     
     var token = Math.floor(Math.random() * 999999 + 1);
 if (token < 100000) {
 token = token + 100000;
 }
 
 auth.onAuthStateChanged(function(user){
     if (user){
         var uid = user.uid;
         var confirm = document.querySelector(".none");
         
         db.ref(usersRef).child(uid).child(bookChild).once('value').then(function(snapshot){
             var maxIndex = 0;
             snapshot.forEach(function(childSnapshot) {
               var childKey = childSnapshot.key;
               var childIndex = parseInt(childKey.split('_')[1]);
               if (childIndex > maxIndex) {
                 maxIndex = childIndex;
               }
             });
             var bookIndex = "Booking_" + (maxIndex + 1);
          db.ref(usersRef).child(uid).child(bookChild).child(bookIndex).set({
            name:name,
            email:email,
            city:city,
            pin_code:p_code,
            phone:phone,
            address:address,
            date:date,
            time:time,
            token:token,
            status:'Upcoming'
          }).then(function(){
            document.getElementById("date-int").value = "";
            var bookedParams = {

              name:name,
              email:email,
              city:city,
              pin:p_code,
              phone:phone,
              add:address,
              date:date,
              time:time,
              token:token

            }
            
            emailjs.send('service_6la3hvp', 'template_dnr5hfj', bookedParams, '77KLKTlxEoWRo5Yor');

            setTimeout(function(){
                confirm.style.display = "none";
                document.querySelector(".form").style.display = "block";
              window.location  = "success.html?mqfu48yrejirehreurerguyr8733r8783r38ri3vru836fruyhjefryerrerererr3hry98rurfeg=" + token;
            },6000);
          }).catch(function(){
            show_error("There was an error"+ "<br>" + "Please try again to book after reloading");
          })
        })
      }

     })
  }

