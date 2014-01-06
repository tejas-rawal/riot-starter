(function () {

  var $root = $('.pet .comments + form');

  // // // // // // //
 // View Listeners //
// // // // // // //

  $root.on('submit', function (e) {
    console.log('form submit');
    e.preventDefault();
    // TODO: Handle new comments
  });

})();
