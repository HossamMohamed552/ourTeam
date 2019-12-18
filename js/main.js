// Eng. Ala Section
// Duration Section
function countdown(){
    var now = new Date();
    var eventDate = new Date(2019, 12, 28);

    var currentTime = now.getTime();
    var eventTime = eventDate.getTime();

    var remTime = eventTime - currentTime;

    var s = Math.floor(remTime / 1000);
    var m = Math.floor(s / 60);
    var h = Math.floor(m / 60);
    var d = Math.floor(h / 24)-30; 
    h %= 24; 
    m %= 60; 
    s %= 60; 
    h = (h < 10) ? "0" + h : h; 
    m = (m < 10) ? "0" + m : m; 
    s = (s < 10) ? "0" + s : s;

    document.getElementById("days").innerHTML = "<h3>"+  d + " days"+"</h3>"; 
    document.getElementById("hours").innerHTML ="<h3>"+  h + " hours"+"</h3>"; 
    document.getElementById("minutes").innerHTML = "<h3>"+  m + " minutes"+"</h3>"; 
    document.getElementById("seconds").innerHTML = "<h3>"+  s + " seconds"+"</h3>"; 
    setTimeout(countdown, 1000);
} 

countdown();
