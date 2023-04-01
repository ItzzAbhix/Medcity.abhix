function del(){
    document.querySelector('.modal2').style.display = 'flex';document.querySelector('.body').style.overflow = 'hidden';window.scrollTo(0,0)

    //Set Email//

    auth.onAuthStateChanged(function(user){
        if (user){
            const email = user.email;
            document.querySelector('#email-popup2').innerHTML =  "'"+  " " + email + " " + "'";
        }
        else {
            ;
        };
    });
};

function del_par(){
    var got_email = document.querySelector('.e-i-popup2').value;

    if (got_email == ""){
        show_error("Please Type You Account Email First");
    }
    else {
        auth.onAuthStateChanged(function(user){
            if(user){
                const email = user.email;
                if (got_email == email){
                    document.querySelector('.popup2').style.top = '-100%';
                    setTimeout(function(){
                      document.querySelector('.popup2').style.display = "none";
                    },2000);
                    document.querySelector('.popup3').style.bottom = "40%";
                }
                else {
                    show_error("The Email You Typed And The Acount Email Does Not Match")
                }
            }
        })
    }
};



function reset(){
    document.querySelector('.e-i-popup2').value = "";
    document.querySelector('.popup3').style.bottom = "-100%";
    document.querySelector('.popup2').style.top = '20%';
    document.querySelector('.p3-pi').value = "";
    document.querySelector('#email-popup2').innerHTML = "your email";
    document.querySelector('.popup2').style.display = "block";
}


function del_con_par(){
    var pass = document.querySelector('.p3-pi');
    if (pass.value == ""){
        show_error("Please Type Your Account Password First")
    }
    else {
        auth.onAuthStateChanged(function(user){
            if (user){
               const email = user.email;
               const passed = pass.value;
               
               var credential = firebase.auth.EmailAuthProvider.credential(email, passed);

               if (credential){
                user.reauthenticateWithCredential(credential).then(() => {
                    user.delete().then(() => {
                        const deleteParam  = {
                            email:email
                        }
                        var uid = user.uid;
                        emailjs.send('service_pqebtnp', 'template_e3dx52m', deleteParam, 'PMsD7_wv3AgKo5nsQ');
                        setTimeout(function(){
                            db.ref(usersRef).child(uid).remove().then(() => {
                                window.location = "/index.html?why=goodbye";
                            })
                        },2000)
                    })
                }).catch(function(){
                    show_error("Wrong Password")
                })
               }
               else {
                show_error("Sorry, There Was An Error. Please Try Again");
                document.querySelector('.modal2').style.display = "none";
                reset();
               }

            }
            else {
                ;
            }
        })
    }
}