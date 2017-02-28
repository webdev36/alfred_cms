$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
  $('.section-title').waypoint(function() {
      $('.section-title').addClass('animated fadeInUp');
  }, { offset: '90%' });
  $('.section-content1').waypoint(function() {
      $('.section-content1').addClass('animated fadeInUp');
  }, { offset: '90%' });
  $('.btn-find-out-more').waypoint(function() {
      $('.btn-find-out-more').addClass('animated fadeInUp');
  }, { offset: '90%' });
  $('.section-title2').waypoint(function() {
      $('.section-title2').addClass('animated fadeInUp');
  }, { offset: '90%' });
  $('.section-content2').waypoint(function() {
      $('.section-content2').addClass('animated fadeInUp');
  }, { offset: '90%' });
  $('.btn-get-started').waypoint(function() {
      $('.btn-get-started').addClass('animated fadeInUp');
  }, { offset: '90%' });
  $('#icon_road_traffic').waypoint(function() {
      $('#icon_road_traffic').addClass('animated fadeInUp');
  }, { offset: '90%' });
  $('#h2_road_traffic').waypoint(function() {
      $('#h2_road_traffic').addClass('animated fadeInUp');
  }, { offset: '90%' });
  $('.left-section_t1').waypoint(function() {
      $('.left-section_t1').addClass('animated fadeInUp');
  }, { offset: '90%' });
  $('#icon_over_crowding').waypoint(function() {
      $('#icon_over_crowding').addClass('animated fadeInUp');
  }, { offset: '90%' });
  $('#h2_over_crowding').waypoint(function() {
      $('#h2_over_crowding').addClass('animated fadeInUp');
  }, { offset: '90%' });
  $('#p_over_crowding').waypoint(function() {
      $('#p_over_crowding').addClass('animated fadeInUp');
  }, { offset: '90%' });
  $('#img_road_01').waypoint(function() {
      $('#img_road_01').addClass('animated fadeInUp');
  }, { offset: '90%' });
  $('#icon_why_alfred').waypoint(function() {
      $('#icon_why_alfred').addClass('animated fadeInUp');
  }, { offset: '90%' });
  $('#img_road_02').waypoint(function() {
      $('#img_road_02').addClass('animated fadeInUp');
  }, { offset: '90%' });
  $('#img_increasing_public_transport').waypoint(function() {
      $('#img_increasing_public_transport').addClass('animated fadeInUp');
  }, { offset: '90%' });
  $('#h2_increasing_public').waypoint(function() {
      $('#h2_increasing_public').addClass('animated fadeInUp');
  }, { offset: '90%' });
  $('#p_increasing_public').waypoint(function() {
      $('#p_increasing_public').addClass('animated fadeInUp');
  }, { offset: '90%' });
  $('#img_helping').waypoint(function() {
      $('#img_helping').addClass('animated fadeInUp');
  }, { offset: '90%' });
  $('#h2_helping').waypoint(function() {
      $('#h2_helping').addClass('animated fadeInUp');
  }, { offset: '90%' });
  $('#p_helping').waypoint(function() {
      $('#p_helping').addClass('animated fadeInUp');
  }, { offset: '90%' });
  $('#img_driver').waypoint(function() {
      $('#img_driver').addClass('animated fadeInUp');
  }, { offset: '90%' });
  $('.section2-pass-text').waypoint(function() {
      $('.section2-pass-text').addClass('animated fadeInUp');
  }, { offset: '90%' });
  $('#img_message').waypoint(function() {
      $('#img_message').addClass('animated fadeInUp');
  }, { offset: '90%' });
  $('#img_driver_mode').waypoint(function() {
      $('#img_driver_mode').addClass('animated fadeInUp');
  }, { offset: '90%' });
  $('#img_road_03').waypoint(function() {
      $('#img_road_03').addClass('animated fadeInUp');
  }, { offset: '90%' });
  $('#img_passenger').waypoint(function() {
      $('#img_passenger').addClass('animated fadeInUp');
  }, { offset: '90%' });
  $('#img_road_04').waypoint(function() {
      $('#img_road_04').addClass('animated fadeInUp');
  }, { offset: '90%' });
  $('#img_message_board').waypoint(function() {
      $('#img_message_board').addClass('animated fadeInUp');
  }, { offset: '90%' });
  $('#img_road_05').waypoint(function() {
      $('#img_road_05').addClass('animated fadeInUp');
  }, { offset: '90%' });
  $('#img_road_arrow').waypoint(function() {
      $('#img_road_arrow').addClass('animated fadeInUp');
  }, { offset: '90%' });
  $('.section2-driver-text').waypoint(function() {
      $('.section2-driver-text').addClass('animated fadeInUp');
  }, { offset: '90%' });
  $('#img_passenger_mode').waypoint(function() {
      $('#img_passenger_mode').addClass('animated fadeInUp');
  }, { offset: '90%' });
  $('.section2-message-text').waypoint(function() {
      $('.section2-message-text').addClass('animated fadeInUp');
  }, { offset: '90%' });
  $('#h1_about_us').waypoint(function() {
      $('#h1_about_us').addClass('animated fadeInUp');
  }, { offset: '90%' });
  $('#p_about_us').waypoint(function() {
      $('#p_about_us').addClass('animated fadeInUp');
  }, { offset: '90%' });
  $('#img_phone').waypoint(function() {
      $('#img_phone').addClass('animated fadeInUp');
  }, { offset: '90%' });
  $('#img_email').waypoint(function() {
      $('#img_email').addClass('animated fadeInUp');
  }, { offset: '90%' });
  $('#img_address').waypoint(function() {
      $('#img_address').addClass('animated fadeInUp');
  }, { offset: '90%' });
  $('#p_phone').waypoint(function() {
      $('#p_phone').addClass('animated fadeInUp');
  }, { offset: '90%' });
  $('#p_email').waypoint(function() {
      $('#p_email').addClass('animated fadeInUp');
  }, { offset: '90%' });
  $('#p_address').waypoint(function() {
      $('#p_address').addClass('animated fadeInUp');
  }, { offset: '90%' });
  $('#h2_launch').waypoint(function() {
      $('#h2_launch').addClass('animated fadeInUp');
  }, { offset: '90%' });
  $('#icon_appstore').waypoint(function() {
      $('#icon_appstore').addClass('animated fadeInUp');
  }, { offset: '90%' });
  $('#icon_google').waypoint(function() {
      $('#icon_google').addClass('animated fadeInUp');
  }, { offset: '90%' });
  $('#h3_notify').waypoint(function() {
      $('#h3_notify').addClass('animated fadeInUp');
  }, { offset: '90%' });
  $('#p_input').waypoint(function() {
      $('#p_input').addClass('animated fadeInUp');
  }, { offset: '90%' });
  $('#button_notify_me').waypoint(function() {
      $('#button_notify_me').addClass('animated fadeInUp');
  }, { offset: '90%' });
  $('#a_instagram').waypoint(function() {
      $('#a_instagram').addClass('animated fadeInUp');
  }, { offset: '90%' });
  $('#a_twitter').waypoint(function() {
      $('#a_twitter').addClass('animated fadeInUp');
  }, { offset: '90%' });
  $('#a_facebook').waypoint(function() {
      $('#a_facebook').addClass('animated fadeInUp');
  }, { offset: '90%' });


  $('#img_road_01_mobile').waypoint(function() {
      $('#img_road_01_mobile').addClass('animated fadeInUp');
  }, { offset: '90%' });
  $('.img-why-alfred').waypoint(function() {
      $('.img-why-alfred').addClass('animated fadeInUp');
  }, { offset: '90%' });
  $('.icon_road_traffic').waypoint(function() {
      $('.icon_road_traffic').addClass('animated fadeInUp');
  }, { offset: '90%' });
  $('.img-arrow-left').waypoint(function() {
      $('.img-arrow-left').addClass('animated fadeInUp');
  }, { offset: '90%' });
  $('.img-arrow-right').waypoint(function() {
      $('.img-arrow-right').addClass('animated fadeInUp');
  }, { offset: '90%' });
  $('#road_traffic_mobile').waypoint(function() {
      $('#road_traffic_mobile').addClass('animated fadeInUp');
  }, { offset: '90%' });
  $('#section_two_mobile_road_2').waypoint(function() {
      $('#section_two_mobile_road_2').addClass('animated fadeInUp');
  }, { offset: '90%' });
  $('#section_three_mobile_arrow_left').waypoint(function() {
      $('#section_three_mobile_arrow_left').addClass('animated fadeInUp');
  }, { offset: '90%' });
  $('.icon_driver').waypoint(function() {
      $('.icon_driver').addClass('animated fadeInUp');
  }, { offset: '90%' });
  $('#section_three_mobile_arrow_right').waypoint(function() {
      $('#section_three_mobile_arrow_right').addClass('animated fadeInUp');
  }, { offset: '90%' });
  $('#section_three_mobile_iphone').waypoint(function() {
      $('#section_three_mobile_iphone').addClass('animated fadeInUp');
  }, { offset: '90%' });
  $('#section_three_mobile_p').waypoint(function() {
      $('#section_three_mobile_p').addClass('animated fadeInUp');
  }, { offset: '90%' });
  $('.section-three-mobile-road3').waypoint(function() {
      $('.section-three-mobile-road3').addClass('animated fadeInUp');
  }, { offset: '90%' });
  $('').waypoint(function() {
      $('').addClass('animated fadeInUp');
  }, { offset: '90%' });
  $('').waypoint(function() {
      $('').addClass('animated fadeInUp');
  }, { offset: '90%' });
  $('').waypoint(function() {
      $('').addClass('animated fadeInUp');
  }, { offset: '90%' });
  $('').waypoint(function() {
      $('').addClass('animated fadeInUp');
  }, { offset: '90%' });
  $('').waypoint(function() {
      $('').addClass('animated fadeInUp');
  }, { offset: '90%' });
  $('').waypoint(function() {
      $('').addClass('animated fadeInUp');
  }, { offset: '90%' });
  $('').waypoint(function() {
      $('').addClass('animated fadeInUp');
  }, { offset: '90%' });
});
