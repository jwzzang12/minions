const menuBtn = $(".menuBtn");
const menu = $(".menu");
const menuTL = gsap.timeline().from(".menu .txt", { opacity: 0, delay: 0.5, stagger: { each: 0.1 } });
const menuLogoTL = gsap
  .timeline()
  .from(".menu .menuLogo", {
    opacity: 0,
    delay: 0.5,
    y: -50,
    duration: 0.5,
  })
  .from(CSSRulePlugin.getRule(".menu ul li.on:after"), { duration: 0.1, cssRule: { x: -300, opacity: 0 } });

menuBtn.on("click", function () {
  menu.toggleClass("open");
  menuBtn.toggleClass("open");
  if (menu.hasClass("open") === true) {
    menuTL.restart();
    menuLogoTL.restart();
  }
});
menu.on("mousewheel", function (e) {
  e.preventDefault();
});
gsap.to(".bgCover", { opacity: 0, duration: 1, y: -1000, delay: 0.1 });
