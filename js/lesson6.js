// ******************************
//  Front End Foundations - Lesson 6
// ******************************

$(document).ready(function(){    

// Hands-On 1
  $("h1").dblclick(function() {
      $(this).css("color", "blue");
  });

  $("h1").hover(function() {
    $(this).css("font-size", "20px");
  });

// Hands-On 2
  $("#firstDiv").hover(function() {
    $(this).toggleClass("green");
  });

  $("#secondDiv").hover(function() {
    $(this).toggleClass("green");
  });

// Hands-On 3
$("p").hover(function () {
  $(this).css("color", "red");
});

$("a").click(function (e) {
  e.preventDefault();
  $("label").css("font-size", "30px");
});

$("input").focus(function() {
  $(this).css("background-color", "lightblue");
});

$("li").dblclick(function() {
  $(this).css("font-family", "Arial");
});

$("button").click(function() {
  $("p").toggle(),
  $("a").toggle(),
  $("ul").toggle()
});

});
