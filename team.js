let projectEntries = document.querySelectorAll('.project-showcase .showcase-entries .showcase-entry');
let nextButton = document.getElementById('next-project'); // ID for next button
let prevButton = document.getElementById('previous-project'); // ID for previous button
let thumbnailEntries = document.querySelectorAll('.thumbnail-container .thumbnail-entry'); // Updated class for thumbnails

// Config params
let totalProjects = projectEntries.length; // total number of projects
let currentProjectIndex = 0; // index of the currently active project

// Event for next button click
nextButton.onclick = function() {
    currentProjectIndex++;
    if (currentProjectIndex >= totalProjects) {
        currentProjectIndex = 0; // loop back to the first project
    }
    updateProjectShowcase(); // update the showcase
};

// Event for previous button click
prevButton.onclick = function() {
    currentProjectIndex--;
    if (currentProjectIndex < 0) {
        currentProjectIndex = totalProjects - 1; // loop back to the last project
    }
    updateProjectShowcase(); // update the showcase
};

// Auto run showcase
let autoRunInterval = setInterval(() => {
    nextButton.click(); // simulate a click on the next button
}, 5000);

function updateProjectShowcase() {
    // Remove active class from the old entry
    let previousProject = document.querySelector('.project-showcase .showcase-entries .showcase-entry.active');
    let previousThumbnail = document.querySelector('.thumbnail-container .thumbnail-entry.active');
    
    if (previousProject) previousProject.classList.remove('active'); // remove active class from previous project
    if (previousThumbnail) previousThumbnail.classList.remove('active'); // remove active class from previous thumbnail

    // Activate new entry
    projectEntries[currentProjectIndex].classList.add('active'); // add active class to new project
    thumbnailEntries[currentProjectIndex].classList.add('active'); // add active class to new thumbnail
    adjustThumbnailPosition(); // adjust the position of the thumbnail

    // Clear auto run interval
    clearInterval(autoRunInterval);
    autoRunInterval = setInterval(() => {
        nextButton.click(); // restart the auto run
    }, 5000);
}

function adjustThumbnailPosition() {
    let activeThumbnail = document.querySelector('.thumbnail-container .thumbnail-entry.active'); // get active thumbnail
    let rect = activeThumbnail.getBoundingClientRect(); // get its position
    if (rect.left < 0 || rect.right > window.innerWidth) {
        activeThumbnail.scrollIntoView({ behavior: 'smooth', inline: 'nearest' }); // scroll into view if not visible
    }
}

// Click on thumbnail
thumbnailEntries.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        currentProjectIndex = index; // set the active project index
        updateProjectShowcase(); // update the showcase
    });
});
