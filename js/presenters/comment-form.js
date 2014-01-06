(function () {

  var $root = $('.pet .comments + form');

  // // // // // // //
 // View Listeners //
// // // // // // //

  $root.on('submit', function (e) {
    console.log('form submit');
    e.preventDefault();
    // TODO: Handle new comments
    var author = $('.author', $root).val();
    var message = $('.message', $root).val();
    var newComment = {author: author, message: message};

    comments.create(newComment);
  });

})();
