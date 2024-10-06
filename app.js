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
  autoplay: false, // Disabled autoplay to prevent auto-scroll issues
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

// Update project showcase and adjust thumbnail position if necessary
function updateProjectShowcase() {
  let previousProject = document.querySelector('.project-showcase .showcase-entry.active');
  let previousThumbnail = document.querySelector('.thumbnail-container .thumbnail-entry.active');

  if (previousProject) previousProject.classList.remove('active');
  if (previousThumbnail) previousThumbnail.classList.remove('active');

  projectEntries[currentProjectIndex].classList.add('active');
  thumbnailEntries[currentProjectIndex].classList.add('active');
  
  // Disable automatic thumbnail scroll during manual interactions
  if (!autoRunInterval) {
    adjustThumbnailPosition(); // Adjust thumbnail position only if auto-run is not active
  }

  clearInterval(autoRunInterval); // Stop auto-run on manual interaction
  autoRunInterval = setInterval(() => {
    nextButton.click();
  }, 5000);
}

// Adjust thumbnail position
function adjustThumbnailPosition() {
  let activeThumbnail = document.querySelector('.thumbnail-container .thumbnail-entry.active');
  let rect = activeThumbnail.getBoundingClientRect();

  // Only scroll if more than 50% of the thumbnail is out of view
  if (rect.left < window.innerWidth * 0.1 || rect.right > window.innerWidth * 0.9) {
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
