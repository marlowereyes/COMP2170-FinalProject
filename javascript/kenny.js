document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.the_button');
    const offset = 50;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;
    const initialButtonX = (viewportWidth - buttonWidth) / 2;
    const initialButtonY = (viewportHeight - buttonHeight) / 3;


    button.style.left = `${initialButtonX}px`;
    button.style.top = `${initialButtonY}px`;

    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        let buttonX = mouseX + offset;
        let buttonY = mouseY + offset;
        button.style.left = `${buttonX}px`;
        button.style.top = `${buttonY}px`;
        button.style.pointerEvents = 'none';
    });


    function loadYouTubeVideo() {
        const playerDiv = document.getElementById('player');
        const videoId = 'Vpww1lRAkhE'; 
        const player = new YT.Player(playerDiv, {
            height: '100%',
            width: '100%',
            videoId: videoId,
            playerVars: {
                autoplay: 1, 
                controls: 0,
                loop: 1, 
                playlist: videoId, 
                mute: 1,
                rel: 0 
            },
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    }


    function onPlayerReady(event) {
        const playerDiv = document.getElementById('player');
        playerDiv.classList.add('loaded'); 

        
        let currentSpeed = 1;
        const maxSpeed = 100000; 
        const accelerationRate = 0.5; 
        const accelerationInterval = 2000; 
        const speedIncreaseInterval = setInterval(() => {
            currentSpeed += accelerationRate;
            if (currentSpeed > maxSpeed) {
                clearInterval(speedIncreaseInterval); 
            } else {
                event.target.setPlaybackRate(currentSpeed); 
            }
        }, accelerationInterval);
    }

    function onPlayerStateChange(event) {
        if (event.data === YT.PlayerState.ENDED) {
            event.target.playVideo();
        }
    }

    function initializeYouTubePlayer() {
        if (typeof YT !== 'undefined' && YT.Player) {
            loadYouTubeVideo();
        } else {
            setTimeout(initializeYouTubePlayer, 100);
        }
    }

    setTimeout(initializeYouTubePlayer, 7000);

    setTimeout(() => {
        const alternativelyButton = document.querySelector('.alternatively__button');
        alternativelyButton.style.display = 'block';
    }, 30000);

    setTimeout(() => {
        const audio = new Audio('./sounds/fuse.mp3');
        audio.play();
    }, 8500);

    setTimeout(() => {
        button.style.transition= "background-color 1s"
        button.style.backgroundColor = 'red';
        button.style.borderColor="darkred"
    }, 8500);   

});

