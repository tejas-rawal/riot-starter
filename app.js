
/* The presenter */

(function() { 'use strict';
  /*
    A Model instance exposed to global space so you can
    use the Todo APi from the console. For example:

    todo.add("My task");
  */
  window.todo = new Todo();

  // HTML for a single todo item
  var template = $("[type='html/todo']").html(),
    root = $("#todo-list"),
    nav = $("#filters a");



  /* Listen to user events */

  $("#submit").click(function(e) {
    // TODO
    }
  })


  /* Listen to model events */

  // TODO


  /* Private functions */


  var add = function (item) {
    if (this.id) item = this;

    var el = $($.render(template, item)).appendTo(root),


    // remove
    $(".destroy", el).click(function() {
      todo.remove(item.id);
    })
  }


})()
