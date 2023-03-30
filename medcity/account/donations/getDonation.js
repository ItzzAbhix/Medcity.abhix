function startService(){
    auth.onAuthStateChanged(function(user){
        if (user){
            var uid = user.uid;
            db.ref(usersRef).child(uid).once('value', function(snapshot){
                if (snapshot.hasChild(donateChild)){
                    db.ref(usersRef).child(uid).child(donateChild).once('value').then(function(snasphot){
                     if (snasphot == null){
                         ;
                     }
                     else {
                      snasphot.forEach(snap => {
                         var user = snap.val().name;
                         var amount = snap.val().amount;
                         var message = snap.val().message;
         
                         if (message){
                             setData(user,amount,message);
                         }
                         else {
                             var message = "--No Message--"
                              setData(user,amount,message);
                         }
                      });
                     }
                    }).catch(function(){
                        setTimeout(function () {
                            document.querySelector(".loader").style.display = "none";
                            show_error("Sorry, We coudn't get fetch donation details. Please try again after some time.")
                        }, 2000);
                    })
                }
                else {
                    setTimeout(function () {
                        document.querySelector(".loader").style.display = "none";
                    }, 2000);
                    document.querySelector(".donations").innerHTML = "<h1 class='info'>--Sorry, it looks like you haven't made any donations yet 😢--</h1>";
                }
            })
        }
        else {
            ;
        }
    })
}


function setData(user,amount,message) {
    user= user;
    amount = amount;
    message = message;

    var html = '<div class="donation"><h2>'+amount+'</h2><h3>'+user+'</h3><p>'+message+'</p></div>';

    document.querySelector('.donations').innerHTML += html;
    setTimeout(function () {
        document.querySelector(".loader").style.display = "none";
        document.querySelector(".body").style.overflow = "auto";
      }, 3000);
}