$(document).ready(function(){
$(".two img").click(function(){
$(".two img").slideToggle();
$("#low p").slideToggle();
});
});
$(document).ready(function(){
    $(".one ").click(function(){
    $(".one img").slideToggle();
    $("#fas p").slideToggle();
    });
});

$(document).ready(function(){
    $(".three").click(function(){
    $(".three img").toggle();
    $("#tee p").slideToggle();
    });
});
function myName(submit){
    var name=document.$("input#name").val();
    alert=("" + name +"we have received your message thankyou for sharing with us");

};
$(document).ready(function(){
    $("form#contacts").submit(function(event){
        var name = $("input#name").val();
        var email = $("input#email").val();
        var message = $("input#message").val();
        alert (" yes " + name + ",we have received your message,thank you.");
    })
})

