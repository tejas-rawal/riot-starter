
var videos = [
  { title: 'Get Krazy', youtubeId: 'GyR2HJ9B7aM', genre: 'kid rap'},
  { title: 'Sadness', youtubeId: 'sIeJSSjTG3k', genre: 'piano' }
];

var titleTemplate = $("#templates .item").html();
var statsTemplate = $("#templates .genre-item").html();
console.log(titleTemplate);

var renderGenreStats = function() {
  $("#genre-stats").empty();

  var stats = {};

  for(var i = 0; i < videos.length; i++) {
    var video = videos[i];
      if(stats[video.genre] === undefined) {
        stats[video.genre] = 0;
      }
    stats[video.genre] += 1;
  }

  for(var genre in stats) {
    var genreCount = stats[genre];
    var genreHtml = $.render(statsTemplate, {genre: genre, genreCount: genreCount});
    $("#genre-stats").append(genreHtml);
  }
};

var renderVideoList = function () {
  // TODO
  for(var i = 0; i < videos.length; i++) {
    var video = videos[i];
    var videoHtml = $.render(titleTemplate, video);
    $("#video-list").append(videoHtml);
    console.log(video.title);
  }
};

$('#new-video').on('submit', function(e) {
  e.preventDefault();
  var title = $(".new-title").val();
  var youtubeId = $(".id").val();
  var new_genre = $(".new-genre").val();
  videos.push({title: title, youtubeId: youtubeId, genre: new_genre});
  var newvideoHtml = $.render(titleTemplate, { title: title, youtubeId: youtubeId, genre: new_genre });
  $("#video-list").append(newvideoHtml);
  renderGenreStats();
  $(".new-title").val("");
  $(".id").val("");
});

renderGenreStats();
renderVideoList();
