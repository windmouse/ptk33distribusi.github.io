function showPopup(button) {
  var popup = button.nextElementSibling;
  popup.style.display = "block";
  popup.addEventListener("mouseenter", function() {
    showPopup(button);
  });
  popup.addEventListener("mouseleave", function() {
    hidePopup();
  });
}

function hidePopup() {
  var popups = document.querySelectorAll('.popup');
  popups.forEach(function(popup) {
    popup.style.display = "none";
  });
}