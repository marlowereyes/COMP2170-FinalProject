// Function to update header text and buttons
function updateHeaderText() {
    const headerText = document.querySelector('.de-main h1');
    headerText.innerHTML = "Are you sure you're worthy of <span class='its__gold'>Golden Banana?</span>";
}

function updateHeaderText2() {
    const headerText = document.querySelector('.de-main h1');
    headerText.innerHTML = "You are not worthy";
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
        updateHeaderText2();
        // Change background image
        document.body.style.backgroundImage = "url('./images/sadbanana.png')";
        // Clear existing buttons and create a single "Return Home" button
        updateSingleButton();
    });
    const button2 = document.createElement('button');
    button2.textContent = 'HAO could you think otherwise?';
    button2.className = 'banana__buttons';
    button2.addEventListener('click', function() {
        alert('Wise decision!');
    });
    // Append new buttons to the container
    buttonsContainer.appendChild(button1);
    buttonsContainer.appendChild(button2);
}

// Function to update buttons to a single "Return Home" button
function updateSingleButton() {
    const buttonsContainer = document.querySelector('.buttons');
    buttonsContainer.innerHTML = '';
    const returnHomeButton = document.createElement('button');
    returnHomeButton.textContent = 'Return Home';
    returnHomeButton.className = 'banana__buttons';
    returnHomeButton.addEventListener('click', function() {
        window.location.href='index.html';
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
