const noButton = document.getElementById("No");
const noSlot = document.querySelector(".no-slot");

function placeNoButtonOnSlot() {
  const slotRect = noSlot.getBoundingClientRect();

  // Put the fixed-position button exactly on top of the slot
  noButton.style.left = `${slotRect.left}px`;
  noButton.style.top = `${slotRect.top}px`;
}

// Place it correctly on load
placeNoButtonOnSlot();

// Keep it aligned if the window size changes
window.addEventListener("resize", placeNoButtonOnSlot);

noButton.addEventListener("mouseover", () => {
  const btnRect = noButton.getBoundingClientRect();

  // Keep it fully inside the viewport
  const padding = 10;
  const maxX = window.innerWidth - btnRect.width - padding;
  const maxY = window.innerHeight - btnRect.height - padding;

  const randomX = Math.floor(Math.random() * (maxX - padding + 1)) + padding;
  const randomY = Math.floor(Math.random() * (maxY - padding + 1)) + padding;

  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
});

function goToYesPage() {
  window.location.href = "yes.html";
}
