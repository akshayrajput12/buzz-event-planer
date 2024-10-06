// /* Created by Tivotal */

// let menu = document.querySelector("#menu-bars");
// let navbar = document.querySelector(".navbar");

// menu.onclick = () => {
//   menu.classList.toggle("fa-times");
//   navbar.classList.toggle("active");
// };

// let themeToggler = document.querySelector(".theme-toggler");
// let toggleBtn = document.querySelector(".toggle-btn");

// toggleBtn.onclick = () => {
//   themeToggler.classList.toggle("active");
// };

// window.onscroll = () => {
//   menu.classList.remove("fa-times");
//   navbar.classList.remove("active");
//   themeToggler.classList.remove("active");
// };

// document.querySelectorAll(".theme-toggler .theme-btn").forEach((btn) => {
//   btn.onclick = () => {
//     let color = btn.style.background;
//     document.querySelector(":root").style.setProperty("--theme-color", color);
//   };
// });

// var swiper = new Swiper(".home-slider", {
//   effect: "coverflow",
//   grabCursor: true,
//   centeredSlides: true,
//   slidesPerView: "auto",
//   coverflowEffect: {
//     rotate: 0,
//     stretch: 0,
//     depth: 100,
//     modifier: 2,
//     slideShadows: true,
//   },
//   loop: true,
//   autoplay: {
//     delay: 3000,
//     disableOnInteraction: false,
//   },
// });

// var swiper = new Swiper(".review-slider", {
//   slidesPerView: 1,
//   grabCursor: true,
//   loop: true,
//   spaceBetween: 10,
//   breakpoints: {
//     0: {
//       slidesPerView: 1,
//     },
//     700: {
//       slidesPerView: 2,
//     },
//     1050: {
//       slidesPerView: 3,
//     },
//   },
//   autoplay: {
//     delay: 5000,
//     disableOnInteraction: false,
//   },
// });

// // Show contact form after 3 seconds
// setTimeout(function() {
//   document.getElementById('contactFormModal').style.display = 'flex';
// }, 3000);

// // Submit form and close modal
// document.getElementById('contactForm').addEventListener('submit', function(e) {
//   e.preventDefault(); // Prevent actual form submission for demo

//   // Display success message (you can customize this)
//   alert('Form submitted successfully!'); // Placeholder for success message
  
//   // Close the modal after form submission
//   document.getElementById('contactFormModal').style.display = 'none';
// });




// //main crousal 
// let projectEntries = document.querySelectorAll('.project-showcase .showcase-entries .showcase-entry');
// let nextButton = document.getElementById('next-project'); // ID for next button
// let prevButton = document.getElementById('previous-project'); // ID for previous button
// let thumbnailEntries = document.querySelectorAll('.thumbnail-container .thumbnail-entry'); // Updated class for thumbnails

// // Config params
// let totalProjects = projectEntries.length; // total number of projects
// let currentProjectIndex = 0; // index of the currently active project

// // Event for next button click
// nextButton.onclick = function() {
//     currentProjectIndex++;
//     if (currentProjectIndex >= totalProjects) {
//         currentProjectIndex = 0; // loop back to the first project
//     }
//     updateProjectShowcase(); // update the showcase
// };

// // Event for previous button click
// prevButton.onclick = function() {
//     currentProjectIndex--;
//     if (currentProjectIndex < 0) {
//         currentProjectIndex = totalProjects - 1; // loop back to the last project
//     }
//     updateProjectShowcase(); // update the showcase
// };

// // Auto run showcase
// let autoRunInterval = setInterval(() => {
//     nextButton.click(); // simulate a click on the next button
// }, 5000);

// function updateProjectShowcase() {
//     // Remove active class from the old entry
//     let previousProject = document.querySelector('.project-showcase .showcase-entries .showcase-entry.active');
//     let previousThumbnail = document.querySelector('.thumbnail-container .thumbnail-entry.active');
    
//     if (previousProject) previousProject.classList.remove('active'); // remove active class from previous project
//     if (previousThumbnail) previousThumbnail.classList.remove('active'); // remove active class from previous thumbnail

//     // Activate new entry
//     projectEntries[currentProjectIndex].classList.add('active'); // add active class to new project
//     thumbnailEntries[currentProjectIndex].classList.add('active'); // add active class to new thumbnail
//     adjustThumbnailPosition(); // adjust the position of the thumbnail

//     // Clear auto run interval
//     clearInterval(autoRunInterval);
//     autoRunInterval = setInterval(() => {
//         nextButton.click(); // restart the auto run
//     }, 5000);
// }

// function adjustThumbnailPosition() {
//     let activeThumbnail = document.querySelector('.thumbnail-container .thumbnail-entry.active'); // get active thumbnail
//     let rect = activeThumbnail.getBoundingClientRect(); // get its position
//     if (rect.left < 0 || rect.right > window.innerWidth) {
//         activeThumbnail.scrollIntoView({ behavior: 'smooth', inline: 'nearest' }); // scroll into view if not visible
//     }
// }

// // Click on thumbnail
// thumbnailEntries.forEach((thumbnail, index) => {
//     thumbnail.addEventListener('click', () => {
//         currentProjectIndex = index; // set the active project index
//         updateProjectShowcase(); // update the showcase
//     });
// });



// //animal
// //step 1: get DOM
// let nextDom = document.getElementById('next');
// let prevDom = document.getElementById('prev');

