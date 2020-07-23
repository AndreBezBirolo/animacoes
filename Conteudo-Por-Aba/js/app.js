$('[data-secao]').each(function(){
  var $todosConteudos = $(this).find('[data-conteudo]'),
      $todosCliques = $(this).find('[data-clique]'),
      classeAtivo = 'ativo';
  $todosConteudos.first().addClass(classeAtivo);
  $todosCliques.first().addClass(classeAtivo);
  $todosCliques.click(function(e){
    e.preventDefault();
    var id = $(this).data('clique'),
        $conteudo = $('[data-conteudo="' + id + '"]'); 
    $todosCliques.removeClass(classeAtivo);
    $todosConteudos.removeClass(classeAtivo);
    $conteudo.addClass(classeAtivo);
    $(this).addClass(classeAtivo);
  });
});