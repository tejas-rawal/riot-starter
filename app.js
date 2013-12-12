
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
    if ($("#new-todo").val()) {
      todo.add($("#new-todo").val());
      $("#new-todo").val('');
      console.log($("#new-todo").val())
    }
  })



  /* Private functions */
  function toggle(el, flag) {
    el.toggleClass("completed", flag);
    $(":checkbox", el).prop("checked", flag);
  }

  var add = function (item) {
    if (this.id) item = this;

    var el = $($.render(template, item)).appendTo(root),
      input = $(".edit", el);
      console.log(el)

      function blur() {
        el.removeClass("editing")
      }

      $(".toggle", el).click(function() {
        todo.toggle(item.id);
      })

    // edit
    input.blur(blur).keydown(function(e) {
      var val = $.trim(this.value);
      if (e.which == 13 && val) {
        item.name = val;
        todo.edit(item);
      }

      if (e.which == 27) blur()
    })

    $("label", el).dblclick(function() {
      el.addClass("editing");
      input.focus()[0].select();
    })

    // remove
    $(".destroy", el).click(function() {
      todo.remove(item.id);
    })
  }


  /* Listen to model events */

  todo.on("add", add).on("remove", function(item) {
      $("#" + item.id).remove()
  })
  // }).on("toggle", function(item) {
  //   toggle($("#" + item.id), !!item.done)

  // }).on("edit", function(item) {
  //   var el = $("#" + item.id);
  //   el.removeClass("editing");
  //   $("label, .edit", el).text(item.name).val(item.name);
  // })
})()
