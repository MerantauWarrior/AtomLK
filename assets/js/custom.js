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
      $('.js-dd').removeClass('active');
      $('.js-dd-content').fadeOut(250);
    }
  })
  // accordion
  if ($('.accordion').length > 0) {
    $('.js-acc-toggle').click(function () {
      $('.js-acc-toggle').not($(this)).removeClass('accordion__head_opened');
      $('.js-acc-toggle').not($(this)).siblings('.accordion__body').slideUp(250);
      $(this).toggleClass('accordion__head_opened');
      $(this).siblings('.js-acc-body').slideToggle(250);
    });
    $('.accordion-item__head').click(function () {
      $(this).toggleClass('accordion-item__head_opened');
      $(this).siblings('.accordion-item__body').slideToggle(250);
    });
  }
  // alerts
  $(document).on('click', '.alert__close', function () {
    $(this).parent().remove();
  });

  var templateExample = `
  <div class="alert box">
      <div class="alert__close"></div>
      <div class="alert__top">
        <div class="alert__label">
          <div class="alert__label-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 12H7" stroke="#1062AA" stroke-linecap="round"/>
              <path d="M12 17V7" stroke="#1062AA" stroke-linecap="round"/>
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="#1062AA"/>
            </svg>
          </div>
          <span>Try right now</span>
        </div>
        <div class="alert__date">February 23, 2021</div>
      </div>
      <p>
        <a href="#" class="link-w-arrow">
          Sending messages in Telegram becomes available
          <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M10.1893 6.27293L-2.08633e-07 6.27293L-2.742e-07 4.77293L10.1893 4.77293L6.6967 1.28029C6.40381 0.987393 6.40381 0.51252 6.6967 0.219626C6.98959 -0.0732673 7.46447 -0.0732673 7.75736 0.219626L12.5303 4.9926C12.8232 5.28549 12.8232 5.76036 12.5303 6.05326L7.75736 10.8262C7.46447 11.1191 6.98959 11.1191 6.6967 10.8262C6.40381 10.5333 6.40381 10.0585 6.6967 9.76557L10.1893 6.27293Z"
                  fill=""/>
          </svg>
        </a>
      </p>
    </div>
  `;
  var alertsQty = 0;
  var alertsDemo = setInterval(function () {
    alertsQty++;
    if(alertsQty === 2){
      clearInterval(alertsDemo);
    }
    $('.alerts').append(templateExample);
  }, 1500);


});