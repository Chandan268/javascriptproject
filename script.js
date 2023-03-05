// This code is optional and can be used to add interactivity or animation to the home structure.
// For example, you could add a click event to the door to open and close it.

const door = document.querySelector('.door');
let isOpen = false;

door.addEventListener('click', () => {
  if (isOpen) {
    door.style.transform = 'rotateY(0deg)';
    isOpen = false;
  } else {
    door.style.transform = 'rotateY(-90deg)';
    isOpen = true;
  }
});
