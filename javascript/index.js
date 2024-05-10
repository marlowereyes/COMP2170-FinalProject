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
