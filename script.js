// Function to scroll right
function scrollRight(containerId) {
  const container = document.getElementById(containerId);
  container.scrollBy({
    left: 300, // Adjust this to scroll by a specific amount
    behavior: 'smooth'
  });
}

// Function to scroll left
function scrollLeft(containerId) {
  const container = document.getElementById(containerId);
  container.scrollBy({
    left: -300, // Adjust this to scroll by a specific amount
    behavior: 'smooth'
  });
}

// Event listeners for Media Production section
document.getElementById('scroll-right-media').addEventListener('click', function() {
  scrollRight('media-production');
});
document.getElementById('scroll-left-media').addEventListener('click', function() {
  scrollLeft('media-production');
});

// Event listeners for Healthcare section
document.getElementById('scroll-right-healthcare').addEventListener('click', function() {
  scrollRight('healthcare');
});
document.getElementById('scroll-left-healthcare').addEventListener('click', function() {
  scrollLeft('healthcare');
});

// Event listeners for Education section
document.getElementById('scroll-right-education').addEventListener('click', function() {
  scrollRight('education');
});
document.getElementById('scroll-left-education').addEventListener('click', function() {
  scrollLeft('education');
});

// Set the text for the typing animation
const typingText = "Focus areas: We teach the machine to solve real-world problems with advanced reasoning.";
let index = 0;

function typeWriter() {
  if (index < typingText.length) {
    document.getElementById("typing-text").innerHTML += typingText.charAt(index);
    index++;
    setTimeout(typeWriter, 100); // Adjust typing speed here
  }
}

window.onload = typeWriter;