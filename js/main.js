// alert('hi');

var itemTemplate = $('#templates .item').html();

$('.submit').click(function(e) {
  e.preventDefault();
  var item = $(".Item").val();
  var price = $(".Price").val();
  var newItem = $.render(itemTemplate, { name: item, price: price });
  $('#store').append(newItem);
});