(function () {

  var snapePhrases = [
    'Snape', 'Snape.', 'Snape. Snape', 'Snape. Snape.',
    'Sever', 'Severus', 'Severus Snape', 'Severus Snape.'
  ];

  clock.on('tick', function (tickCount) {
    // step is a number between 0 and 7
    var step = (tickCount - 1) % 8;
    var phrase = snapePhrases[step];
    $('.snape').text(phrase);
  });


  var dumblePhrases = [
    'DUMBLEDORE!', '', '', '',
    '', '', '', 'DUMBLE',
  ];

  clock.on('tick', function (tickCount) {
    if (tickCount === 1) {
      // Skip the first count; we don't want to shout just yet
      return;
    }

    // step is a number between 0 and 7
    var step = (tickCount - 1) % 8;
    var phrase = dumblePhrases[step];
    $('.dumbledore').text(phrase);
  });

})();