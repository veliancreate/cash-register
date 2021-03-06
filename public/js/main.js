$( document ).ready( function() {
  $( '.product' ).click( function( e ) {    
    e.preventDefault();
    var text = $( this ).text();
    $.post( '/add_item', { product: text }, function( response ){
      window.location.replace('/order');
    });
  });

  $('select').change(function(){
    var tableNumber = $(this).val();
    $.post('/table_number_update', { table_number: tableNumber }, function(response){
      $('#table-number').text(response.table_number);
    });
  });
});
