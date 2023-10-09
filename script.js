const slide = document.querySelector(".js-slide");
const images = [
    "imgs/atbuth.jpg",
    "imgs/atbuth2.jpg",
    "imgs/fuhsa.jpeg",
]

let currentIndex = 0;
function changeBackground() {
    currentIndex = (currentIndex + 1) % images.length;
    slide.style.backgroundImage = `url('${images[currentIndex]}')`;
}

slide.style.backgroundImage = `url('${images[currentIndex]}')`;
setInterval(changeBackground, 4000)


const customGreetings = [
    { greeting: "Good morning!", startTime: 5, endTime: 11 },
    { greeting: "Good afternoon!", startTime: 12, endTime: 16 },
    { greeting: "Good evening!", startTime: 17, endTime: 23 }
];

function getGreeting() {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const selectedGreeting = customGreetings.find(g => currentHour >= g.startTime && currentHour <= g.endTime);
    if (!selectedGreeting && currentHour >= 0 &&currentHour < 5) {
        return "Up late, huh?";
    }
    return selectedGreeting ? selectedGreeting.greeting : "Hello!";
}
const greetingElement = (window.innerWidth < 750) ? document.querySelector('#greeting') : document.querySelector('#greetingDesktop');
greetingElement.textContent = getGreeting();

if (window.innerWidth < 750){
const menuBtn = document.querySelector('.menu_btn');
const closeBtn = document.querySelector('.close_btn');
const menu = document.querySelector('.header__nav ul');
const dropdown = document.querySelector('.header__nav');

menuBtn.addEventListener('click', () => {
    menu.style.display = 'block';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block';
});

closeBtn.addEventListener('click', () => {
    menu.style.display = 'none';
    menuBtn.style.display = 'inline-block';
    closeBtn.style.display = 'none';
});

const closeMenu = (e) => {
    if (!dropdown.contains(e.target)) {
        menu.style.display = 'none';
        menuBtn.style.display = 'inline-block';
        closeBtn.style.display = 'none';
    }
}

document.addEventListener('click', closeMenu);
document.addEventListener('scroll', closeMenu);
}

function scrollRevealAnimation(selector, triggerOffset = 0.85) {
  const elements = document.querySelectorAll(selector);

  function isElementInViewport(element) {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    return elementTop < windowHeight * triggerOffset;
  }

  function revealElements() {
    elements.forEach((element) => {
      if (isElementInViewport(element) && element.style.opacity !== "1") {
        element.style.opacity = 1;
        element.style.transform = "translateY(0)";
      }
    });
  }

  window.addEventListener("load", revealElements);
  window.addEventListener("scroll", revealElements);
}

scrollRevealAnimation(".visible_onscroll", 0.85);
