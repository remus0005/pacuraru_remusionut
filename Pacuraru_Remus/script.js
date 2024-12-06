    const slides = document.querySelectorAll("#slideshow img");
    const dots = document.querySelectorAll(".dot");
    const totalSlides = 3; 
    let currentSet = 0;
    let autoSlideInterval;

       const imageSets = [
      ["cpumem.jpg","disk0.jpg","mem.jpg"],
      ["proces1.jpg","proces2.jpg","wifi.jpg"],
      ["ytb.jpg","user.jpg","resorcmon.jpg"],
      

          ];

    function updateSlideImages() {
      const currentImages = imageSets[currentSet];
      slides.forEach((slide, index) => {
        slide.src = currentImages[index];
      });

      dots.forEach(dot => dot.classList.remove("active"));
      dots[currentSet].classList.add("active");
    }

    document.querySelector("#next-btn").addEventListener("click", () => {
      currentSet = (currentSet + 1) % totalSlides;
      updateSlideImages();
    });

    document.querySelector("#prev-btn").addEventListener("click", () => {
      currentSet = (currentSet - 1 + totalSlides) % totalSlides;
      updateSlideImages();
    });

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        currentSet = index;
        updateSlideImages();
      });
    });

    document.querySelector("#auto-slide-header").addEventListener("dblclick", () => {
      if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
        autoSlideInterval = null;
      } else {
        autoSlideInterval = setInterval(() => {
          currentSet = (currentSet + 1) % totalSlides;
          updateSlideImages();
        }, 3000);
      }
    });

    updateSlideImages(); 