$(document).ready(function () {
  console.log("ready");

  // sidebar menu
  $('.js-sb-dd').click(function (e) {
    e.preventDefault();
    $(this).parent().toggleClass('sidebar-menu__list-item_active');
    $(this).siblings('.sidebar-submenu').toggle(250);
  });
  // dropdown
  $('.js-dd').click(function (e) {
    e.stopPropagation();
    $('.js-dd').not($(this)).removeClass('active');
    $('.js-dd').not($(this)).siblings('.js-dd-content').fadeOut(250);
    $(this).toggleClass('active');
    $(this).siblings('.js-dd-content').fadeToggle(250);
  });
  $('.js-dd-content').click(function (e) {
    e.stopPropagation();
  })
  $(document).click(function (e) {
    e.stopPropagation();
    var container = $('.js-dd-content, .js-dd');
    if (container.has(e.target).length === 0) {
      $('.js-dd-content').fadeOut(250);
    }
  })

});