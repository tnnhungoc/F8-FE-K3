const music = document.getElementById('music');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const time = document.getElementById('time');
const progress = document.getElementById('progress');
const slider = document.getElementById('slider');
const tooltip = document.getElementById('timehover');
const progressWidth = window.innerWidth - (progress.getBoundingClientRect().left + progress.getBoundingClientRect().right);
var duration = music.duration

//Total time

music.onloadedmetadata = function(){
    duration = music.duration
    document.getElementById('total').innerText = formatTime(duration);
};


//Play button
playButton.addEventListener("click", function() {
    music.play();
    playButton.style.display = "none";
    pauseButton.style.display = "block";
});

//Pause button
pauseButton.addEventListener("click", function() {
    music.pause();
    playButton.style.display = "block";
    pauseButton.style.display = "none";
}); 

//format time to min:sec
function formatTime(time) {
    var mins = Math.floor(time / 60);
    var secs = Math.floor(time - mins * 60);
    
    var formattedTime = mins + ":" + secs;
    
    return formattedTime;
}

//Update time in DOM
setInterval(function (){
    var currentTime = music.currentTime;
    var totalTime = music.duration;
    time.innerText = formatTime(currentTime);

    var currentProgress = Math.floor((currentTime / music.duration) * 100);

    progress.style.width = currentProgress + "%";

    
    //check if track has finished
    if(currentTime >= totalTime) {
        console.log('finished');
        // music.pause();
        music.load();
        playButton.style.display = "block";
        pauseButton.style.display = "none";
    }
}, 500);


slider.onmousemove = function(e) {
    let position = getPosition(e);
    let positionPercentage = getPositionPercentage(position);
    let trackPosition = getTrackPosition(positionPercentage);

    //tooltip
    updateTooltip(e, trackPosition)
    
};

slider.onmousedown = function(e) {
    let position = getPosition(e);
    let positionPercentage = getPositionPercentage(position);
    let trackPosition = getTrackPosition(positionPercentage);
    music.fastSeek(trackPosition);

    //tooltip
    updateTooltip(e, trackPosition)
}

function updateTooltip(event, trackPosition) {
    tooltip.innerText = formatTime(trackPosition);
    tooltip.style.left = (event.pageX + 10) + 'px';
    tooltip.style.top = (event.pageY + 10) + 'px';
}

function getPosition(e) {
    return e.pageX - e.currentTarget.offsetLeft;
}

function getPositionPercentage(position) {
    return Math.floor((position / progressWidth) * 100);
}

function getTrackPosition(positionPercentage) {
    return (positionPercentage / 100) * duration;
}