function myFunction() {
  var today = new Date();

  var date = (today.getMonth()+1)+"/"+today.getDate()+"/"+today.getFullYear();
  
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  
  var dateTime = today + " " + date + " " + time;
  
document.getElementById("time").innerHTML = dateTime;  
}
