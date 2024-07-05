document.addEventListener("DOMContentLoaded", () => {
  // Create an IntersectionObserver to observe when elements come into the viewport
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show-items"); // Add class to start animation
      } else {
        entry.target.classList.remove("show-items"); // Remove class to reset animation
      }
    });
  });

  // List of CSS selectors for elements to observe
  const elementsToObserve = [
    ".scroll-scale", ".scroll-bottom", ".scroll-left",
    ".scroll-right", ".scroll-flipy", ".scroll-flipx",
    ".scroll-an", ".scroll-zoom", ".scroll-rotx",
    ".scroll-roty", ".scroll-close", ".scroll-open", ".b"
  ];

  // Observe each element that matches the selectors
  elementsToObserve.forEach((selector) => {
    document.querySelectorAll(selector).forEach((el) => observer.observe(el));
  });

  // Toggle menu open/close on click
  const menu = document.getElementById("menu");
  if (menu) {
    menu.onclick = function() {
      menu.classList.toggle("openmenu");
    };
  }

  // Create a second IntersectionObserver for the skills section
  const container = document.getElementById("skills");
  if (container) {
    const observer2 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startAnimation(); // Start animation when the skills section is in view
        }
      });
    });
    observer2.observe(container);
  }

  // Function to start various animations
  function startAnimation() {
    const showVal = document.querySelectorAll(".num"); // Numbers to animate
    const interval = 1000; // Initial delay

    setTimeout(() => {
      // Animate numbers
      showVal.forEach((val) => {
        let startVal = 0;
        let endVal = parseInt(val.getAttribute("data-val"));

        let counter = setInterval(function() {
          startVal += 1;
          val.textContent = `${startVal}%`;

          if (startVal === endVal) {
            clearInterval(counter);
          }
        }, 100);
      });

      // Animate background bars
      let backBar = document.querySelectorAll(".bgbar");
      backBar.forEach((val) => {
        let startVal = 0;
        let endVal = parseInt(val.getAttribute("data-val"));

        let counter = setInterval(function() {
          startVal += 1;
          val.style.width = `${startVal}%`;

          if (startVal === endVal) {
            clearInterval(counter);
          }
        }, 100);
      });

      // Animate progress values and circular progress indicators
      let progressValue = document.querySelectorAll(".prg-val");
      let circularProgress = document.querySelectorAll(".gradient"),
        speed = 100;

      progressValue.forEach((val) => {
        let progressEndValue = parseInt(val.getAttribute("data-value"));
        let progressStartValue = 0;

        let counter2 = setInterval(() => {
          progressStartValue += 1;
          val.textContent = `${progressStartValue}%`;

          if (progressStartValue === progressEndValue) {
            clearInterval(counter2);
          }
        }, speed);

        circularProgress.forEach((cp) => {
          let progressEndValue = parseInt(cp.getAttribute("data-value"));
          let progressStartValue = 0;

          let counter3 = setInterval(() => {
            progressStartValue += 1;
            cp.style.background = `conic-gradient(#373737 ${progressStartValue * 3.6}deg, #ededed 0deg)`;

            if (progressStartValue === progressEndValue) {
              clearInterval(counter3);
            }
          }, speed);
        });
      });
    }, interval);
  }
});
 