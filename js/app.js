$(document).ready(function() {
  $(window).scroll(function(){
    if($('html, body').scrollTop()>50){
      $('.navbar').addClass('have_shadow');
    }else{
      $('.navbar').removeClass('have_shadow');
    }
  });

  var menu_status=false;
  $('.btn_mobile_menu').click(function(){
    if(menu_status==false){
      $('.navbar').addClass('show_menu');
      $('.btn_mobile_menu').css('left', '190px');
      menu_status=true;
    }else{
      $('.navbar').removeClass('show_menu');
      $('.btn_mobile_menu').css('left', '0');
      menu_status=false;
    }
  });

  $('.navbar ul li a').click(function(){
    if($(window).width()<=768){
      $('.navbar').removeClass('show_menu');
      $('.btn_mobile_menu').css('left', '0');
      menu_status=false;
    }
  });

  // $('#contact-form form').submit(function(e) {
  //    e.preventDefault();
  //   var email   = $('#inputEmail').val();
  //   var message = $('#inputMessage').val();

  //   if (!email || !message) {
  //     alertify.error("Email and Message are required");
  //     return false;
  //   } else {
  //     $.ajax({
  //       method: 'POST',
  //       url: 'http://formspree.io/hnnguyen45@gmail.com',
  //       data: $('#contact-form form').serialize(),
  //       datatype: 'json'
  //     });
     
  //     $(this).get(0).reset();
  //     alertify.success("Message sent");
  //   }
  // });
});