
var $draw = $(".nav_right .nav-list li");
var $drawList = $(".draw_list");

$(".nav_right .nav-list li").click(
  function() {
    $(this).children(".draw_list").slideToggle();
  }
);
