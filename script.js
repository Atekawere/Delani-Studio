
$(document).ready(function(){
    $(".one ").click(function(){
    $("#fas p").toggle();
    $("#image1").toggle();
    });
    $(".three").click(function(){
    $("#tee p").toggle();
    $("#image2").toggle();
    });
   $(".Dep").click(function(){
       $("#Design").toggle();
       $("#image0").toggle();
   });
});
$(document).ready(function(){
    $(".image").mouseover(function(){
    $(".text").fadeIn();
    $(".text").show();
    });
});

$(document).ready(function(){
    $("form#contacts").submit(function(event){
        var name = $("input#name").val();
        var email = $("input#email").val();
        var message = $("input#message").val();
        alert (" Hi " + name + ",we have received your message,thank you for communicating to us.");
    });

    $("#image").hover(function(){
        $("#move").toggle();
    });
    $("#kit").hover(function(){
        $("#fop").toggle();
    });
    $("#ten").hover(function(){
        $("#toy").toggle();
    });
    $("#jin").hover(function(){
        $("#gut").toggle();
    });
    $("#hit").hover(function(){
        $("#lul").toggle();
    });
    $("#moji").hover(function(){
        $("#pol").toggle();
    });
    $("#jer").hover(function(){
        $("#rej").toggle();
    });
    $("#yet").hover(function(){
        $("#tye").toggle();
    });
});

