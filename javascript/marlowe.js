document.addEventListener("DOMContentLoaded", function() {
    const carouselItems = document.querySelectorAll(".carousel-item");
    const carouselInner = document.querySelector(".carousel-inner");
  
    let currentIndex = 0;
  
    function nextSlide() {
      currentIndex++;
      if (currentIndex >= carouselItems.length) {
        currentIndex = 0;
      }
      updateCarousel();
    }
  
    function updateCarousel() {
      const offset = -currentIndex * 100;
      carouselInner.style.transform = `translateY(${offset}%)`;
    }
  
    setInterval(nextSlide, 5000);
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const quizForm = document.getElementById("quiz-form");
    const resultMessage = document.getElementById("result-message");

    quizForm.addEventListener("submit", function(event) {
        event.preventDefault(); 

        const q1Answer = document.querySelector('input[name="q1"]:checked');
        const q2Answer = document.querySelector('input[name="q2"]:checked');
        const q3Answer = document.querySelector('input[name="q3"]:checked');

        if (q1Answer && q2Answer && q3Answer) {
            const message = getMessage(q1Answer.value, q2Answer.value, q3Answer.value);
            resultMessage.textContent = message;
            resultMessage.style.display = "block";
        } else {
            resultMessage.textContent = "Please answer all questions.";
            resultMessage.style.display = "block";
        }
    });

    function getMessage(q1, q2, q3) {
        if (q1 === "good" && q2 === "good1" && q3 === "good2") {
            return "Your HAOdar is going strong! Keep it HAOing!";
        } else if (q1 === "bad" && q2 === "bad1" && q3 === "bad2") {
            return "mmm… seems like your HAOdar is off…TRY AGAIN!";
        } else if (q1 === "hao" && q2 === "hao1" && q3 === "hao2") {
            return "Correct! Correct! Correct! You are the ultimate HAO stan! Keep the HAO name alive and running!";
        } else {
            return "You’re doing okay but could be better… find a way to strengthen your HAOdar.";
        }
    }
});

document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll(".image");

  images.forEach(image => {
      const img = image.querySelector("img");
      const message = image.querySelector(".message");

      img.addEventListener("click", function() {
          toggleMessage(message);
      });
  });

  function toggleMessage(element) {
      if (element.style.display === "none") {
          element.style.display = "block";
      } else {
          element.style.display = "none";
      }
  }
});

