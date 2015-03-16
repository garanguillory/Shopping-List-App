$(document).ready(function(){
  

    $('form').on('submit', function(e){
      e.preventDefault();
      var something = $('#item').val();
      console.log(this);
      $('<li><i class="fa fa-check"></i>' + something + '<i class="fa fa-remove"></i></li>').appendTo('ul');

    });

    $('ul').on('click','i.fa.fa-check', function(){
      $(this).closest('li').toggleClass('strikethrough');
      console.log(this);
    });
    $('ul').on('click','i.fa.fa-remove', function(){
        $(this).closest('li').slideUp();
        console.log(this);
    });

});