// let carouselDom = document.querySelector('.carousel');
// let SliderDom = carouselDom.querySelector('.carousel .list');
// let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
// let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
// let timeDom = document.querySelector('.carousel .time');

// thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
// let timeRunning = 3000;
// let timeAutoNext = 7000;

// nextDom.onclick = function(){
//     showSlider('next');    
// }

// prevDom.onclick = function(){
//     showSlider('prev');    
// }
// let runTimeOut;
// let runNextAuto = setTimeout(() => {
//     next.click();
// }, timeAutoNext)
// function showSlider(type){
//     let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
//     let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
//     if(type === 'next'){
//         SliderDom.appendChild(SliderItemsDom[0]);
//         thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
//         carouselDom.classList.add('next');
//     }else{
//         SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
//         thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
//         carouselDom.classList.add('prev');
//     }
//     clearTimeout(runTimeOut);
//     runTimeOut = setTimeout(() => {
//         carouselDom.classList.remove('next');
//         carouselDom.classList.remove('prev');
//     }, timeRunning);

//     clearTimeout(runNextAuto);
//     runNextAuto = setTimeout(() => {
//         next.click();
//     }, timeAutoNext)
// }
/* Created by Tivotal */

// Menu Toggle
let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.addEventListener('click', () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});

// Theme Toggler
let themeToggler = document.querySelector(".theme-toggler");
let toggleBtn = document.querySelector(".toggle-btn");

toggleBtn.addEventListener('click', () => {
  themeToggler.classList.toggle("active");
});

// Scroll Behavior
window.addEventListener('scroll', () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
  themeToggler.classList.remove("active");
});

// Theme Color Switch
document.querySelectorAll(".theme-toggler .theme-btn").forEach((btn) => {
  btn.addEventListener('click', () => {
    let color = btn.style.backgroundColor;
    document.documentElement.style.setProperty("--theme-color", color);
  });
});

// Swiper for home-slider
let homeSlider = new Swiper(".home-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

// Swiper for review-slider
let reviewSlider = new Swiper(".review-slider", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  spaceBetween: 10,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1050: {
      slidesPerView: 3,
    },
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

// Show contact form modal after 3 seconds
setTimeout(() => {
  document.getElementById('contactFormModal').style.display = 'flex';
}, 3000);

// Form submission handling
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent actual form submission

  // Display success message (placeholder)
  alert('Form submitted successfully!');
  
  // Close the modal
  document.getElementById('contactFormModal').style.display = 'none';
});

// Project Showcase Carousel
let projectEntries = document.querySelectorAll('.project-showcase .showcase-entries .showcase-entry');
let nextButton = document.getElementById('next-project');
let prevButton = document.getElementById('previous-project');
let thumbnailEntries = document.querySelectorAll('.thumbnail-container .thumbnail-entry');

let totalProjects = projectEntries.length;
let currentProjectIndex = 0;

// Handle next button click
nextButton.addEventListener('click', () => {
  currentProjectIndex = (currentProjectIndex + 1) % totalProjects; // Loop to the first project
  updateProjectShowcase();
});

// Handle previous button click
prevButton.addEventListener('click', () => {
  currentProjectIndex = (currentProjectIndex - 1 + totalProjects) % totalProjects; // Loop to the last project
  updateProjectShowcase();
});

// Auto run the showcase every 5 seconds
let autoRunInterval = setInterval(() => {
  nextButton.click();
}, 5000);

function updateProjectShowcase() {
  let previousProject = document.querySelector('.project-showcase .showcase-entry.active');
  let previousThumbnail = document.querySelector('.thumbnail-container .thumbnail-entry.active');

  if (previousProject) previousProject.classList.remove('active');
  if (previousThumbnail) previousThumbnail.classList.remove('active');

  projectEntries[currentProjectIndex].classList.add('active');
  thumbnailEntries[currentProjectIndex].classList.add('active');
  adjustThumbnailPosition();

  clearInterval(autoRunInterval);
  autoRunInterval = setInterval(() => {
    nextButton.click();
  }, 5000);
}

function adjustThumbnailPosition() {
  let activeThumbnail = document.querySelector('.thumbnail-container .thumbnail-entry.active');
  let rect = activeThumbnail.getBoundingClientRect();
  if (rect.left < 0 || rect.right > window.innerWidth) {
    activeThumbnail.scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
  }
}

// Thumbnail click event
thumbnailEntries.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
    currentProjectIndex = index;
    updateProjectShowcase();
  });
});

// Animal Carousel
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = document.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');

let timeRunning = 3000;
let timeAutoNext = 7000;

// Append initial thumbnail
thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

nextDom.addEventListener('click', () => showSlider('next'));
prevDom.addEventListener('click', () => showSlider('prev'));

let runNextAuto = setTimeout(() => {
  nextDom.click();
}, timeAutoNext);

function showSlider(type) {
  let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
  let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');

  if (type === 'next') {
    SliderDom.appendChild(SliderItemsDom[0]);
    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    carouselDom.classList.add('next');
  } else {
    SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
    thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
    carouselDom.classList.add('prev');
  }

  clearTimeout(runNextAuto);
  runNextAuto = setTimeout(() => {
    nextDom.click();
  }, timeAutoNext);

  setTimeout(() => {
    carouselDom.classList.remove('next', 'prev');
  }, timeRunning);
}
