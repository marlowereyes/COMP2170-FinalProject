function updateHeaderText() {
    const headerText = document.querySelector('.de-main h1');
    headerText.innerHTML = "Are you sure you're worthy of <span class='its__gold'>Golden Banana?</span>";
}

function updateHeaderText2() {
    const headerText = document.querySelector('.de-main h1');
    headerText.innerHTML = "You are not worthy";
}

function updateHeaderText3() {
    const headerText = document.querySelector('.de-main h1');
    headerText.innerHTML = "Answer this worthiness riddle: What does a HAOuse wear?";
}

function updateHeaderText4() {
    const headerText = document.querySelector('.de-main h1');
    headerText.innerHTML = "<span class='rainbow'>Congratulation! You got a</span> <span class='its__gold'>Golden Banana!</span>";
}

function updateButtons() {
    const buttonsContainer = document.querySelector('.buttons');
    buttonsContainer.innerHTML = '';

    const button1 = document.createElement('button');
    button1.textContent = 'what?';
    button1.className = 'banana__buttons';
    button1.addEventListener('click', function() {
        handleNotWorthy();
        playAudioFiles2();
    });
    const button2 = document.createElement('button');
    button2.textContent = 'HAO could you think otherwise?';
    button2.className = 'banana__buttons';
    button2.addEventListener('click', function() {
        updateHeaderText3();
        updateButtonsForDecision();
    });
    buttonsContainer.appendChild(button1);
    buttonsContainer.appendChild(button2);
}

function handleNotWorthy() {
    updateHeaderText2();
    document.body.style.backgroundImage = "url('./images/sadbanana.png')";
    updateSingleButton();
}


function updateButtonsForDecision() {
    const buttonsContainer = document.querySelector('.buttons');
    buttonsContainer.innerHTML = '';

    const button1 = document.createElement('button');
    button1.textContent = 'Yes.';
    button1.className = 'banana__buttons';
    button1.addEventListener('click', function() {
        handleNotWorthy();
        playAudioFiles2();
    });
    const button2 = document.createElement('button');
    button2.textContent = 'A HAOuse coat';
    button2.className = 'banana__buttons';
    button2.addEventListener('click', function() {
        handleNotWorthy();
        playAudioFiles2();
    });
    const button3 = document.createElement('button');
    button3.textContent = 'A dress';
    button3.className = 'banana__buttons';
    button3.addEventListener('click', function() {
        document.body.style.backgroundImage = "url('./images/banana.webp')";
        updateHeaderText4();
        updateSingleButton2();
        playAudioFiles();
        displayGif();
    });
    const button4 = document.createElement('button');
    button4.textContent = 'HAO am I supposed to know?';
    button4.className = 'banana__buttons';
    button4.addEventListener('click', function() {
        handleNotWorthy();
        playAudioFiles2();
    });
  
    buttonsContainer.appendChild(button1);
    buttonsContainer.appendChild(button2);
    buttonsContainer.appendChild(button3);
    buttonsContainer.appendChild(button4);
}


function playAudioFiles() {
    const audio1 = new Audio('./sounds/music.mp3'); 
    const audio2 = new Audio('./sounds/explode.mp3'); 
    audio1.play();
    audio2.play();
}

function playAudioFiles2() {
    const audio1 = new Audio('./sounds/meme.mp3'); 
    audio1.play();
}


function displayGif() {
    const gif = document.createElement('img');
    gif.src = './images/confetti.gif'; 
    gif.style.position = 'absolute';
    gif.style.top = '0';
    gif.style.left = '0';
    gif.style.width = '100%';
    gif.style.height = '95%';
    gif.style.objectFit = 'cover'; 
    gif.style.zIndex = '0'; 
    gif.style.pointerEvents = 'none';
    document.body.appendChild(gif);
}

function updateSingleButton() {
    const buttonsContainer = document.querySelector('.buttons');
    buttonsContainer.innerHTML = '';
    const returnHomeButton = document.createElement('button');
    returnHomeButton.textContent = 'Return Home';
    returnHomeButton.className = 'banana__buttons';
    returnHomeButton.addEventListener('click', function() {
        window.location.href = 'index.html';
    });
    buttonsContainer.appendChild(returnHomeButton);
}

function updateSingleButton2() {
    const buttonsContainer = document.querySelector('.buttons');
    buttonsContainer.innerHTML = '';
    const returnHomeButton = document.createElement('button');
    returnHomeButton.textContent = 'Return Home';
    returnHomeButton.className = 'banana__buttons2';
    returnHomeButton.addEventListener('click', function() {
        window.location.href = 'index.html';
    });
    buttonsContainer.appendChild(returnHomeButton);
}

document.querySelectorAll('.banana__buttons').forEach(button => {
    button.addEventListener('click', function() {
        updateHeaderText();
        updateButtons();
    });
});