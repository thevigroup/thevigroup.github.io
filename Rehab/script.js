const proposalContainer = document.getElementById("proposal");

async function fetchMarkdown() {
  const url = 'https://raw.githubusercontent.com/barchart/marketdata-api-js/refs/heads/master/README.md';

  try {
    const response = await fetch(url);
    const text = await response.text();
    typeText(text);
  } catch (error) {
    proposalContainer.textContent = "Failed to load proposal.";
    console.error(error);
  }
}

function typeText(text, index = 0) {
  if (index < text.length) {
    proposalContainer.textContent += text.charAt(index);
    setTimeout(() => typeText(text, index + 1), 10); // adjust speed here
  }
}

fetchMarkdown();