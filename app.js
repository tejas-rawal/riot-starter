
/* The presenter */

(function() { 'use strict';

  window.todo = new Todo();

  // HTML for a single todo item
  var template = $("#templates .todo-item").html()
    , $root = $("#todo-list")
  ;


  /* Listen to user events */

  // 1.


  // 3.
  $root.on('click', '.destroy', function (e) {
    // TODO

  });



  /* Listen to model events */

  // 2.
  todo.on('add', function (newTodo) {

  });

  // 4.


})();
