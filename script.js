window.onload = function () {
  document.getElementById("loader").style.display = "none";
  document.getElementById("main").style.display = "block";
};
//cursor animation
function cursorAnimation() {
  let cursor = document.querySelector(".cursor");
  let mainContainer = document.querySelector(".main");
  let cursorX = 0;
  let cursorY = 0;

  mainContainer.addEventListener("mousemove", (dets) => {
    cursorX = dets.x;
    cursorY = dets.y;
    moveCursor();
  });
  mainContainer.addEventListener("scroll", () => {
    moveCursor();
  });

  function moveCursor() {
    gsap.to(cursor, {
      x: cursorX,
      y: cursorY + window.scrollY,
      ease: "power2.out",
    });
  }
}
cursorAnimation();
//menu gone animation
gsap.to("nav", {
  transform: "translateY(-100%)",
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".page2",
    scrub: 2,
    end: "top 70%",
  },
});
//Whenn menu bar goes up show the 3 lines of menu
gsap.to("#nav #bottomNav", {
  opacity: 1,
  scale: 1,
  duration: 1,
  scrollTrigger: {
    trigger: ".page2",
    start: "top 80%",
    end: "top 50%",
    scrub: 2,
  },
});
// Home page timeline
var homeTimeline = gsap.timeline();

//Cratinfg name clutter
let fristElement = document.querySelector("#fristName");
let fristName = fristElement.textContent;
let splittedFristName = fristName.split("");
let nameClutter = "";
splittedFristName.forEach((e) => {
  nameClutter = nameClutter + `<span>${e}</span>`;
});
fristElement.innerHTML = nameClutter;
//Frist name animation
gsap.from(".name #fristName span", {
  opacity: 0,
  duration: 1,
  stagger: 0.09,
  ease: "power3.out",
});

//crafting lastname clutter
let lastElement = document.querySelector("#lastName");
let lastName = lastElement.textContent;
let splittedLastName = lastName.split("");
let lastNameClutter = "";
splittedLastName.forEach((e) => {
  lastNameClutter = lastNameClutter + `<span>${e}</span>`;
});
lastElement.innerHTML = lastNameClutter;
homeTimeline.from(".name #lastName span", {
  opacity: 0,
  delay: 0.5,
  stagger: 0.09,
  ease: "power3.out",
});
homeTimeline.from(".name .line", {
  opacity: 0,
  duration: 0.6,
  repeat: -1,
  yoyo: true,
});

//Menu item animation
gsap.from("nav .menu a", {
  opacity: 0,
  delay: 1,
  duration: 0.5,
  y: 10,
  stagger: 0.09,
});

gsap.from(".name .about", {
  opacity: 0,
  y: 10,
  delay: 1,
  duration: 1,
});
const swiper = new Swiper(".swiper", {
  speed: 400,
  spaceBetween: 100,
  autoplay: {
    delay: 2000,
  },
  navigation: false,
  pagination: false,
  loop: true,
});

//sending Email
(function () {
  emailjs.init("J7I2-SndejgNSd8T_"); // Replace with your Public Key
})();

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs
      .send("service_8psmn9e", "template_h8ewxs6", {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
      })
      .then(() => alert("Message Sent Successfully!"))
      .catch((error) => console.error("Error:", error));
  });
