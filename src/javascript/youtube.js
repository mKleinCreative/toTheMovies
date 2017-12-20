  // Client ID and API key from the Developer Console
  var CLIENT_ID = 'AIzaSyDAT4-UeGntGNdKtc4Ne9vPHYPznQQA7_A';

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: 'M7lc1UVf-VE',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

$('.trailer-player').append(`<iframe src="${player}"></iframe>`)