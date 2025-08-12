// Modal for interactive gallery preview
function openModal(src) {
  const modal = document.getElementById("modal");
  modal.style.display = "flex";
  document.getElementById("modal-img").src = src;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Optional: Prevent form real submission for demo purposes
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', function(e){
      e.preventDefault();
      alert("Message sent! We'll get back to you soon.");
      form.reset();
    });
  }
});
