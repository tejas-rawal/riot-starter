(function () {

  var $root = $('.pet .comments')
    , template = $('#templates .comment').html()
  ;

  // // // // // // //
 // View Listeners //
// // // // // // //

  $root.on('click', '.like', function (e) {
    console.log('Like link was clicked:', this);
    // TODO: Tell the comments model to like the comment
    var commentId = $(this).closest('.comment').data('id');
    comments.like(commentId);
  });

  // // // // // // //
 // Model Listeners /
// // // // // // //

  comments.on('create', function (newComment) {
    console.log('New comment created:', newComment);
    // TODO: Generate new html using a template and $.render
    // TODO: Add this new html to the page to show the new comment!
    var newCommentHtml = $.render(template, newComment);
    $root.append(newCommentHtml);
  });

  comments.on('like', function (comment) {
    console.log('Comment was liked:', comment.id);
    var commentDiv = $('[data-id=' + comment.id + ']');
    // TODO: Update the like count for the liked comment
    commentDiv.find(".like-count").text(comment.likes);
  });

})();
