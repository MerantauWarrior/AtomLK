$(document).ready(function () {
  console.log("ready");

  // sidebar menu
  $('.js-sb-dd').click(function (e) {
    e.preventDefault();
    $(this).parent().toggleClass('sidebar-menu__list-item_active');
    $(this).siblings('.sidebar-submenu').toggle(250);
  });
  // language
  $('.header-lang__switch').click(function () {
    $(this).toggleClass('header-lang__switch_active');
    $('.header-lang__select').fadeToggle(250);
  });
  // notifications
  $('.header-notifications__icon').click(function () {
    $('.header-notifications__list').fadeToggle(250);
  });

});