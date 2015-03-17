$(document).ready(function(){
  


    $('form').on('submit', function(e){
      e.preventDefault();
      var something = $('#item').val();
      var quantity = $('#quantity').val();
      console.log(this);
      $('<li class="btn-sm btn-primary"><i class="fa fa-check"></i>' + something + ": " + quantity + '<i class="fa fa-remove"></i></li>').appendTo('.groceries');

    });


    $('.groceries').on('click','i.fa.fa-check', function(){
      $(this).closest('li').toggleClass('strikethrough');
      console.log(this);
    });
    $('.groceries').on('click','i.fa.fa-remove', function(){
        $(this).closest('li').slideUp();
        console.log(this);
    });


    $('#delete').on('click', function(){
        console.log("delete button clicked");
        var sure = prompt("Are you sure you want to delete your list? Y/N").toUpperCase();
        if (sure == "YES" || sure == "YE" || sure == "Y" || sure == "YESS"){
          $('li').remove();
        } else {
          console.log("okay");
        }
    });

});