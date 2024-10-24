/* Created by Tivotal */

// Menu Toggle with animation
let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.addEventListener('click', () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
  
  // Add a staggered animation to navbar items
  document.querySelectorAll('.navbar a').forEach((item, index) => {
    if (navbar.classList.contains('active')) {
      item.style.animation = `navItemFade 0.5s ease forwards ${index / 7 + 0.3}s`;
    } else {
      item.style.animation = '';
    }
  });
});

// Theme Toggler with smooth transition
let themeToggler = document.querySelector(".theme-toggler");
let toggleBtn = document.querySelector(".toggle-btn");

toggleBtn.addEventListener('click', () => {
  themeToggler.classList.toggle("active");
  toggleBtn.classList.add('rotate');
  setTimeout(() => toggleBtn.classList.remove('rotate'), 300);
});

// Scroll Behavior with smooth hide/show
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    document.querySelector('.header').style.top = '-100px';
  } else {
    document.querySelector('.header').style.top = '0';
  }
  lastScrollTop = scrollTop;

  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
  themeToggler.classList.remove("active");
});

// Theme Color Switch with transition
document.querySelectorAll(".theme-toggler .theme-btn").forEach((btn) => {
  btn.addEventListener('click', () => {
    let color = btn.style.backgroundColor;
    document.documentElement.style.setProperty("--theme-color", color);
    document.body.style.transition = "background-color 0.5s ease";
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

// Show contact form modal with animation
setTimeout(() => {
  const modal = document.getElementById('contactFormModal');
  modal.style.display = 'flex';
  modal.style.animation = 'modalFadeIn 0.5s ease forwards';
}, 10000);

// Form submission handling with confetti effect
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Form submitted successfully!');
  document.getElementById('contactFormModal').style.display = 'none';
  
  // Confetti effect
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
});

// Project Showcase Carousel with smooth transitions
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

document.addEventListener('DOMContentLoaded', function() {
  const video = document.getElementById('about-video');
  const playPauseIcon = document.getElementById('play-pause-icon');
  const movingPlayIcon = document.getElementById('moving-play-icon');
  const imageContainer = document.querySelector('.about .image-container');

  playPauseIcon.addEventListener('click', function() {
    if (video.paused) {
      video.play();
      playPauseIcon.classList.remove('fa-play');
      playPauseIcon.classList.add('fa-pause');
    } else {
      video.pause();
      playPauseIcon.classList.remove('fa-pause');
      playPauseIcon.classList.add('fa-play');
    }
  });

  imageContainer.addEventListener('mousemove', function(e) {
    const rect = imageContainer.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    movingPlayIcon.style.left = `${x}px`;
    movingPlayIcon.style.top = `${y}px`;
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Add a scroll-to-top button
const scrollTopButton = document.createElement('button');
scrollTopButton.innerHTML = '↑';
scrollTopButton.setAttribute('id', 'scroll-top-btn');
document.body.appendChild(scrollTopButton);

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollTopButton.style.display = 'block';
  } else {
    scrollTopButton.style.display = 'none';
  }
});

scrollTopButton.addEventListener('click', () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
});

// Infinite scroll for review cards
const reviewTrack = document.querySelector('.review-track');
const reviewCards = document.querySelectorAll('.review-card');

// Clone the review cards to create a seamless loop
reviewCards.forEach((card) => {
  const clone = card.cloneNode(true);
  reviewTrack.appendChild(clone);
});

// Pause animation on hover
reviewTrack.addEventListener('mouseenter', () => {
  reviewTrack.style.animationPlayState = 'paused';
});

reviewTrack.addEventListener('mouseleave', () => {
  reviewTrack.style.animationPlayState = 'running';
});

// Touch events for mobile devices
let startX;
let scrollLeft;

reviewTrack.addEventListener('touchstart', (e) => {
  startX = e.touches[0].pageX - reviewTrack.offsetLeft;
  scrollLeft = reviewTrack.scrollLeft;
});

reviewTrack.addEventListener('touchmove', (e) => {
  if (!startX) return;
  const x = e.touches[0].pageX - reviewTrack.offsetLeft;
  const walk = (x - startX) * 2;
  reviewTrack.scrollLeft = scrollLeft - walk;
});

reviewTrack.addEventListener('touchend', () => {
  startX = null;
});
// Animate gallery items on scroll
function animateGalleryItems() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  galleryItems.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (itemTop < windowHeight * 0.8) {
      item.classList.add('animate');
    }
  });
}

window.addEventListener('scroll', animateGalleryItems);
window.addEventListener('load', animateGalleryItems);

// Gallery modal functionality
const modal = document.getElementById('galleryModal');
const modalImg = document.getElementById('galleryModalImg');
const closeBtn = document.getElementsByClassName('gallery-modal-close')[0];
const galleryImages = document.querySelectorAll('.gallery-fullscreen');

galleryImages.forEach(img => {
  img.onclick = function() {
    modal.style.display = 'block';
    modalImg.src = this.getAttribute('href');
    setTimeout(() => modal.classList.add('show'), 10);
  }
});

closeBtn.onclick = function() {
  modal.classList.remove('show');
  setTimeout(() => modal.style.display = 'none', 300);
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.classList.remove('show');
    setTimeout(() => modal.style.display = 'none', 300);
  }
}