// This is where it all goes :)
// document.addEventListener('DOMContentLoaded', function() {
//   const images = [
//     '/images/fuji.jpeg',
//     '/images/hamburg.jpg'
//   ];

//   let currentIndex = 0;

//   window.addEventListener('scroll', function() {
//     const scrollPosition = window.scrollY;
//     const windowHeight = window.innerHeight;

//     console.log(scrollPosition, currentIndex, images.length);

//     if (scrollPosition > windowHeight * 0.8) {
//       currentIndex = (currentIndex + 1) % images.length;
//       document.body.style.backgroundImage = `url(${images[0]})`;
//     }
//     if (scrollPosition < windowHeight * 0.8) {
//       currentIndex = (currentIndex + 1) % images.length;
//       document.body.style.backgroundImage = null;
//     }
//     // if (scrollPosition < windowHeight / 2) {
//     //   currentIndex = (currentIndex + 1) % images.length;
//     //   document.body.style.backgroundImage = `url(${images[1]})`;
//     //   // document.body.classList.add('bg-opacity-50'); // Add this line
//     // }
//   });
// });

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
