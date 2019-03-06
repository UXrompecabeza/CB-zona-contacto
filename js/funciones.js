
(function() {
  if ($(window).width() < 767) {
    let input = $('.containerRadio input');
    $('.containerRadio').removeClass('selected');
    $('.contactoContainer').removeClass('show');
    $('.iconografia').removeClass('show');
    for(let i=0; i < input.length; i++) {
      input.prop('checked', false);
    }
  }
})()

$('.containerRadio input').click(function() {
  if($('#inputNoCliente').prop('checked')) {
    $('.containerRadio').removeClass('selected');
    $('#inputNoCliente').closest('.containerRadio').addClass('selected');
    $('.contactoContainer').removeClass('show');
    $('.iconografia').removeClass('show');
    $('.noCliente').addClass('show');
  }
  if($('#inputCliente').prop('checked')) {
    $('.containerRadio').removeClass('selected');
    $('#inputCliente').closest('.containerRadio').addClass('selected');
    $('.contactoContainer').removeClass('show');
    $('.iconografia').removeClass('show');
    $('.cliente').addClass('show');
  }
  if($('#inputPrestador').prop('checked')) {
    $('.containerRadio').removeClass('selected');
    $('#inputPrestador').closest('.containerRadio').addClass('selected');
    $('.contactoContainer').removeClass('show');
    $('.iconografia').removeClass('show');
    $('.prestador').addClass('show');
  }
  if($('#inputEmpresa').prop('checked')) {
    $('.containerRadio').removeClass('selected');
    $('#inputEmpresa').closest('.containerRadio').addClass('selected');
    $('.contactoContainer').removeClass('show');
    $('.iconografia').removeClass('show');
    $('.empresa').addClass('show');
  }
  if ($(window).width() < 767) {
    $('html, body').animate({
      scrollTop: $('.actionContainer').offset().top - 20
    }, 700);
  }
})

$('.btn-interior').click(function() {
  $('.btn-interior').removeClass('activeBtn');
  $(this).addClass('activeBtn');
})