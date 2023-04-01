document.addEventListener('DOMContentLoaded', () => {
document.querySelector('.body').style.overflow = 'auto';
    var pageLoaded = document.referrer;

    if (pageLoaded.indexOf('/securecheckout/') !== -1){
       setNumber();
    }
    else if(pageLoaded.indexOf('/securecheckout/') !== -1 && pageLoaded.indexOf('/securecheckout/gpay') !== -1){
        setNumber();
    } 
    else if(pageLoaded.indexOf('/securecheckout/') !== -1 && pageLoaded.indexOf('/securecheckout/paypal') !== -1){
       setNumber();
    }
    else {
       auth.onAuthStateChanged(function(user){
         if (user){
            setNumber()
            var uid = user.uid;
            window.location.href = "../medcity/?urhrtgyyehuothurt98c49y98h5475897u460y8984y9r8h08y4rp54n302yhr4ue898y49334890r494hf8f0fey=" + uid + "&ewuewu8h9ry84y89y34978fu4t93yt78yh5uorere43443eed3=true";
         }
         else {
            ;
         }
       })
    }
});


function setNumber(){
    var url = window.location.search;
    var newUrl = new window.URLSearchParams(url);
    var num = newUrl.get('yerur9grrbrowuwouir9r85rbhhy87587g875g587g58g6748t4tiu4th847trgvri5tg48t74t4t87g85y48t7btfc87y48b4r833ub3uy83tbytty8g37tb84t44y8t42y878g4tuy38tb4897ffb3789r089bh3fiebyerpjeb');

    if (num != ""){
        document.querySelector('.id').innerHTML = num;
    }
    else {
        ;
    }

}

document.querySelector('.return-button').addEventListener('click', () => {
    window.location = "../medcity/";
})