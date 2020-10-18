$(".login-page input").on("click", function(event){
    $(this).parent().parent().parent().find("label").removeClass("label-animate");
    $(this).parent().parent().parent().find("label").addClass("text-muted");
    $(this).find(".eye-div").addClass("change-color");
    event.stopPropagation();
});

$(document).on("click", function(){
    $(this).find(".eye-div").removeClass("change-color");
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

//Toggling between login and signup

$(".sign-up").on("click", function(){
    $(".tab .sign-up").removeClass("deactivate-sign-up");
    $(".tab .sign-up").removeClass("reset-deactivate-sign-up");
    $(".tab .login").removeClass("reset-deactivate-login");
    $(".tab .login").addClass("deactivate-login");
    $(".login-page").addClass("display");
    $(".sign-up-page").removeClass("display");
    $(".sign-up-page input").val(null);
    $(".sign-up-page input").parent().parent().parent().find("label").addClass("label-animate");
    $(".sign-up-page input").parent().parent().parent().find("label").removeClass("text-muted");
    $(".reset-page").addClass("vanish-reset-window");
});

$(".tab .login").on("click", function(){
    $(this).removeClass("deactivate-login");
    $(this).removeClass("reset-deactivate-login")
    $(".tab .sign-up").removeClass("reset-deactivate-sign-up");
    $(".tab .sign-up").addClass("deactivate-sign-up");
    $(".sign-up-page").addClass("display");
    $(".login-page").removeClass("display");
    $(".login-page input").val(null);
    $(".login-page input").parent().parent().parent().find("label").addClass("label-animate");
    $(".login-page input").parent().parent().parent().find("label").removeClass("text-muted");
    $(".reset-page").addClass("vanish-reset-window");
});


$(".sign-up-page input").on("click", function(event){
    $(this).parent().parent().parent().find("label").removeClass("label-animate");
    $(this).parent().parent().parent().find("label").addClass("text-muted");
    $(this).find(".eye-div").addClass("change-color");
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
    if($(this).hasClass("hidden")){
        $(this).parent().parent().find("div .password").attr("type", "text");
        $(this).removeClass("hidden");
        $(this).find("a").html("<i class='fas fa-eye-slash'></i>");
    }
    else{
        $(this).parent().parent().find("div .password").attr("type", "password");
        $(this).addClass("hidden");
        $(this).find("a").html("<i class='fas fa-eye'></i>");
    }
});


//Forgot Password

$(".forgot-password").on("click", function(){
    $(".login-page").addClass("display");
    $(".reset-page").removeClass("vanish-reset-window");
    $(".tab .login").addClass("reset-deactivate-login");
    $(".tab .sign-up").removeClass("deactivate-sign-up");
    $(".tab .sign-up").addClass("reset-deactivate-sign-up");
    $(".reset-page input").val(null);
    $(".reset-page input").parent().parent().parent().find("label").addClass("label-animate");
    $(".reset-page input").parent().parent().parent().find("label").removeClass("text-muted");
});

$(".back-to-login").on("click", function(){
    $(".reset-page").addClass("vanish-reset-window");
    $(".login-page").removeClass("display");
    $(".tab .login").removeClass("reset-deactivate-login");
    $(".tab .sign-up").removeClass("reset-deactivate-sign-up");
    $(".tab .sign-up").addClass("deactivate-sign-up");
    $(".login-page input").val(null);
    $(".login-page input").parent().parent().parent().find("label").addClass("label-animate");
    $(".login-page input").parent().parent().parent().find("label").removeClass("text-muted");
})

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