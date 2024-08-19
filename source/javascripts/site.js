// This is where it all goes :)
document.addEventListener('DOMContentLoaded', function() {
  const images = [
    '/images/fuji.jpg',
    '/images/hamburg.jpg'
  ];

  let currentIndex = 0;
  let lastSwitchTime = 0; // Variable to store the last switch time
  const switchInterval = 1000; // Interval in milliseconds (3 seconds)

  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const currentTime = Date.now(); // Get the current time

    // console.log(scrollPosition, currentIndex, images.length);
    if (scrollPosition > windowHeight * 0.5 && (currentTime - lastSwitchTime) > switchInterval) {
      currentIndex = currentIndex === 0 ? 1 : 0;
      document.querySelector('.background-image').style.backgroundImage = `url(${images[currentIndex]})`;
      lastSwitchTime = currentTime; // Update the last switch time
    }
    // if (scrollPosition < windowHeight * 0.3) {
    //   currentIndex = (currentIndex + 1) % images.length;
    //   document.body.style.backgroundImage = `url(${images[0]})`;
    // }
    // if (scrollPosition < windowHeight / 2) {
    //   currentIndex = (currentIndex + 1) % images.length;
    //   document.body.style.backgroundImage = `url(${images[1]})`;
    //   // document.body.classList.add('bg-opacity-50'); // Add this line
    // }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const avatar = document.querySelector('.avatar');
  let isAnimating = true;

  avatar.addEventListener('click', function() {
    if (isAnimating) {
      // Stop the animation
      avatar.style.animation = 'none';
      avatar.style.transform = getComputedStyle(avatar).transform;
    } else {
      console.log("restarting spinning");
      // Restart the animation
      avatar.style.animation = '';
      avatar.style.transform = '';
    }
    isAnimating = !isAnimating;
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const contactButton = document.querySelector('.contact-button');
  if (contactButton) {
    contactButton.addEventListener('click', function() {
      console.log("clicker");
      this.classList.toggle('active');
    });
  } else {
    console.error('Element with class .contact-button not found');
  }
});
