const avviaAudioButton = document.getElementById("button-62");
const audioPlayer = document.getElementById("audioPlayer");

avviaAudioButton.addEventListener("click", function () {
    if (audioPlayer.paused()) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
});