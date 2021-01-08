VANTA.NET({
  el: "#promo",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 700.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0xa952e6,
  backgroundColor: 0x0,
  points: 7.00,
  maxDistance: 15.00,
  spacing: 7.00,
  showDots: false
});
const hamburger = document.querySelector('.hamburger'),
  menu = document.querySelector('.menu'),
  close = document.querySelector('.menu__close'),
  link = document.querySelectorAll('.menu__link');

hamburger.addEventListener('click', () => {
  menu.classList.add('active');
  for (let i = 0; i < link.length; i += 1) {
    link[i].classList.add('active__link');
  }
});
close.addEventListener('click', () => {
  menu.classList.remove('active')
});

const counters = document.querySelectorAll('.skills__percent'),
  line = document.querySelectorAll('.skills__scale .skills__scale-lvl');
counters.forEach((item, i) => {
  line[i].style.width = item.innerHTML;
});
const anchors = document.querySelectorAll('a.scroll')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href')

    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })
  })
}

