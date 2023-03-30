function deleteAppo(booking){
    booking = booking;

    document.querySelector('.cancel').style.display = "flex";

    document.querySelector('.can-can-btn').addEventListener('click', function(){
        auth.onAuthStateChanged(function(user){
            if (user){
                var uid = user.uid;
                db.ref(usersRef).child(uid).child(bookChild).child(booking).remove().then(() => {
                    document.querySelector('.cancel-popup2').style.display = "flex";
                    document.querySelector('.cancel-popup').style.display = "none";
                }).catch(() => {
                    show_error("Soory, There was an error while canceling you appointment. Please try again after some time.")
                });
            }
        });
    });


    document.querySelector('.btn-ca-con').addEventListener('click', () => {
        window.location.reload();
    });

    

}