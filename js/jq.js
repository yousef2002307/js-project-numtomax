$(document).ready(function(){
 $("nav ul li i").click(function(){
        if($(this).hasClass("fas")){
            $(this).addClass("far ");
            $(this).addClass(" fa-moon");
            $(this).removeClass("fas" );
            $(this).removeClass(" fa-sun");
            $("body").css("background-color","#fff");
            $("nav").removeClass("sun");
            $("nav").addClass("moon");
            $("header").removeClass("sun");
            $("header").addClass("moon");

        }else{
            $(this).addClass("fas ");
            $(this).addClass(" fa-sun");
            $(this).removeClass("far " );
            $(this).removeClass(" fa-moon");
            $("body").css("background-color","#143b29");
            $("nav").removeClass("moon");
            $("nav").addClass("sun");
            $("header").removeClass("moon");
            $("header").addClass("sun");
        }
 });
});









