$(document).ready(function(){
$(".two img").click(function(){
$(".two img").slideToggle();
$("#low p").slideToggle();
});
});
$(document).ready(function(){
    $(".one img").click(function(){
    $(".one img").slideToggle();
    $("#fas p").slideToggle();
    });
});

$(document).ready(function(){
    $(".three img").click(function(){
    $(".three img").toggle();
    $("#tee p").slideToggle();
    });
});

function myFunction(){
    var type;
    var person = prompt("please type your message");
    if(person == null || person=="");{
    alert="User cancelled the prompt.";
}
{
    type="we have received your message thankyou for sharing with us";
}
document.getElementById(gap).innerHTML=type
}