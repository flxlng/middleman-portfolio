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

//     if (scrollPosition > windowHeight / 2) {
//       currentIndex = (currentIndex + 1) % images.length;
//       document.body.style.backgroundImage = `url(${images[0]})`;
//       // document.body.classList.add('bg-opacity-50'); // Add this line
//     }
//     if (scrollPosition < windowHeight / 2) {
//       currentIndex = (currentIndex + 1) % images.length;
//       document.body.style.backgroundImage = `url(${images[1]})`;
//       // document.body.classList.add('bg-opacity-50'); // Add this line
//     }
//   });
// });
