
/* The presenter */

(function() { 'use strict';
  /*
    A Model instance exposed to global space so you can
    use the Todo APi from the console. For example:

    todo.add("My task");
  */
  window.todo = new Todo();

  // HTML for a single todo item
  var template = $("#templates .todo-item").html()
    , $root = $("#todo-list")
  ;


  /* Listen to user events */

  // 1.
  // $("#submit").on('click', function(e) {
  //   // TODO
  //   var newTodoText = $('#new-todo').val();
  //   console.log('Adding', newTodoText);
  //   todo.add(newTodoText);
  // });

  // 3.
  $root.on('click', '.destroy', function (e) {
    // TODO
    // var id = $(this).closest('.todo-item').data('id');
    // todo.remove(id);
  });



  /* Listen to model events */

  // 2.
  todo.on('add', function (newTodo) {
    // var newTodoHtml = $.render(template, newTodo);
    // $(newTodoHtml).appendTo($root);
  });

  // 4.
  // todo.on('remove', function (newTodo) {
  //   var dataFilter = '[data-id=' + newTodo.id + ']';
  //   $('.todo-item', $root).filter(dataFilter).remove();
  // });

})();
