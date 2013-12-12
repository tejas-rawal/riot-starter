
/* The model */

function Todo() {

  var self = $.observable(this);
  var items = [];
  var findWithAttr = function (array, attr, value) {
      for(var i = 0; i < array.length; i += 1) {
          if(array[i][attr] === value) {
              return i;
          }
      }
  }

  self.add = function(name) {
    var item = { id: "_" + ("" + Math.random()).slice(2), name: name }
    items.push(item)
    self.trigger("add", item);
  }

  self.edit = function(item) {
    items[item.id] = item;
    self.trigger("edit", item);
  }

  self.remove = function(id) {
    var index = findWithAttr(items, 'id', id);
    var item = items[index];
    items.splice(index, 1);
    self.trigger("remove", item);
  }

  self.toggle = function(id) {
    var index = items.map(function(el) {
      return el.id;
    }).indexOf(id);
    var item = items[index];
    item.done = !item.done;
    self.trigger("toggle", item);
  }

  // @param filter: <empty>, id, "active", "completed"
  self.items = function(filter) {
    var ret = [];
    $.each(items, function(id, item) {
      if (!filter || filter == id || filter == (item.done ? "completed" : "active")) ret.push(item)
    })
    return ret;
  }
}