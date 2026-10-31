const logInBtn = document.querySelector(".log-in-btn");
const passwordInput = document.querySelector("#password-input");
const userEmailInput = document.querySelector("#useremail-input");
const modalScreen = document.querySelector(".modal-screen");
const signInOverlay = document.querySelector(".sign-in-overlay");
const confirmBtn = document.querySelector(".confirm-btn");

const GoIntoDashboard = () => {
  const passwordValue = passwordInput.value;
  const userEmailValue = userEmailInput.value;

  if (passwordValue === "admin" && userEmailValue === "admin") {
    window.location.replace(
      "http://127.0.0.1:5500/main/HTMLs%20file/Dashboard%20File/index.html",
    );
  } else {
    modalScreen.classList.remove("hidden");
    signInOverlay.classList.remove("hidden");
    passwordInput.value = "";
    userEmailInput.value = "";
  }
};
const closeModalScreen = () => {
  modalScreen.classList.add("hidden");
  signInOverlay.classList.add("hidden");
  passwordInput.value = "";
  userEmailInput.value = "";
};

logInBtn.addEventListener("click", GoIntoDashboard);
confirmBtn.addEventListener("click", closeModalScreen);
