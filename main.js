// Get DOM Elements
const closeBtn = document.querySelector(".closeBtn");
const modal = document.querySelector(".modal");
let modalBtn = document.querySelector("#modalBtn");

// Events
modalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", closeOutside);

// Open
function openModal() {
  modal.style.display = "block";
}

// Close
function closeModal() {
  modal.style.display = "none";
}
// Close If Outside Clicks
function closeOutside(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}
