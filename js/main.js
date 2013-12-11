// alert('hi');

var itemTemplate = $('#templates .item').html();

var newItemHtml = $.render(itemTemplate, { name: 'Dewberry', price: 0.15 });
$('#store').append(newItemHtml);


var items = [
  { name: 'Blowjob', price: 5 },
  { name: 'Rimjob', price: 15 },
  { name: 'Anal', price: 30 }
];

for(var i = 0; i < items.length; i ++) {
  var item = items[i];
  var newItem = $.render(itemTemplate, item );
  $('#store').append(newItem);
}