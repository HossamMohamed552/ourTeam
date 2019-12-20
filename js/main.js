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

// hossam
    // slide menu
$(".hold-icon").click(function () {

    if ($(".menu").css("left") == `-${$(".menu").outerWidth()}px`) {
        $(".menu").animate({
            left: "0"
        }, 500);
        $(".fa-arrow-right").css("transform", "rotate(180deg)")

    } else {
        $(".menu").animate({
            left: `-${$(".menu").outerWidth()}px`
        }, 500);
        $(".fa-arrow-right").css("transform", "rotate(0deg)")

    }


});

$(".menu ul li a").click(function(){

    $("html,body").animate({
        scrollTop : $(`${$(this).attr('href')}`).offset().top
    },500)
})
 // Abeer
 $('.singer').click(function(){
  $(this).next('p').slideToggle(500);
   $("#singers .singer").not($(this)).next('p').slideUp(500);
});

// AbdelrahmanMohsen
var MaxLength = 100;
$("#FeedBack").html(MaxLength + " Character Remaining ");
$("#UserMessage").keyup(function(){
    var UserTextLength = $("#UserMessage").val().length;
    var UserRemaining = MaxLength - UserTextLength;
    $("#FeedBack").html(UserRemaining + " Characters Remaining ");
});
