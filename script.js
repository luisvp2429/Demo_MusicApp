const music = new Audio("audio/FRUIT.mp3");

//create Array

const songs = [
    {
        id: "1",
        songName: `On My Way <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/song_cover.jpg"
    },
    {
        id: "2",
        songName: `Alan Walker-Fade <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/song_cover_2.jpg"
    }
]

/* Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
}) */

let masterPlay = document.getElementById('masterPlay');

masterPlay.addEventListener('click',()=>{
    if(music.paused || music.currentTime <= 0) {
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    }
    else{
        music.pause();
    }
})