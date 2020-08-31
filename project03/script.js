const video =document.getElementById('video');
const progress = document.getElementById('progress');
const play = document.getElementById('play');
const stope = document.getElementById('stop');
const time = document.getElementById('timestamp');

//Function 
// 1- toggleVideo - play or pause video
// if video is playing , then pause
// if video is paused , then paly
function toggleVideo() {
    if(video.paused){
        video.play();
    } else {
        video.pause();
    }
};  

// 2- updateIcon - toggle between play and pause icons
// if video is playing , then show pause icon 
// if video is pause , then  show play icon 
function updateIcon(){
    if(video.paused) {
        play.innerHTML = '<i class="fas fa-play fa-2x"></i>';
    } else {
        play.innerHTML = '<i class="fas fa-pause fa-2x"></i>';
    }
};

// 3- update progress - update the position of the progress bar 
function updateProgress(){
    // update slider
     progress.value =video.currentTime/video.duration*100;

     // Update timestamp
     // Rounding down the minutes
     let minutes = Math.floor(video.currentTime / 60);
     if(minutes < 10) {
         minutes = `0${minutes}`}
     // Rounding down the Second
     let second = Math.floor(video.currentTime % 60);
     if(second < 10 ) {
         second = `0${second}`;}
     // Display Time
    time.innerHTML = `${minutes}:${second}`;
};

// 4- stopVideo - stop video playback and reset time to 0
function stopVideo(){
    video.pause();
    video.currentTime = 0;
};

// 5- setProgress - update video playback time base 
function setProgress() {
    video.currentTime = progress.value * video.duration / 100;
};

// Event Listeners
// 1- video Element = click to play or pause the video
video.addEventListener('click', toggleVideo);

// 2- video Element = pause to toggle play icon to puase
video.addEventListener('pause', updateIcon);

// 3- video Element = play to toggle pause icon back to play icon
video.addEventListener('play', updateIcon);

// 4- video Element = update progress bar and timestamp
video.addEventListener('timeupdate', updateProgress);

// 5- play button = click to play or pause video 
play.addEventListener('click', toggleVideo);

// 6- stop button = click to reset video and pause video
stope.addEventListener('click', stopVideo); 

// 7- progress bar = change position to change time of
progress.addEventListener('change', setProgress);