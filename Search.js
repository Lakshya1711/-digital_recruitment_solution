const searchbtn = document.querySelector(".searchbtn");
const closebtn = document.querySelector(".closebtn");
const searchbox = document.querySelector(".searchbox");

searchbtn.onclick = function () {
  searchbox.classList.add("active");
  closebtn.classList.add("active");
  searchbtn.classList.add("active");
};

closebtn.onclick = function () {
  searchbox.classList.remove("active");
  closebtn.classList.remove("active");
  searchbtn.classList.remove("active");
};

const searchFun = () => {
  let filter = document.getElementById("myInput").value.toUpperCase();
};
