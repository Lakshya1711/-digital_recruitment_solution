const user_Con = document.querySelector(".user-container");
const reg_btn = document.querySelector(".registration");
const log_btn = document.querySelector(".login");

log_btn.addEventListener("click", () => {
  user_Con.classList.add("login-section-display");
});

reg_btn.addEventListener("click", () => {
  user_Con.classList.remove("login-section-display");
});
