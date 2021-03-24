$(document).ready(function () {
  console.log("ready");
  // sidebar menu
  $('.js-sb-dd').click(function (e) {
    e.preventDefault();
    $(this).parent().toggleClass('sidebar-menu__list-item_active');
    $(this).siblings('.sidebar-submenu').toggle(250);
  });
});