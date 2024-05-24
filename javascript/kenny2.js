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

// Function to update buttons
function updateButtons() {
    const buttonsContainer = document.querySelector('.buttons');
    // Clear existing buttons
    buttonsContainer.innerHTML = '';
    // Create new buttons
    const button1 = document.createElement('button');
    button1.textContent = 'what?';
    button1.className = 'banana__buttons';
    button1.addEventListener('click', function() {
        handleNotWorthy();
    });
    const button2 = document.createElement('button');
    button2.textContent = 'HAO could you think otherwise?';
    button2.className = 'banana__buttons';
    button2.addEventListener('click', function() {
        updateHeaderText3();
        // Clear existing buttons and create new buttons
        updateButtonsForDecision();
    });
    // Append new buttons to the container
    buttonsContainer.appendChild(button1);
    buttonsContainer.appendChild(button2);
}

// Function to handle the "You are not worthy" scenario
function handleNotWorthy() {
    updateHeaderText2();
    // Change background image
    document.body.style.backgroundImage = "url('./images/sadbanana.png')";
    // Clear existing buttons and create a single "Return Home" button
    updateSingleButton();
}

// Function to update buttons for decision
function updateButtonsForDecision() {
    const buttonsContainer = document.querySelector('.buttons');
    // Clear existing buttons
    buttonsContainer.innerHTML = '';
    // Create new buttons
    const button1 = document.createElement('button');
    button1.textContent = 'Yes.';
    button1.className = 'banana__buttons';
    button1.addEventListener('click', function() {
        handleNotWorthy();
    });
    const button2 = document.createElement('button');
    button2.textContent = 'A HAOuse coat';
    button2.className = 'banana__buttons';
    button2.addEventListener('click', function() {
        handleNotWorthy();
    });
    const button3 = document.createElement('button');
    button3.textContent = 'A dress';
    button3.className = 'banana__buttons';
    button3.addEventListener('click', function() {
        // Change background image
        document.body.style.backgroundImage = "url('./images/banana.webp')";
        updateHeaderText4();
        // Clear existing buttons and create a single "Return Home" button
        updateSingleButton2();
    });
    const button4 = document.createElement('button');
    button4.textContent = 'HAO am I supposed to know?';
    button4.className = 'banana__buttons';
    button4.addEventListener('click', function() {
        handleNotWorthy();
    });
    // Append new buttons to the container
    buttonsContainer.appendChild(button1);
    buttonsContainer.appendChild(button2);
    buttonsContainer.appendChild(button3);
    buttonsContainer.appendChild(button4);
}

// Function to update buttons to a single "Return Home" button
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

// Add event listeners to existing buttons
document.querySelectorAll('.banana__buttons').forEach(button => {
    button.addEventListener('click', function() {
        updateHeaderText();
        updateButtons();
    });
});