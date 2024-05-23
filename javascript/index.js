document.addEventListener("DOMContentLoaded", function() {
    const openOverlayBtn = document.getElementById("open-overlay");
    const overlay = document.getElementById("overlay");
    const closeBtn = overlay.querySelector(".close");

    openOverlayBtn.addEventListener("click", function() {
        overlay.style.display = "flex";
    });

    closeBtn.addEventListener("click", function() {
        overlay.style.display = "none";
    });

    // Close overlay when clicking outside of it
    window.addEventListener("click", function(event) {
        if (event.target === overlay) {
            overlay.style.display = "none";
        }
    });
});

const images = document.querySelectorAll('.carousel img');
let currentIndex = 0;

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

document.getElementById('nextBtn').addEventListener('click', nextImage);
document.getElementById('prevBtn').addEventListener('click', prevImage);

// Automatically switch to the next image every 3 seconds
setInterval(nextImage, 3000);