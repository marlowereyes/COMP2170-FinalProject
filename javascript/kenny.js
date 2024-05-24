document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.the_button');
    const offset = 50;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;
  
    // Calculate initial position for the button (center of the viewport)
    const initialButtonX = (viewportWidth - buttonWidth) / 2;
    const initialButtonY = (viewportHeight - buttonHeight) / 3;
  
    // Apply initial position
    button.style.left = `${initialButtonX}px`;
    button.style.top = `${initialButtonY}px`;
  
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
  
        // Calculate new position for the button
        let buttonX = mouseX + offset;
        let buttonY = mouseY + offset;
  
        // Apply the new position
        button.style.left = `${buttonX}px`;
        button.style.top = `${buttonY}px`;
  
        // Make the button unclickable
        button.style.pointerEvents = 'none';
    });
  
    // Function to load the YouTube video
    function loadYouTubeVideo() {
        const playerDiv = document.getElementById('player');
        const videoId = 'Vpww1lRAkhE'; // Replace 'VIDEO_ID_HERE' with the ID of your YouTube video
        const player = new YT.Player(playerDiv, {
            height: '100%',
            width: '100%',
            videoId: videoId,
            playerVars: {
                autoplay: 1, // Autoplay the video
                controls: 0, // Hide video controls
                loop: 1, // Loop the video
                playlist: videoId, // Required for loop to work
                mute: 1, // Mute the video to bypass autoplay restrictions
                rel: 0 // Do not show related videos at the end
            },
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    }
  
    // Function to be called when the player is ready
    function onPlayerReady(event) {
        const playerDiv = document.getElementById('player');
        playerDiv.classList.add('loaded'); // Add the 'loaded' class to fade in the video
  
        // Increase the playback speed progressively
        let currentSpeed = 1;
        const maxSpeed = 100000; // Maximum playback speed
        const accelerationRate = 0.5; // Rate at which the speed increases
        const accelerationInterval = 2000; // Interval to increase speed (in milliseconds)
  
        const speedIncreaseInterval = setInterval(() => {
            currentSpeed += accelerationRate;
            if (currentSpeed > maxSpeed) {
                clearInterval(speedIncreaseInterval); // Stop increasing speed when it reaches the maximum
            } else {
                event.target.setPlaybackRate(currentSpeed); // Set the playback speed
            }
        }, accelerationInterval);
    }
  
    // Function to handle player state changes
    function onPlayerStateChange(event) {
        if (event.data === YT.PlayerState.ENDED) {
            event.target.playVideo(); // Replay the video when it ends
        }
    }
  
    // Initialize YouTube Player API after a delay
    function initializeYouTubePlayer() {
        if (typeof YT !== 'undefined' && YT.Player) {
            loadYouTubeVideo();
        } else {
            setTimeout(initializeYouTubePlayer, 100);
        }
    }
  
    // Call the initializeYouTubePlayer function after 7 seconds
    setTimeout(initializeYouTubePlayer, 7000);
  
    // Show alternatively button after about 30 seconds
    setTimeout(() => {
      const alternativelyButton = document.querySelector('.alternatively__button');
      alternativelyButton.style.display = 'block';
    }, 30000);

    setTimeout(() => {
        button.style.transition= "background-color 1s"
        button.style.backgroundColor = 'red';
        button.style.borderColor="darkred"
    }, 8500);   
    
  });

