/* The presenter */

(function() { 'use strict';

  window.todo = new Todo();

  // HTML template for a single todo item
  var template = $("#templates .todo-item").html()
    , $root = $("#todo-list")
  ;


  /* Listen to user events */

  // 1. Event handler for adding todos


  // 3. Event handler for removing todos
  $root.on('click', '.destroy', function (e) {
    // TODO

  });



  /* Listen to model events */

  // 2. Event listener for adding todos
  todo.on('add', function (newTodo) {

  });

  // 4. Event listener for deleting todos

})();
