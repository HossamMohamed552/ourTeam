
//getters , setters
$(".SingerOne").show();
$(".The-First").click(function(){
    $(".SingerOne").slideDown(500);
    $(".SingerTwo").slideUp(500);
    $(".SingerThree").slideUp(500);
    $(".SingerFour").slideUp(500);
})
$(".The-Second").click(function(){
    $(".SingerTwo").slideDown(500);
    $(".SingerOne").slideUp(500);
    $(".SingerThree").slideUp(500);
    $(".SingerFour").slideUp(500);
})
$(".The-Third").click(function(){
    $(".SingerThree").slideDown(500);
    $(".SingerOne").slideUp(500);
    $(".SingerTwo").slideUp(500);
    $(".SingerFour").slideUp(500);
})
$(".The-Fourth").click(function(){
    $(".SingerFour").slideDown(500);
    $(".SingerOne").slideUp(500);
    $(".SingerTwo").slideUp(500);
    $(".SingerThree").slideUp(500);
})







setInterval(function countdown(){
    var now = new Date();
    var EventDate = new Date(2020,5,13);
    
    var CurrentTime = now.getTime();
    var EventTime = EventDate.getTime();
    
    var RemainingTime = EventTime - CurrentTime;
    
    var seconds = Math.floor(RemainingTime/1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);
    
    
    hours = hours % 24 ;
    minutes = minutes % 60;
    seconds = seconds % 60;
    
    
    if(hours < 10)
        {
            hours = "0" + hours;
        }
    if(minutes < 10)
        {
            minutes = "0" + minutes;
        }
    if(seconds < 10 )
        {
            seconds = "0" + seconds;
        }
    
    document.getElementById("days").innerHTML = days + " D" ;
    document.getElementById("hours").innerHTML = hours + " H" ;
    document.getElementById("minutes").innerHTML = minutes + " M";
    document.getElementById("Seconds").innerHTML = seconds + " S";
} , 1000);





var MaxLength = 100;
$("#FeedBack").html(MaxLength + " Character Remaining ");
$("#UserMessage").keyup(function(){
    var UserTextLength = $("#UserMessage").val().length;
    var UserRemaining = MaxLength - UserTextLength;
    $("#FeedBack").html(UserRemaining + " Characters Remaining ");
})





$(".MenuContainer i").click(function(){
    
    
    let widthBox = $(".MenuOption").outerWidth();
    
    
    let leftOfColorContainer = $(".MenuContainer").css("left");
    

    if(leftOfColorContainer == '0px')
        {
            $(".MenuContainer").animate({left : `-=${widthBox}`},500)
        }
    else
        {
            $(".MenuContainer").animate({left : `0px`},500)
        }
    
})


$(".MenuContainer ul li a").click(function(){
    let aHref = $(this).attr("href");
    let sectionOffset = $(aHref).offset().top;
    $("body","html").animate({scrollTop:sectionOffset},1000);
})




