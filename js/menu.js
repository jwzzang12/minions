const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('#main-menu');

const menuItemTL = gsap.timeline().from('.menu-item', {
  opacity: 0,
  delay: 0.5,
  stagger: { each: 0.1 },
});

const menuLogoTL = gsap.timeline().from('.menu-logo', {
  opacity: 0,
  delay: 0.5,
  y: -50,
  duration: 0.5,
});

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('open');
  menuBtn.classList.toggle('open');
  if (menu.classList.contains('open')) {
    menuItemTL.restart();
    menuLogoTL.restart();
  }
});

menu.addEventListener('wheel', (e) => e.preventDefault());

gsap.to('.bg-cover', {
  opacity: 0,
  duration: 1,
  y: -1500,
  delay: 0.1,
});
