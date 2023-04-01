function startPage(){
    var url = window.location.search;
    var urlParams = new URLSearchParams(url);

    if (
        urlParams.has('g378939ru98h308y4t8htihry7ebr3lijnwerjg93bj3i7feft8') &&
        urlParams.has('ur79u9br8733397r79g3r978gbu3r8gp3yr833j8y0yr3rhy89h5y944uy984no484h') &&
        urlParams.has('jru3380ro38r038n398309r3r3n30r83r38ry903r3y8r3') &&
        urlParams.has('jrre9reru9r09ru49r4ru4980r4r-9yr49pr4r94r4ro4j994ur94r49r94y9uy4') &&
        urlParams.has('ihr8ry8rurirur87rr7rhuufyhifnknhl7893kl3u9bjy8eu43y8r8yur3') &&
        urlParams.has('rhere8rerey8rer09u489844478497tt9784t4784t978tt4978gt') &&
        urlParams.has('hrey8ry8rr8orh3or3pro3kre9eu9epjry38903890ri9u4094b3u43i') &&
        urlParams.has('h3839y38ry98r8r3ry39833898y3r3r3r5975y9378y398y38853y58') &&
        urlParams.has('h8e083h303r33kbjhlfy8ky8y803hr8owgldefuhr978') &&
        urlParams.has('u434y8393h3ur978f897GUIf87tgyOU7yr8999ru3rrh') &&
        urlParams.has('u4937483943y3978rbr73ruyoey8rereur9433u9343434u') &&
        urlParams.has('749t7gbere908ryer08rhr830r8ru8u8y947854uiyr') &&
         urlParams.has('h8rery9898558uyreeureourerereuorereur455545ferettt')&& 
        urlParams.has('48348y8r8r89rrhgr8gr9ghrgu8rog8rhg85ry890y448904yt497g479g9779re79grg79g9r779g79g9890287893rggorg9r97r93r73rg793r973r7893r793r737r8937r3r73789r3t7r_end')
  
      ) {
        var newUrl = urlParams;
        startService(newUrl)
      }
      else {

       window.location = "/error";

      }


function startService(newUrl){
    newUrl = newUrl;


    //Get Data//
  var name = newUrl.get('ur79u9br8733397r79g3r978gbu3r8gp3yr833j8y0yr3rhy89h5y944uy984no484h'),
   img = newUrl.get('hrey8ry8rr8orh3or3pro3kre9eu9epjry38903890ri9u4094b3u43i'),
   price = newUrl.get('ihr8ry8rurirur87rr7rhuufyhifnknhl7893kl3u9bjy8eu43y8r8yur3'),
   qty = newUrl.get('jrre9reru9r09ru49r4ru4980r4r-9yr49pr4r94r4ro4j994ur94r49r94y9uy4'),
   id = newUrl.get('jru3380ro38r038n398309r3r3n30r83r38ry903r3y8r3'),
   total = newUrl.get('g378939ru98h308y4t8htihry7ebr3lijnwerjg93bj3i7feft8'),
   sub = newUrl.get('rhere8rerey8rer09u489844478497tt9784t4784t978tt4978gt'),
   charge = newUrl.get('u434y8393h3ur978f897GUIf87tgyOU7yr8999ru3rrh'),
   fee = newUrl.get('h3839y38ry98r8r3ry39833898y3r3r3r5975y9378y398y38853y58'),
   date = newUrl.get('h8e083h303r33kbjhlfy8ky8y803hr8owgldefuhr978'),
   type = newUrl.get('u4937483943y3978rbr73ruyoey8rereur9433u9343434u'),
   add = newUrl.get('749t7gbere908ryer08rhr830r8ru8u8y947854uiyr'),
   user = newUrl.get('h8rery9898558uyreeureourerereuorereur45');

   let newprice = price.replace("Rs.", "₹");

   var esDtae =  new Date(date);
   esDtae.setDate(esDtae.getDate() + 2);

   let hours = Math.floor(Math.random() * 12) + 1; 
let minutes = Math.floor(Math.random() * 60); 
let ampm = Math.random() < 0.5 ? 'AM' : 'PM'; 

let monthNames = [
  'January', 'February', 'March', 'April',
  'May', 'June', 'July', 'August',
  'September', 'October', 'November', 'December'
];
let monthName = monthNames[esDtae.getMonth()];

// Create a new date string with the modified date and random time
let newDate= esDtae.getDate() + ' ' + monthName + ' ' + esDtae.getFullYear() + ' ' + hours + ':' + minutes.toString().padStart(2, '0') + ' ' + ampm;

  document.querySelector('.id').innerHTML = id ;
  document.querySelector('.idd').innerHTML =  "ID: "+ id ;
  document.querySelector('.name').innerHTML =  name;
  document.querySelector('.img').src = img ;
  document.querySelector('.price').innerHTML = newprice;
  document.querySelector('.total').innerHTML = "₹"  + total;
  document.querySelector('.qty').innerHTML =  qty;
  document.querySelector('.sub-total').innerHTML = "₹" +  sub ;
  document.querySelector('.del-charges').innerHTML = "₹"  + charge;
  document.querySelector('.fee').innerHTML = "₹"  + fee ;
  document.querySelector('.date').innerHTML = date ;
  document.querySelector('.user').innerHTML = user;
  document.querySelector('.addr').innerHTML = add;
  document.querySelector('.order-pay').innerHTML = type;
  document.querySelector('.es-date').innerHTML = newDate;

  setTimeout(function(){
    document.querySelector('.loader').style.display = "none";
    document.querySelector(".body").style.overflow = "auto";
  },2000)


}

}