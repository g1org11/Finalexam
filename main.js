let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";

  setTimeout(showSlides, 5000); // Change image every 2 seconds
}
// slider
const slideItems = document.querySelectorAll(".slider-item");

const balls = document.querySelectorAll(".ball");

let activeIndex = 0;

initSlider();
function initSlider() {
  balls.forEach((ball, ballIndex) => {
    ball.addEventListener("click", () => {
      handleBallClick(ballIndex);
    });
  });
}

function renderSliders() {
  slideItems.forEach((item, i) => {
    if (activeIndex === i) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

function showPrevSlide() {
  activeIndex = activeIndex - 1;
  if (activeIndex < 0) {
    activeIndex = slideItems.length - 1;
  }
  renderSliders();
}

function showNextSlide() {
  activeIndex = activeIndex + 1;
  if (activeIndex > slideItems.length - 1) {
    activeIndex = 0;
  }
  renderSliders();
}

function handleBallClick(nextIndex) {
  activeIndex = nextIndex;
  renderSliders();
}
/////////////
const work = document.querySelector(".work");
/////////////
//last projects
filter("all");
function filter(c) {
  let x, i;
  x = document.getElementsByClassName("project-contents");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }
}

function AddClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function RemoveClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

let btnContainer = document.getElementById("sidebar");
let btns = document.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
const yourname = document.querySelector(".yourname");
const email = document.querySelector(".emailaddress");
const website = document.querySelector(".Yourwebsite");
const massage = document.querySelector("#area");
const submit = document.querySelector(".submit");
const formcontent = document.querySelector(".form-content");
async function getUsers() {
  try {
    const response = await fetch("http://api.kesho.me/v1/user-test/contact");
    const users = await response.json();
  } catch (e) {
    console.log("Error - ", e);
  }
}

async function createUser(userData) {
  try {
    const response = await fetch("http://api.kesho.me/v1/user-test/create", {
      method: "post",
      body: JSON.stringify(userData),
      headers: { "Content-Type": "application/json" },
    });
    await response.json();
    await getUsers(); // TODO: შენახვის ედიტირების და წაშლის შემდეგ ახლიდან წამოიღეთ დატა
  } catch (e) {
    console.log("Error - ", e);
  }
}

formcontent.addEventListener("submit", async (e) => {
  e.preventDefault();

  const userData = {
    first_name: yourname.value,
    email: email.value,
    web: website.value,
    massage: massage.value,
  };

  if (yourname.value === "") {
    // იქმნება
    await createUser(userData);
  }

  formcontent.reset();
});
function Functionalert() {
  alert("Thank you for getting in touch! We appreciate you contacting us.");
}

const modalOpenBtn = document.querySelector(".submit");
modalOpenBtn.addEventListener("click", () => {
  Functionalert();
});
