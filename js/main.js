
// TODO: (2) Grab box template html
// var boxTemplate = ???;

$('#new-box').on('submit', function (e) {
  // Prevent the form from submitting
  // TODO: (3) UNCOMMENT THIS LINE
  // e.preventDefault();

  // Grab the color that the user wants to create a box with
  var color = $('#new-box .color').val();
  console.log('Creating a', color, 'box...');

  // TODO: (4) Use boxTemplate, color, and $.render to generate new html
  // var newBoxHtml = ???;

  console.log('Generated new box html:', newBoxHtml);

  // Create the new box html element and make it draggable
  var newBox = $(newBoxHtml);
  newBox.draggable();

  // Add the new box element to the page
  $('#boxes').append(newBox);
});

// Make the current boxes draggable (thanks to jquery-ui)
$('.box').draggable();
