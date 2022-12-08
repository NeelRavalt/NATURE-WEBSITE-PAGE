let btn = document.getElementsByClassName('bi-play-circle')[0];

let video = document.getElementsByTagName('video')[0];
btn.addEventListener('click', ()=> {
    if(video.paused){
        video.play();
        video.style.display = 'unset';
        btn.classList.remove('bi-play-circle');
        btn.classList.add('bi-pause-circle');
    }
    else{
        video.pause();
        video.style.display = 'none';
        btn.classList.add('bi-play-circle');
        btn.classList.remove('bi-pause-circle');
    
    }
})