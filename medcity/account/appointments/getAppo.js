function startService(){

auth.onAuthStateChanged(function(user){
    if (user){
        var uid = user.uid;
        db.ref(usersRef).child(uid).once('value',function(snasphot){
            if (snasphot.hasChild(bookChild)){
                db.ref(usersRef).child(uid).child(bookChild).once('value',function(snapshot){
                    snapshot.forEach(shot => {
                        var userKey = shot.key;
                        var userDb = shot.val();
                        var userKeyStringed = userKey.toString();
                        var userKeyFinal = "'" + userKeyStringed + "'";
                        var name = userDb.name;
                        var phone = userDb.phone;
                        var status = userDb.status;
                        var email = userDb.email;
                        var address = userDb.address;
                        var time = userDb.time;
                        var token = userDb.token;
                        var date = userDb.date;

                        if (name == null || phone == null || status == null || email == null || address == null || token == null || time == null || date == null) {
                            console.log("null db")
                        }
                        else {
                            var html = '<div class="appointment" '+status.toLowerCase()+'><div class="appointment-icon"><i class="fas fa-user"></i></div><div class="appointment-details"><h2>Name: '+name+'</h2><p>Phone: '+phone+'</p><p> Email: '+email+'</p><p class="address"> Address: '+address+'</p><p> Date: '+date+'</p><p> Time: '+time+'</p><h3>Status: '+status+'</h3><h3>Token: '+token+'</h3></div><div class="appointment-actions"><button class="edit-btn" onclick="editAppo('+userKeyFinal+')">Reschedule <i class="fas fa-edit"></i></button><button class="delete-btn" onclick="deleteAppo('+userKeyFinal+')">Cancel <i class="fas fa-trash"></i></button></div></div>';
                            document.querySelector('.appointments').innerHTML += html;
                            setTimeout(function(){
                                document.querySelector('.loader').style.display = "none";
                                document.querySelector('.body').style.overflow = "auto";
                            },2000);
                        }
                    });
                })
            }
            else {
                document.querySelector('.appointments').innerHTML = "<h1 class='info'>--No Appointments Booked Yet--</h1>"
                setTimeout(function(){
                    document.querySelector('.loader').style.display = "none";
                    document.querySelector('.body').style.overflow = "auto";
                },3000);
            }
        })
    }
});

}