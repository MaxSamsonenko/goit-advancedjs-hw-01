import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
//get video time from local storage
const storageData = localStorage.getItem('videoplayer-current-time');
//check if storage contains video playback time, and set it to 0 if not
const savedTime = storageData ? storageData : 0;
//access iframe element
const iframe = document.getElementById('vimeo-player');

const player = new Player(iframe);
player.setCurrentTime(savedTime);

//record time to local storage every second
player.on('timeupdate', throttle(timeUpdateHandler, 1000));
//function for recording time
function timeUpdateHandler(e) {
  localStorage.setItem('videoplayer-current-time', e.seconds);
}
