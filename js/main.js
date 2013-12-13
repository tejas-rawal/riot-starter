<<<<<<< HEAD
// alert('hi');

// var buzzer = {
//   press: function () {
//     this.trigger('buzz');
//   }
// };
// // This adds an `on` method!
// $.observable(buzzer);

// // Now we can use it!
// buzzer.on('buzz', function () {
//   alert('The buzzer went off!');
// });

// buzzer.press();
// buzzer.press();

// var pizzaCook = {
//   ego: 0,
//   spinDough: function () {
//     this.ego += 1;
//     if (this.ego > 10) {
//       this.trigger('confidence');
//     }
//   }
// };

// // TODO: RIGHT HERE
// $.observable(pizzaCook);

// pizzaCook.on('confidence', function () {
//   alert('I HAVE SOLVED WORLD HUNGER');
// });

// for (var i = 0; i < 11; i += 1) {
//   pizzaCook.spinDough();
// }

// var weather = $.observable({});
// weather.listen = function() {
//   this.trigger('snow-storm');
//   this.trigger('tornado');
// };
// weather.on('snow-storm', function () {
//   alert('Bring your coats');
// });

// weather.on('tornado', function () {
//   alert('Everybahdy panic!');
// });

// weather.listen();

// var fireEater = {
//   state: 'arrogant',

//   eatFire: function () {
//     if (this.state === 'choking') {
//       this.trigger('choke');
//       return;
//     }

//     var fate = parseInt(Math.random() * 5, 10);
//     if (fate === 0) {
//       this.trigger('choke');
//       this.state = 'choking';
//     }
//     else {
//       this.trigger('pose');
//     }
//   }
// };

// // TODO: RIGHT HERE, YES HERE, IN BETWEEN, YES

// $.observable(fireEater);

// fireEater.on('pose choke', function() {
//   if('pose') {
//     console.log('Clap clap clap');
//   }
//   if('choke') {
//     console.log('GASP!');
//   }
// });

// for (var i = 0; i < 10; i += 1) {
//   fireEater.eatFire();
// }

var stock = $.observable({
  price: 99,
  update: function () {
    // Change price by -1, 0, or 1
    this.price += parseInt(Math.random() * 3, 10) - 1;
    // TODO: TRIGGER CHANGE WITH PRICE
    this.trigger('price-change', this.price);
  }
});

stock.on('price-change', function (price) {
  if (price > 100) {
    console.log('Too expensive:', price);
  }
  else if (price < 100) {
    console.log('Too cheap:', price);
  }
  else {
    console.log('Just right!', price);
  }
});

setInterval(function () {
  stock.update();
}, 1000);


=======
(function () {

  clock.on('tick', function (tickCount) {
    console.log('tick!', tickCount);
  });

  $('#clock-control .start').on('click', function (e) {
    clock.start();
  });

  $('#clock-control .stop').on('click', function (e) {
    clock.stop();
  });

})();
>>>>>>> a512a66f5cc027ad0cf135072a41489524786509
