
var $draw = $(".nav_right .nav-list li");

$($draw).click(
  function() {
    $(this).children(".draw_list").slideToggle();
  }
);
$($draw).mouseenter(
  function() {
    $(this).children(".draw_list").slideDown();
  }
);
$($draw).mouseleave(
  function() {
    $(this).children(".draw_list").slideUp();
  }
);
$(".draw_list").mouseenter(
  function() {
    $(this).show();
  }
);
$(".draw_list").mouseleave(
  function() {
    $(this).hide();
  }
);
