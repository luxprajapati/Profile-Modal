const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const aboutUser = document.querySelector(".aboutme");

const overlayA = document.querySelector(".overlayA");

// Modal open function
const openModal = () => {
  console.log("Modal is Open");
  modal.classList.add("active");
  overlay.classList.add("overlayactive");
};

// Modal close function
const closeModal = () => {
  modal.classList.remove("active");
  overlay.classList.remove("overlayactive");
  // aboutUser.classList.remove("aboutActive")
  // overlay.classList.remove("overlayactive");
};

const about = () => {
  console.log("Reading more about user");
  aboutUser.classList.add("aboutActive");
  overlayA.classList.add("overlayactiveA");
};

const closeModalA = () => {
  aboutUser.classList.remove("aboutActive");
  overlayA.classList.remove("overlayactiveA");
};
