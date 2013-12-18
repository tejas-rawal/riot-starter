(function () {

  // Private variables and functions
  var counter = 0;

  var generateId = function () {
    counter += 1;
    return 'item_' + counter;
  };


  /* The model itself */

  window.Todo = function () {

    $.observable(this);

    var items = [];
    var findItemIndexById = function (id) {
      for(var i = 0; i < items.length; i += 1) {
        if(items[i].id === id) {
          return i;
        }
      }
      // If we don't find the item, return -1
      return -1;
    };

    this.add = function (name) {
      var item = {
        id: generateId(),
        name: name
      };
      items.push(item);
      this.trigger("add", item);
    };

    this.remove = function (id) {
      var index = findItemIndexById(id);
      var item = items[index];
      items.splice(index, 1);

      this.trigger("remove", item);
      return item;
    };

  };

})();