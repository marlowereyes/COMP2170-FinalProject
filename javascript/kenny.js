// Array to store positions of existing cursors
const cursorPositions = [];

// Function to create a dummy cursor
function createCursor() {
  const cursor = document.createElement('div');
  cursor.className = 'cursor';
  document.body.appendChild(cursor);
  moveCursor(cursor);
}

// Function to continuously move the cursor
function moveCursor(cursor) {
  const minDistance = 50; // Minimum distance between cursors

  // Calculate new random position
  let newX, newY;
  do {
    newX = Math.random() * window.innerWidth;
    newY = Math.random() * window.innerHeight;
    // Check distance from other cursors
    var tooClose = cursorPositions.some(pos => {
      const dx = pos.x - newX;
      const dy = pos.y - newY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      return distance < minDistance;
    });
  } while (tooClose); // Repeat until a position that's not too close to other cursors is found

  // Store the new position
  cursorPositions.push({ x: newX, y: newY });

  cursor.style.transition = 'transform 0.5s ease'; // Faster transition
  cursor.style.transform = `translate(${newX}px, ${newY}px)`;
  setTimeout(() => {
    requestAnimationFrame(() => moveCursor(cursor)); // Move cursor continuously after a delay
  }, 100); // Adjust the delay between cursor movements
}

// Create multiple dummy cursors
document.addEventListener('DOMContentLoaded', function() {
  for (let i = 0; i < 100; i++) {
    setTimeout(createCursor, i * 60); // Create cursors with a delay
  }
});