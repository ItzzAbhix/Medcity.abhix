var urlParams = new URLSearchParams(window.location.search);
var token = urlParams.get("mqfurfeg");
  document.querySelector(".num").innerHTML = token;


function goback(){
  history.back();
}
