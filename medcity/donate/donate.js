function donate(){

    var amount = document.querySelector('.amount-i');
    var name = document.querySelector('.name-i');
    var message = document.querySelector('.msg');

    if (amount.value == "₹" || name.value == ""){
        document.querySelector('.error-div').style.right = "10px";
        setTimeout(function(){
            document.querySelector('.error-div').style.right = "-100%";
        },10000)
    }
    else if (message.value != "") {
        var amt = amount.value;
        var names = name.value;
        var msg = message.value;
       donateSet(amt,names,msg);
    }
    else {
        var amt = amount.value;
        var names = name.value;
        donateSet2(amt,names)
    }

}

function donateSet(amt,names,msg) {

   var name = names;
var  amount = amt;
var message = msg;



        firebase.auth().onAuthStateChanged(function(user){
            if (user){
                var uid = user.uid;

                db.ref(usersRef).child(uid).child(donateChild).once('value',function(snapshot){
                    var user = snapshot.val();
                    var numDonations = snapshot.numChildren();
                    var newDonationIndex = "donation_" + (numDonations + 1)

                    db.ref(usersRef).child(uid).child(donateChild).child(newDonationIndex).set({
                       name:name,
                       amount:amount,
                       message:message 
                    }).then(function(){
                        document.querySelector('.msg').value = "";
                        document.querySelector('.amount-i').value = "₹10";
                        window.location.href = "Donated.html?firebaeshyreipternlrbIOHEgiyerholerrererhouiryhouIUHUAUOhouurerbkuroeroName=" + name + "&firebajrererjrieUGUydoheuoreror-rioehpirhrheoreru9oouUIAHOI9golaPUJPOJpijpOIhoHOugiAmount=" + amount;
                    }).catch(function(){
                        show_error("Opps...There was an error. Please reload and try again")
                    })
                }).catch(function(){
                    window.location.reload();
                })
            }
        })
    
   
}


function donateSet2(amt,names){

    var name = names;
    var  amount = amt;
   
    firebase.auth().onAuthStateChanged(function(user){
        if (user){
            var uid = user.uid;

            db.ref(usersRef).child(uid).child(donateChild).once('value',function(snapshot){
                var user = snapshot;
                var numDonations = user.numChildren();
                var newDonationIndex = "donation_" + (numDonations + 1)

                db.ref(usersRef).child(uid).child(donateChild).child(newDonationIndex).set({
                   name:name,
                   amount:amount,
                }).then(function(){
                    document.querySelector('.msg').value = "";
                        document.querySelector('.amount-i').value = "₹10";
                   window.location.href = "Donated.html?firebaeshyreipternlrbIOHEgiyerholerrererhouiryhouIUHUAUOhouurerbkuroeroName=" + name + "&firebajrererjrieUGUydoheuoreror-rioehpirhrheoreru9oouUIAHOI9golaPUJPOJpijpOIhoHOugiAmount=" + amount;
                }).catch(function(){
                    show_error("Opps...There was an error. Please reload and try again")
                })
            }).catch(function(){
                window.location.reload();
            })
        }
    })
}