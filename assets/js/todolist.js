/**
 * Created by karina on 14/02/17.
 */
"use strict";

//CheckOff specific To-do by clicking

$("ul").on("click", "li",function () {
    /*INSTEAD OF THIS CODE WE CAN USE IT TOGGLE
    //if is gray turn it black
      if ($(this).css("color") === "rgb(128, 128, 128)") {
        ( $(this).css({
            color: "black",
            textDecoration: "none"
        }))
    }
    else {
        $(this).css({
            color: "gray",
            textDecoration: "line-through"
        });
    }

});*/

    $(this).toggleClass("classForToggle")});

$("ul").on("click", "span" ,function (event) {
    $(this).parent().fadeOut(500,function () {
        $(this).remove()
    });
    event.stopPropagation();

});



$("input[type='text']").keypress("click", function (event) {
    if (event.which === 13){
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span>x</span>"+ todoText+"</li>")
    }
});

$(".fa-plus").click(function(){
    $("input[type='text'").fadeToggle()
});