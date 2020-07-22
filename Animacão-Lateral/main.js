$(window).scroll(function(){
  var windowTop = $(this).scrollTop();
  $('.container_que_voce_quer_animar').each(function() {
    if(windowTop > $(this).offset().top - *~~ aqui ira o valor para se adequar quando você quer que o item apareça, não colocando nada aqui ela irá aparecer só no topo da página ~~*) {
      $(this).addClass('animacao');
    } else {
      $(this).removeClass('animacao');
    }
  });
});