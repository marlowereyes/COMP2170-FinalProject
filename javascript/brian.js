var button = document.getElementById('follow-btn');
var repositionCount = 0;

function getRandomPosition() {
    var viewportWidth = window.innerWidth;
    var viewportHeight = window.innerHeight;

    var maxX = viewportWidth - button.offsetWidth;
    var maxY = viewportHeight - button.offsetHeight;

    var newX = Math.random() * maxX;
    var newY = Math.random() * maxY;

    return { x: newX, y: newY };
}

button.addEventListener('mouseenter', function(event) {
    var newPosition = getRandomPosition();
    button.style.transform = `translate(${newPosition.x}px, ${newPosition.y}px)`;
    
    repositionCount++;

    if (repositionCount === 3) {
        createOkButton();
        button.style.display = 'none';
    }
});

function createOkButton() {
    var okButton = document.createElement('button');

    okButton.textContent = 'Game Over! You Lose';

    okButton.className = 'ok-button';

    okButton.addEventListener('click', function(event) {
        alert('At least you tried!');
    });

    document.body.appendChild(okButton);
}
