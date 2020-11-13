$(".login-page input").on("click", function(event){
    $(this).parent().parent().parent().find("label").removeClass("label-animate");
    $(this).parent().parent().parent().find("label").addClass("text-muted");
    $(this).parent().parent().children("div:nth-of-type(2)").addClass("change-color");
    $(this).parent().parent().children("div:nth-of-type(2)").removeClass("eye-div");
    event.stopPropagation();
});

$(document).on("click", function(){
    $(".rounded-right").removeClass("change-color");
    $(".rounded-right").addClass("eye-div");
})


$(document).ready(function(){
    $('.login-page input').blur(function(){
        if(!$(this).val()){
            $(this).parent().parent().parent().find("label").addClass("label-animate");
            $(this).parent().parent().parent().find("label").removeClass("text-muted");
        } else{
            $(this).parent().parent().parent().find("label").removeClass("label-animate");
            $(this).parent().parent().parent().find("label").addClass("text-muted");
        }
    });
});


$(".login-button").on("click", function(event){
    if($(".login-page input[type='email']").val() == ""){
        $(".login-page input[type='email']").parent().parent().parent().find("label").removeClass("label-animate");
        $(".login-page input[type='email']").parent().parent().parent().find("label").addClass("text-muted");
    }
    else if($(".login-page input[type='password']").val() == ""){
        $(".login-page input[type='password']").parent().parent().parent().find("label").removeClass("label-animate");
        $(".login-page input[type='password']").parent().parent().parent().find("label").addClass("text-muted");
    }
});


$(".sign-up-page input").on("click", function(event){
    $(this).parent().parent().parent().find("label").removeClass("label-animate");
    $(this).parent().parent().parent().find("label").addClass("text-muted");
    $(this).parent().parent().children("div:nth-of-type(2)").addClass("change-color");
    $(this).parent().parent().children("div:nth-of-type(2)").removeClass("eye-div");
    event.stopPropagation();
});


$(document).ready(function(){
    $('.sign-up-page input').blur(function(){
        if(!$(this).val()){
            $(this).parent().parent().parent().find("label").addClass("label-animate");
            $(this).parent().parent().parent().find("label").removeClass("text-muted");
        } else{
            $(this).parent().parent().parent().find("label").removeClass("label-animate");
            $(this).parent().parent().parent().find("label").addClass("text-muted");
        }
    });
});

$(".sign-up-button").on("click", function(event){
    if(!$(".sign-up-page input.first-name").val()){
        $(".sign-up-page input.first-name").parent().parent().parent().find("label").removeClass("label-animate");
        $(".sign-up-page input.first-name").parent().parent().parent().find("label").addClass("text-muted");
    }
    else if(!$(".sign-up-page input.last-name").val()){
        $(".sign-up-page input.last-name").parent().parent().parent().find("label").removeClass("label-animate");
        $(".sign-up-page input.last-name").parent().parent().parent().find("label").addClass("text-muted");
    }
    else if(!$(".sign-up-page input[type='email']").val()){
        $(".sign-up-page input[type='email']").parent().parent().parent().find("label").removeClass("label-animate");
        $(".sign-up-page input[type='email']").parent().parent().parent().find("label").addClass("text-muted");
    }
    else if(!$(".sign-up-page input.new-password").val()){
        $(".sign-up-page input.new-password").parent().parent().parent().find("label").removeClass("label-animate");
        $(".sign-up-page input.new-password").parent().parent().parent().find("label").addClass("text-muted");
    }
    else if(!$(".sign-up-page input.confirm-password").val()){
        $(".sign-up-page input.confirm-password").parent().parent().parent().find("label").removeClass("label-animate");
        $(".sign-up-page input.confirm-password").parent().parent().parent().find("label").addClass("text-muted");
    }
});


//Show/Hide password
$(".eye").on("click", function(){
    if($(this).hasClass("hidden_1")){
        $(this).parent().parent().find("div .password").attr("type", "text");
        $(this).removeClass("hidden_1");
        $(this).find("a").html("<i class='fas fa-eye-slash'></i>");
    }
    else{
        $(this).parent().parent().find("div .password").attr("type", "password");
        $(this).addClass("hidden_1");
        $(this).find("a").html("<i class='fas fa-eye'></i>");
    }
});


$(".reset-page input").on("click", function(event){
    $(this).parent().parent().parent().find("label").removeClass("label-animate");
    $(this).parent().parent().parent().find("label").addClass("text-muted");
    event.stopPropagation();
});

$(document).ready(function(){
    $('.reset-page input').blur(function(){
        if(!$(this).val()){
            $(this).parent().parent().parent().find("label").addClass("label-animate");
            $(this).parent().parent().parent().find("label").removeClass("text-muted");
        } else{
            $(this).parent().parent().parent().find("label").removeClass("label-animate");
            $(this).parent().parent().parent().find("label").addClass("text-muted");
        }
    });
});

$(".reset-button").on("click", function(event){
    if($(".reset-page input[type='email']").val() == ""){
        $(".reset-page input[type='email']").parent().parent().parent().find("label").removeClass("label-animate");
        $(".reset-page input[type='email']").parent().parent().parent().find("label").addClass("text-muted");
    }
});

