function editAppo(booking){
    booking = booking;

    var date = new Date();
    var dates = date.getDate();
    var month = date.getMonth();
    var input = document.querySelector(".edit-date input");
    var year = date.getFullYear();
    month = month + 1;
    dates = dates + 1;
  
    if (month < 10) {
      var month = "0" + month;
    }
    if (dates < 10) {
      dates = "0" + dates;
    }
    full_date = year + "-" + month + "-" + dates;
    input.setAttribute("min", full_date);

    document.querySelector('.edit').style.display = "flex";
    document.querySelector('.body').style.overflow = "hidden";

    document.querySelector('.edit .edit-header i').addEventListener('click', function(){
        document.querySelector('.edit').style.display = 'none';
    document.querySelector('.body').style.overflow = "auto";
    });

    document.querySelector('.re-btn').addEventListener('click', function(){

      var re_date = document.querySelector(".edit-date input");
      const parts = re_date.value.split('-'); 
      const dateObj = new Date(parts[0], parts[1] - 1, parts[2]); 
      const day = dateObj.getDate() < 10 ? '0' + dateObj.getDate() : dateObj.getDate(); 
      const month = dateObj.getMonth() + 1 < 10 ? '0' + (dateObj.getMonth() + 1) : dateObj.getMonth() + 1; 
      const outputDate = day + '-' + month + '-' + dateObj.getFullYear();

      var re_hour = document.querySelector(".edit-time #hour");
      const selectedOption = re_hour.options[re_hour.selectedIndex];
      var re_min = document.querySelector(".edit-time #min");
      const selectedOption2 = re_min.options[re_min.selectedIndex];
      var re_day = document.querySelector(".edit-time #day");
      const selectedOption3 = re_day.options[re_day.selectedIndex];


      if (re_date.value == "") {
        show_error("Date Cannot Be Blank");
      }
      else {
        var full_time = selectedOption.value + ":" + selectedOption2.value + " " + selectedOption3.value;

        document.querySelector('.edit-popup2').style.display = "flex";
        document.querySelector('.edit-popup').style.display = "none";
        document.getElementById('edit-date-popup2').innerHTML =  "Date: " + " " + outputDate;
        document.getElementById('edit-time-popup2').innerHTML = "Time: " + " " + full_time;

        document.querySelector('.btn-re').addEventListener("click", function(){
          auth.onAuthStateChanged(function(user){
            if (user){
              var uid  = user.uid;
              db.ref(usersRef).child(uid).child(bookChild).child(booking).update({
                date:outputDate,
                time:full_time
              }).then(() => {
                window.location.reload();
              }).catch(() => {
                show_error("Soory, There was a problem while updating the details. Please try again after some time.")
              });
            };
          });
        });

        document.querySelector('.btn-re-ca').addEventListener('click', () => {
        document.querySelector('.edit-popup2').style.display = "none";
        document.querySelector('.edit-popup').style.display = "flex";
        document.getElementById('edit-date-popup2').innerHTML =   " " ;
        document.getElementById('edit-time-popup2').innerHTML = " " ;
        });

      }

    });
}

