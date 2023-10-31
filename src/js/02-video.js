import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
//get video time from local storage
const savedTime = localStorage.getItem('videoplayer-current-time');
//access iframe element
const iframe = document.getElementById('vimeo-player');

const player = new Player(iframe);
player
  .setCurrentTime(savedTime)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });

player.on('play', function () {
  console.log('played the video!');
});
//record time to local storage every second
player.on('timeupdate', throttle(timeUpdateHandler, 1000));
//function for recording time
function timeUpdateHandler(e) {
  localStorage.setItem('videoplayer-current-time', e.seconds);
}

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
