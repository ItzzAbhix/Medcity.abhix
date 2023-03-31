var urlParams = new URLSearchParams(window.location.search);

if (urlParams.has('mqfu48yrejirehreurerguyr8733r8783r38ri3vru836fruyhjefryerrerererr3hry98rurfeg')){

  var token = urlParams.get("mqfu48yrejirehreurerguyr8733r8783r38ri3vru836fruyhjefryerrerererr3hry98rurfeg");
    document.querySelector(".num").innerHTML = token;

}  
else {
window.location = "index.html";
}

function goback(){
  history.back();
}
